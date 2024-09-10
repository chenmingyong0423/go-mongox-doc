# 快速开始
## 安装
```bash
go get github.com/chenmingyong0423/go-mongox
```

## 基本使用
- 创建泛型的 `Collection`
  ```go
  func main() {
      // 你需要预先创建一个 *mongo.Collection 对象
      mongoColl := newCollection()
      // 使用 User 结构体作为泛型参数创建一个 collection
      userColl := mongox.NewCollection[User](mongoColl)
  }
  
  // 示例代码，不是最佳的创建方式
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
      mongox.Model `bson:",inline"`
      Name         string `bson:"name"`
      Age          int    `bson:"age"`
  }
  ```
  通过 `mongox.NewCollection` 函数，我们可以指定泛型参数并创建一个泛型的 `Collection` 对象。这样我们就可以使用 `userColl` 对象来操作 `User` 类型的文档了。

  后面的操作将基于 `userColl` 对象进行举例。
    
  更多关于 `Collection` 的操作请参考 [泛型的 Collection](../collection/generic-collection)。
- 插入操作
  ```go
  // 插入一个文档
  insertOneResult, err := userColl.Creator().InsertOne(context.Background(), &User{Name: "chenmingyong"})
  // 插入多个文档
  insertMany, err := userColl.Creator().InsertMany(context.Background(), []*User{
      {Name: "chenmingyong", Age: 24},
      {Name: "burt", Age: 25},
  })
  ```
  更多关于 `Creator` 的操作请参考 [Creator 创建器](../operator/creator)。
- 删除操作
  ```go
  // 根据 name 删除一个文档
  deleteResult, err := userColl.Deleter().Filter(query.Eq("name", "chenmingyong")).DeleteOne(context.Background())
  // 根据 name 删除多个文档
  deleteMany, err := userColl.Deleter().Filter(query.In("name", "chenmingyong", "burt")).DeleteMany(context.Background())
  ```
  更多关于 `Deleter` 的操作请参考 [Deleter 删除器](../operator/deleter)。
- 更新操作
  ```go
  // 更新单个文档
  updateResult, err := userColl.Updater().Filter(query.Eq("name", "chenmingyong")).Updates(update.Set("name", "burt")).UpdateOne(context.Background())
  // 更新多个文档
  updateResult, err := userColl.Updater().
      Filter(query.NewBuilder().Gt("age", 18).Lt("age", 25).Build()).Updates(update.Set("name", "burt")).
      UpdateOne(context.Background())
  // Upsert
  updateResult, err := userColl.Updater().
      Filter(query.Eq("name", "Mingyong Chen")).
      Updates(update.NewBuilder().Set("name", "Mingyong Chen").Set("age", 18).Build()).
      Upsert(context.Background())
  ```
  更多关于 `Updater` 的操作请参考 [Updater 更新器](../operator/updater)。
- 查询操作
  ```go
  // 查询一个文档
  findResult, err := userColl.Finder().Filter(query.Eq("name", "chenmingyong")).FindOne(context.Background())
  // 查询多个文档
  findResults, err := userColl.Finder().Filter(query.In("name", "chenmingyong", "burt")).Find(context.Background())
  // Count 查询文档数量
  count, err := userColl.Finder().Filter(query.Gt("age", 18)).Count(context.Background())
  ```
  更多关于 `Finder` 的操作请参考 [Finder 查询器](../operator/finder)。
- 聚合操作
  ```go
  // 聚合查询
  users, err := userColl.Aggregator().
      Pipeline(aggregation.NewStageBuilder().Project(bsonx.M("age", 0)).Build()).
      Aggregate(context.Background())
  
  // 聚合查询并解析结果
  // 字段重命名
  type RealUser struct {
      mongox.Model `bson:"inline"`
      RealName     string `bson:"real_name"`
      Age          int    `bson:"age"`
  }
  var results []*RealUser
  err := userColl.Aggregator().
      Pipeline(aggregation.NewStageBuilder().Project(
          bsonx.NewD().Add("real_name", "$name").Add("age", 1).Build(),
      ).Build()).
      AggregateWithParse(context.Background(), &results)
  ```
  更多关于 `Aggregator` 的操作请参考 [Aggregator 聚合器](../operator/aggregator)。

## bson 构建
- universal：通用 bson 构建
  ```go
  // bson.M{"姓名": "陈明勇"}
  m := bsonx.M("姓名", "陈明勇")
  
  // bson.M{"_id": "陈明勇"}
  id := bsonx.Id("陈明勇")
  
  // bson.E{Key:"姓名", Value:"陈明勇"}
  e := bsonx.E("姓名", "陈明勇")
  
  // bson.D{bson.E{Key:"姓名", Value:"陈明勇"}, bson.E{Key:"手机号", Value:"1888***1234"}}
  d := bsonx.D(bsonx.E("姓名", "陈明勇"), bsonx.E("手机号", "1888***1234"))
  // 我们还可以使用 bsonx.DBuilder 来构建 bson.D
  d2 := bsonx.NewD().Add("姓名", "陈明勇").Add("手机号", "1888***1234").Build()
  
  // bson.A{"陈明勇", "1888***1234"}
  a := bsonx.A("陈明勇", "1888***1234")
  ```
  更多关于 `bsonx` 包的操作请参考 [bsonx 通用构建](../build/bsonx)。
- query：查询语句构建
  ```go
  // 通过函数直接构建
  // bson.D{bson.E{Key:"姓名", Value:bson.D{bson.E{Key:"$eq", Value:"陈明勇"}}}}
  d := query.Eq("姓名", "陈明勇")
  
  //  bson.D{bson.E{Key:"age", Value:bson.D{{Key:"$in", Value:[]int{18, 19, 20}}}}}
  d = query.In("age", 18, 19, 20)
  
  // elemMatch
  // bson.D{bson.E{Key: "result", Value: bson.D{bson.E{Key: "$elemMatch", Value: bson.D{bson.E{Key: "$gte", Value: 80}, bson.E{Key: "$lt", Value: 85}}}}}}
  d = query.ElemMatch("result", bsonx.D(bsonx.E("$gte", 80), bsonx.E("$lt", 85)))
  
  // 通过构建器构建
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
  更多关于 `query` 包的操作请参考 [query 查询构建](../build/query/introduction)。
- update：更新语句构建
  ```go
  // 通过函数直接构建
  // bson.D{bson.E{Key:"$set", Value:bson.M{"name":"陈明勇"}}}
  u := update.Set("name", "陈明勇")
  
  // bson.D{bson.E{Key:"$inc", Value:bson.D{bson.E{Key:"ratings", Value:-1}}}}
  u = update.NewBuilder().Inc("ratings", -1).Build()
  
  // bson.D{bson.E{Key:"$push", Value:bson.M{"scores":95}}}
  u = update.NewBuilder().Push("scores", 95).Build()
  
  // 通过构建器构建
  // bson.D{bson.E{Key:"$set", Value:bson.D{bson.E{Key:"name", Value:"陈明勇"}, bson.E{Key:"sex", Value:"男"}}}}
  u = update.NewBuilder().Set("name", "陈明勇").Set("sex", "男").Build()
  // bson.D{bson.E{Key:"$set", Value:bson.D{bson.E{Key:"name", Value:"陈明勇"}}}, bson.E{Key:"$inc", Value:bson.D{bson.E{Key:"rating Value:-1}}}, bson.E{Key:"$push", Value:bson.D{bson.E{Key:"scores", Value:95}}}}
  u = update.NewBuilder().Set("name", "陈明勇").Inc("ratings", -1).Push("scores", 95).Build()
  ```
  更多关于 `update` 包的操作请参考 [update 更新构建](../build/update/introduction)。

- aggregation：聚合语句构建
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
  pipeline = aggregation.NewStageBuilder().Unwind("$size", &types.UnWindOptions{
      IncludeArrayIndex:          "arrayIndex",
      PreserveNullAndEmptyArrays: true,
  }).Build()
  ```
  更多关于 `aggregation` 包的操作请参考 [aggregation 聚合构建](../build/aggregation/introduction)。

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

insertOneResult, err := userColl.Creator().InsertOne(context.Background(), &User{Name: "chenmingyong"})
```
更多关于 `Hooks` 的操作请参考 [Hooks 钩子](../hooks/model-hooks)。
## 插件化编程
```go
// 你可以在任何时候注册一个回调
mongox.Register("myBeforeInsertHook", func(ctx context.Context, opCtx *operation.OpContext, opts ...any) error {
    // 在这里你可以做一些操作
    return nil
}, operation.OpTypeBeforeInsert)

// 你可以在任何时候移除一个回调
mongox.Remove("myBeforeInsertHook", operation.OpTypeBeforeInsert)
```
更多关于 `插件化编程` 的操作请参考 [插件化编程](../plugins/plugins)。

<div id="gitalk-container"></div>