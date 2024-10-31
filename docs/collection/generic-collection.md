# 泛型的 Collection
`mongox` 提供了泛型的 `Collection` 对象，它支持通过链式调用来操作 `MongoDB` 的集合，更加方便的进行数据操作。

## 创建泛型的 Collection
```go
type User struct {
  mongox.Model `bson:"inline"`
  Name         string `bson:"name"`
  Age          int    `bson:"age"`
}

// 示例代码，不是最佳的创建方式
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
  collection := client.Database("db-test").Collection("test_post")
  return collection
}

// 你需要预先创建一个 *mongo.Collection 对象
mongoColl := newCollection()
// 使用 User 结构体作为泛型参数创建一个 collection
userColl := mongox.NewCollection[User](mongoColl)
```
通过 `mongox.NewCollection` 函数，我们可以指定泛型参数并创建一个泛型的 `Collection` 对象。这样我们就可以使用 `userColl` 对象来操作 `User` 类型的文档了。