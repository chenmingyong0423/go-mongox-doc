# Getting Started
## Install
The `mongox` library has released a `v2` version to be compatible with the official `mongo-driver` `v2`. Currently, the `mongo-driver v2` is in its `beta` phase, and once it is officially released, `mongox` will stop adding new features to `v1` and will focus solely on `v2`. However, for now, both `v1` and `v2` versions will receive new feature updates.

Select the appropriate `mongox` version based on the `mongo-driver` version in use:

- If you are using `mongo-driver 1.x`:

  ```bash
  go get github.com/chenmingyong0423/go-mongox
  ```

- If you are using `mongo-driver 2.x`:

  ```bash
  go get github.com/chenmingyong0423/go-mongox/v2
  ```

## Usage
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
      // v1
      //client, err := mongo.Connect(context.Background(), options.Client().ApplyURI("mongodb://localhost:27017").SetAuth(options.Credential{
      //	Username:   "test",
      //	Password:   "test",
      //	AuthSource: "db-test",
      //}))
  
      // v2
      client, err := mongo.Connect(options.Client().ApplyURI("mongodb://localhost:27017").SetAuth(options.Credential{
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
      collection := client.Database("db-test").Collection("test_user")
      return collection
  }
  
  type User struct {
      mongox.Model `bson:",inline"`
      Name         string `bson:"name"`
      Age          int    `bson:"age"`
  }
  ```
  With the `mongox.NewCollection` function, we can specify generic parameters and create a generic `Collection` object. This way we can use the `userColl` object to manipulate the document of type `User`.

  The following operations will be based on the 'userColl' object for example.

  [More about generic Collection](../collection/generic-collection)
- Insert operation
  ```go
  // Insert a document
  insertOneResult, err := userColl.Creator().InsertOne(context.Background(), &User{Name: "Mingyong Chen"})
  // Insert multiple documents
  insertMany, err := userColl.Creator().InsertMany(context.Background(), []*User{
      {Name: "Mingyong Chen", Age: 24},
      {Name: "burt", Age: 25},
  })
  ```
  [More about Creator](../operator/creator)
- Delete operation
  ```go
  // Delete a document based on name
  deleteResult, err := userColl.Deleter().Filter(query.Eq("name", "Mingyong Chen")).DeleteOne(context.Background())
  // Delete multiple documents based on name
  deleteResult, err = userColl.Deleter().Filter(query.In("name", "Mingyong Chen", "burt")).DeleteMany(context.Background())
  ```
  [More about Deleter](../operator/deleter)
- Update operation
  ```go
  // Update a single document
  updateResult, err := userColl.Updater().Filter(query.Eq("name", "Mingyong Chen")).Updates(update.Set("name", "burt")).UpdateOne(context.Background())
  // Update multiple documents
  updateResult, err = userColl.Updater().
      Filter(query.NewBuilder().Gt("age", 18).Lt("age", 25).Build()).Updates(update.Set("name", "burt")).
      UpdateOne(context.Background())
  // Upsert
  updateResult, err = userColl.Updater().
      Filter(query.Eq("name", "chenmingyong")).
      Updates(update.NewBuilder().Set("name", "chenmingyong").Set("age", 18).Build()).
      Upsert(context.Background())
  ```
  [More about Updater](../operator/updater)
- Query operation
  ```go
  // Find a document
  user, err := userColl.Finder().Filter(query.Eq("name", "Mingyong Chen")).FindOne(context.Background())
  // Find multiple documents
  users, err := userColl.Finder().Filter(query.In("name", "Mingyong Chen", "burt")).Find(context.Background())
  // Count, find the number of documents
  count, err := userColl.Finder().Filter(query.Gt("age", 18)).Count(context.Background())
  ```
  [More about Finder](../operator/finder)
- Aggregation operation
  ```go
  // Aggregate query
  users, err := userColl.Aggregator().
      Pipeline(aggregation.NewStageBuilder().Project(bsonx.M("age", 0)).Build()).
      Aggregate(context.Background())
  // Aggregate query and parse the result
  type RealUser struct {
      mongox.Model `bson:"inline"`
      RealName     string `bson:"real_name"`
      Age          int    `bson:"age"`
  }
  var results []*RealUser
  err = userColl.Aggregator().
      Pipeline(aggregation.NewStageBuilder().Project(
          bsonx.NewD().Add("real_name", "$name").Add("age", 1).Build(),
      ).Build()).
      AggregateWithParse(context.Background(), &results)
  ```
  [More about Aggregator](../operator/aggregator)

## Bson Build
- universal bson build
  ```go
  // bson.M{"name": "Mingyong Chen"}
  m := bsonx.M("name", "Mingyong Chen")
  
  // bson.M{"_id": "Mingyong Chen"}
  id := bsonx.Id("Mingyong Chen")
  
  // bson.E{Key:"name", Value:"Mingyong Chen"}
  e := bsonx.E("name", "Mingyong Chen")
  
  // bson.D{bson.E{Key:"name", Value:"Mingyong Chen"}}
  d := bsonx.D("name", "Mingyong Chen")
  // we can also use bsonx.DBuilder to build the bson.D
  d2 := bsonx.NewD().Add("name", "Mingyong Chen").Add("手机号", "1888***1234").Build()
  
  // bson.A{"Mingyong Chen", "1888***1234"}
  a := bsonx.A("Mingyong Chen", "1888***1234")
  ```
  [More about bsonx](../build/bsonx)
- query: query statement build
  ```go
  // Builded directly by a function
  // bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$eq", Value:"Mingyong Chen"}}}}
  d := query.Eq("name", "Mingyong Chen")
  
  //  bson.D{bson.E{Key:"age", Value:bson.D{{Key:"$in", Value:[]int{18, 19, 20}}}}}
  d = query.In("age", 18, 19, 20)
  
  // elemMatch
  // bson.D{bson.E{Key: "result", Value: bson.D{bson.E{Key: "$elemMatch", Value: bson.D{bson.E{Key: "$gte", Value: 80}, bson.E{Key: "$lt", Value: 85}}}}}}
  d = query.ElemMatch("result", bsonx.NewD().Add("$gte", 80).Add("$lt", 85).Build())
  
  // Builded by a builder
  // bson.D{bson.E{Key:"age", Value:bson.D{{Key:"$gt", Value:18}, bson.E{Key:"$lt", Value:25}}}}
  d = query.NewBuilder().Gt("age", 18).Lt("age", 25).Build()
  
  // bson.d{bson.E{Key: "$and", Value: []any{bson.D{{Key: "x", Value: bson.D{{Key: "$ne", Value: 0}}}}, bson.D{{Key: "y", Value: bson.D{{Key: "$gt", Value: 0}}}}}}
  d = query.NewBuilder().And(
      query.NewBuilder().Ne("x", 0).Build(),
      query.NewBuilder().Gt("y", 0).Build(),
  ).Build()
  
  // bson.D{bson.E{Key:"qty", Value:bson.D{{Key:"$exists", Value:true}, bson.E{Key:"$nin", Value:[]int{5, 15}}}}}
  d = query.NewBuilder().Exists("qty", true).NinInt("qty", 5, 15).Build()
  ```
  [More about query](../build/query/introduction)
- update: update statement build
  ```go
  // Builded directly by a function
  // bson.D{bson.E{Key:"$set", Value:bson.M{"name":"Mingyong Chen"}}}
  u := update.Set("name", "Mingyong Chen")
  
  // bson.D{bson.E{Key:"$inc", Value:bson.D{bson.E{Key:"ratings", Value:-1}}}}
  u = update.NewBuilder().Inc("ratings", -1).Build()
  
  // bson.D{bson.E{Key:"$push", Value:bson.M{"scores":95}}}
  u = update.NewBuilder().Push("scores", 95).Build()
  
  // Builded by a builder
  // bson.D{bson.E{Key:"$set", Value:bson.D{bson.E{Key:"name", Value:"Mingyong Chen"}, bson.E{Key:"sex", Value:"男"}}}}
  u = update.NewBuilder().Set("name", "Mingyong Chen").Set("sex", "男").Build()
  // bson.D{bson.E{Key:"$set", Value:bson.D{bson.E{Key:"name", Value:"Mingyong Chen"}}}, bson.E{Key:"$inc", Value:bson.D{bson.E{Key:"rating Value:-1}}}, bson.E{Key:"$push", Value:bson.D{bson.E{Key:"scores", Value:95}}}}
  u = update.NewBuilder().Set("name", "Mingyong Chen").Inc("ratings", -1).Push("scores", 95).Build()
  ```
  [More about update](../build/update/introduction)

- aggregation: aggregation statement build
  ```go
  // bson.D{bson.E{Key:"total", Value:bson.D{bson.E{Key:"$gt", Value:[]interface {}{"$price", "$fee"}}}}}
  gt := aggregation.Gt("total", []any{"$price", "$fee"}...)
  
  // mongo.Pipeline{bson.D{bson.E{Key:"$project", Value:bson.D{bson.E{Key:"name", Value:1}, bson.E{Key:"qtyGt250", Value:bson.D{bson.E{Key:"total", Value:bson.D{bson.E{Key:"$gt", Value:[]interface {}{"$price", "$fee"}}}}}}}}}}
  pipeline := aggregation.NewStageBuilder().
      Project(bsonx.NewD().Add("name", 1).Add("qtyGt250", gt).Build()).
      Build()
  
  // bson.D{bson.E{Key:"result", Value:bson.D{bson.E{Key:"$or", Value:[]interface {}{bson.D{bson.E{Key:"$gt", Value:[]interface {}{"score", 70}}, bson.E{Key:"score", Value:bson.D{bson.E{Key:"$lt", Value:[]interface {}{90}}}}}, bson.D{bson.E{Key:"views", Value:bson.D{bson.E{Key:"$gte", Value:[]interface {}{90}}}}}}}}}}
  or := aggregation.NewBuilder().Or("result", aggregation.NewBuilder().GtWithoutKey("score", 70).Lt("score", 90).Build(), aggregation.NewBuilder().Gte("views", 90).Build()).Build()
  
  // mongo.Pipeline{bson.D{bson.E{Key:"$match", Value:bson.D{bson.E{Key:"result", Value:bson.D{bson.E{Key:"$or", Value:[]interface {}{bson.D{bson.E{Key:"$gt", Value:[]interface {}{"score", 70}}, bson.E{Key:"score", Value:bson.D{bson.E{Key:"$lt", Value:[]interface {}{90}}}}}, bson.D{bson.E{Key:"views", Value:bson.D{bson.E{Key:"$gte", Value:[]interface {}{90}}}}}}}}}}}}, bson.D{bson.E{Key:"$group", Value:bson.D{bson.E{Key:"_id", Value:interface {}(nil)}, bson.E{Key:"count", Value:bson.D{bson.E{Key:"$sum", Value:1}}}}}}}
  pipeline = aggregation.NewStageBuilder().
      Match(or).
      Group(nil, aggregation.Sum("count", 1)...).Build()
  
  // mongo.Pipeline{bson.D{bson.E{Key:"$unwind", Value:"$size"}}}
  pipeline = aggregation.NewStageBuilder().Unwind("$size", nil).Build()
  
  // mongo.Pipeline{bson.D{bson.E{Key:"$unwind", Value:bson.D{bson.E{Key:"path", Value:"$size"}, bson.E{Key:"includeArrayIndex", Value:"arrayIndex"}, bson.E{Key:"preserveNullAndEmptyArrays", Value:true}}}}}
  pipeline = aggregation.NewStageBuilder().Unwind("$size", &aggregation.UnWindOptions{
      IncludeArrayIndex:          "arrayIndex",
      PreserveNullAndEmptyArrays: true,
  }).Build()
  ```
  [More about aggregation](../build/aggregation/introduction)

## Hooks
```go
type User struct {
	mongox.Model `bson:",inline"`
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

// Enable Model Hook
mongox.InitPlugin(&mongox.PluginConfig{
    EnableDefaultFieldHook: false,
    EnableModelHook:        true,
    EnableValidationHook:   false,
    Validate:               nil,
})

insertOneResult, err := userColl.Creator().InsertOne(context.Background(), &User{Name: "Mingyong Chen"})
```
[More about hooks](../hooks/model-hooks)
## Plugin
```go
// You can register a callback at any time
mongox.RegisterPlugin("myBeforeInsertHook", func(ctx context.Context, opCtx *operation.OpContext, opts ...any) error {
    // do something
    return nil
}, operation.OpTypeBeforeInsert)

// You can remove a callback at any time
mongox.RemovePlugin("myBeforeInsertHook", operation.OpTypeBeforeInsert)
```
[More about plugin](../plugins/plugins)