# Usage
- Create a generic `Collection`
  ```go
  func main() {
      // You need to create a *mongo.Collection object in advance
      mongoColl := newCollection()
      // Create a collection using the User struct as a generic parameter
      userColl := mongox.NewCollection[User](mongoColl)
  }

  // Sample code, not the best way to create it
  func newCollection() *mongo.Collection {
      client, err := mongo.Connect(context.Background(), options.Client().ApplyURI("mongodb://localhost:27017").SetAuth(options.Credential{
          Username:   "test",
          Password:   "test",
          AuthSource: "db-test",
      }))
      if err != nil {
          panic(err)
      }
      err = client.Ping(context.Background(), readpref.Primary())
      if err != nil {
          panic(err)
      }
      collection := client.Database("db-test").Collection("test_post")
      return collection
  }
  
  type User struct {
      mongox.Model `bson:"inline"`
      Name         string `bson:"name"`
      Age          int    `bson:"age"`
  }
  ```
  With the `mongox.NewCollection` function, we can specify generic parameters and create a generic `Collection` object. This way we can use the `userColl` object to manipulate the document of type `User`.
  
  The following operations will be based on the 'userColl' object for example.
- Insert operation
  ```go
  // Insert a document
  insertOneResult, err := userColl.Creator().InsertOne(context.Background(), &User{Name: "chenmingyong"})
  // Insert multiple documents
  insertMany, err := userColl.Creator().InsertMany(context.Background(), []*User{
      {Name: "chenmingyong", Age: 24},
      {Name: "burt", Age: 25},
  })
  ```
- Delete operation
  ```go
  // Delete a document based on name
  deleteResult, err := userColl.Deleter().Filter(query.Eq("name", "chenmingyong")).DeleteOne(context.Background())
  // Delete multiple documents based on name
  deleteMany, err := userColl.Deleter().Filter(query.In("name", "chenmingyong", "burt")).DeleteMany(context.Background())
  ```
- Update operation
  ```go
  // Update a single document
  updateResult, err := userColl.Updater().Filter(query.Eq("name", "chenmingyong")).Updates(update.Set("name", "burt")).UpdateOne(context.Background())
  // Update multiple documents
  updateResult, err := userColl.Updater().
      Filter(query.BsonBuilder().Gt("age", 18).Lt("age", 25).Build()).Updates(update.Set("name", "burt")).
      UpdateOne(context.Background())
  // Upsert
  updateResult, err := userColl.Updater().Filter(query.Id("60e96214a21b1b0001c3d69e")).Replacement(&User{Name: "chenmingyong", "age": 24}).Upsert(context.Background())
  ```
- 查询操作
  ```go
  // Find a document
  findResult, err := userColl.Finder().Filter(query.Eq("name", "chenmingyong")).FindOne(context.Background())
  // Find multiple documents
  findResults, err := userColl.Finder().Filter(query.In("name", "chenmingyong", "burt")).Find(context.Background())
  // Count, find the number of documents
  count, err := userColl.Finder().Filter(query.Gt("age", 18)).Count(context.Background())
  ```
- Aggregation operation
  ```go
  // Aggregate query
  users, err := userColl.Aggregator().
      Pipeline(aggregation.StageBsonBuilder().Project(bsonx.M("age", 0)).Build()).
      Aggregate(context.Background())
  // Aggregate query and parse the result
  type DiffUser struct {
      mongox.Model `bson:"inline"`
      RealName     string `bson:"real_name"`
      Age          int    `bson:"age"`
  }
  diffUsers := make([]*DiffUser, 0)
  err := userColl.Aggregator().
      Pipeline(aggregation.StageBsonBuilder().Project(
          bsonx.NewD().Add("age", 0).Add("real_name", "$name").Build(),
      ).Build()).
      AggregateWithParse(context.Background(), &diffUsers)
  ```

# bson construction
- universal bson construction
  ```go
  // bson.M{"name": "chenmingyong"}
  m := bsonx.M("name", "chenmingyong")
  
  // bson.M{"_id": "chenmingyong"}
  id := bsonx.Id("chenmingyong")
  
  // bson.E{Key:"name", Value:"chenmingyong"}
  e := bsonx.E("name", "chenmingyong")
  
  // bson.D{bson.E{Key:"name", Value:"chenmingyong"}, bson.E{Key:"手机号", Value:"1888***1234"}}
  d := bsonx.D(bsonx.E("name", "chenmingyong"), bsonx.E("手机号", "1888***1234"))
  // 我们还可以使用 bsonx.DBuilder 来构建 bson.D
  d2 := bsonx.NewD().Add("name", "chenmingyong").Add("手机号", "1888***1234").Build()
  
  // bson.A{"chenmingyong", "1888***1234"}
  a := bsonx.A("chenmingyong", "1888***1234")
  ```
- query: query statement construction
  ```go
  // Constructed directly by a function
  // bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$eq", Value:"chenmingyong"}}}}
  d := query.Eq("name", "chenmingyong")
  
  //  bson.D{bson.E{Key:"age", Value:bson.D{{Key:"$in", Value:[]int{18, 19, 20}}}}}
  d = query.In("age", 18, 19, 20)
  
  // elemMatch
  // bson.D{bson.E{Key: "result", Value: bson.D{bson.E{Key: "$elemMatch", Value: bson.D{bson.E{Key: "$gte", Value: 80}, bson.E{Key: "$lt", Value: 85}}}}}}
  d = query.ElemMatch("result", bsonx.D(bsonx.E("$gte", 80), bsonx.E("$lt", 85)))
  
  // Constructed by a constructor
  // bson.D{bson.E{Key:"age", Value:bson.D{{Key:"$gt", Value:18}, bson.E{Key:"$lt", Value:25}}}}
  d = query.BsonBuilder().Gt("age", 18).Lt("age", 25).Build()
  
  // bson.d{bson.E{Key: "$and", Value: []any{bson.D{{Key: "x", Value: bson.D{{Key: "$ne", Value: 0}}}}, bson.D{{Key: "y", Value: bson.D{{Key: "$gt", Value: 0}}}}}}
  d = query.BsonBuilder().And(
      query.BsonBuilder().Ne("x", 0).Build(),
      query.BsonBuilder().Gt("y", 0).Build(),
  ).Build()
  
  // bson.D{bson.E{Key:"qty", Value:bson.D{{Key:"$exists", Value:true}, bson.E{Key:"$nin", Value:[]int{5, 15}}}}}
  d = query.BsonBuilder().Exists("qty", true).NinInt("qty", 5, 15).Build()
  ```
- update: update statement construction
  ```go
  // Constructed directly by a function
  // bson.D{bson.E{Key:"$set", Value:bson.M{"name":"chenmingyong"}}}
  u := update.Set("name", "chenmingyong")
  
  // bson.D{bson.E{Key:"$inc", Value:bson.D{bson.E{Key:"ratings", Value:-1}}}}
  u = update.BsonBuilder().Inc("ratings", -1).Build()
  
  // bson.D{bson.E{Key:"$push", Value:bson.M{"scores":95}}}
  u = update.BsonBuilder().Push("scores", 95).Build()
  
  // Constructed by a constructor
  // bson.D{bson.E{Key:"$set", Value:bson.D{bson.E{Key:"name", Value:"chenmingyong"}, bson.E{Key:"sex", Value:"男"}}}}
  u = update.BsonBuilder().Set("name", "chenmingyong").Set("sex", "男").Build()
  // bson.D{bson.E{Key:"$set", Value:bson.D{bson.E{Key:"name", Value:"chenmingyong"}}}, bson.E{Key:"$inc", Value:bson.D{bson.E{Key:"rating Value:-1}}}, bson.E{Key:"$push", Value:bson.D{bson.E{Key:"scores", Value:95}}}}
  u = update.BsonBuilder().Set("name", "chenmingyong").Inc("ratings", -1).Push("scores", 95).Build()
  ```

- aggregation: aggregation statement construction
  ```go
  // bson.D{bson.E{Key:"total", Value:bson.D{bson.E{Key:"$gt", Value:[]interface {}{"$price", "$fee"}}}}}
  gt := aggregation.Gt("total", []any{"$price", "$fee"}...)
  
  // mongo.Pipeline{bson.D{bson.E{Key:"$project", Value:bson.D{bson.E{Key:"name", Value:1}, bson.E{Key:"qtyGt250", Value:bson.D{bson.E{Key:"total", Value:bson.D{bson.E{Key:"$gt", Value:[]interface {}{"$price", "$fee"}}}}}}}}}}
  pipeline := aggregation.StageBsonBuilder().
      Project(bsonx.NewD().Add("name", 1).Add("qtyGt250", gt).Build()).
      Build()
  
  // bson.D{bson.E{Key:"result", Value:bson.D{bson.E{Key:"$or", Value:[]interface {}{bson.D{bson.E{Key:"$gt", Value:[]interface {}{"score", 70}}, bson.E{Key:"score", Value:bson.D{bson.E{Key:"$lt", Value:[]interface {}{90}}}}}, bson.D{bson.E{Key:"views", Value:bson.D{bson.E{Key:"$gte", Value:[]interface {}{90}}}}}}}}}}
  or := aggregation.BsonBuilder().Or("result", aggregation.BsonBuilder().GtWithoutKey("score", 70).Lt("score", 90).Build(), aggregation.BsonBuilder().Gte("views", 90).Build()).Build()
  
  // mongo.Pipeline{bson.D{bson.E{Key:"$match", Value:bson.D{bson.E{Key:"result", Value:bson.D{bson.E{Key:"$or", Value:[]interface {}{bson.D{bson.E{Key:"$gt", Value:[]interface {}{"score", 70}}, bson.E{Key:"score", Value:bson.D{bson.E{Key:"$lt", Value:[]interface {}{90}}}}}, bson.D{bson.E{Key:"views", Value:bson.D{bson.E{Key:"$gte", Value:[]interface {}{90}}}}}}}}}}}}, bson.D{bson.E{Key:"$group", Value:bson.D{bson.E{Key:"_id", Value:interface {}(nil)}, bson.E{Key:"count", Value:bson.D{bson.E{Key:"$sum", Value:1}}}}}}}
  pipeline = aggregation.StageBsonBuilder().
      Match(or).
      Group(nil, aggregation.Sum("count", 1)...).Build()
  
  // mongo.Pipeline{bson.D{bson.E{Key:"$unwind", Value:"$size"}}}
  pipeline = aggregation.StageBsonBuilder().Unwind("$size", nil).Build()
  
  // mongo.Pipeline{bson.D{bson.E{Key:"$unwind", Value:bson.D{bson.E{Key:"path", Value:"$size"}, bson.E{Key:"includeArrayIndex", Value:"arrayIndex"}, bson.E{Key:"preserveNullAndEmptyArrays", Value:true}}}}}
  pipeline = aggregation.StageBsonBuilder().Unwind("$size", &types.UnWindOptions{
      IncludeArrayIndex:          "arrayIndex",
      PreserveNullAndEmptyArrays: true,
  }).Build()
  ```
# Hooks
```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

func (u *User) BeforeInsert(ctx context.Context) error {
	fmt.Println("BeforeInsert")
	return nil
}

func (u *User) AfterInsert(ctx context.Context) error {
	fmt.Println("AfterInsert")
	return nil
}

insertOneResult, err := userColl.Creator().InsertOne(context.Background(), &User{Name: "chenmingyong"})
```
# Plugin
```go
// You can register a callback at any time
mongox.Register("myBeforeInsertHook", func(ctx context.Context, opCtx *operation.OpContext, opts ...any) error {
    // do something
    return nil
}, operation.OpTypeBeforeInsert)

// You can remove a callback at any time
mongox.Remove("myBeforeInsertHook", operation.OpTypeBeforeInsert)
```