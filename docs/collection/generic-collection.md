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
func newMongoClient() (*mongo.Client, error) {
  client, err := mongo.Connect(options.Client().ApplyURI("mongodb://localhost:27017").SetAuth(options.Credential{
      Username:   "test",
      Password:   "test",
      AuthSource: "db-test",
  }))
  if err != nil {
      return nil, err
  }
  err = client.Ping(context.Background(), readpref.Primary())
  if err != nil {
      panic(err)
  }
  return client, nil
}

mongoClient, err := newMongoClient()
if err != nil {
  panic(err)
}
client := mongox.NewClient(mongoClient, &mongox.Config{})
database := client.NewDatabase("db-test")

userColl := mongox.NewCollection[User](database, "users")
```

通过 `mongox.NewCollection` 函数，我们可以指定泛型参数并创建一个泛型的 `Collection` 对象。这样我们就可以使用 `userColl` 对象来操作 `User` 类型的文档了。

通过 `database` 对象注册的全局插件会传递给 `userColl` 对象，因此全局插件会对 `userColl` 对象的操作生效。