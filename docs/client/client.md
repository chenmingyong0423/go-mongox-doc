# Client 结构体
`mongox` 提供了 `Client` 结构体，目前该结构体只用于创建 `Database` 对象。后续会增加更多的功能，例如事务的封装等。

## 创建 Client
```go
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
```