# Database 结构体
`mongox` 提供了 `Database` 结构体，`Database` 对象支持注册全局插件，提供了一种灵活的方式在数据库操作的前后插入自定义的逻辑，从而增强应用的可扩展性和可维护性。

## 创建 Database
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
database := client.NewDatabase("db-test")
```

后面的代码示例中，将使用 `database` 对象来进行操作。

## 全局插件的注册与删除
```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// 注册全局插件
database.RegisterPlugin("after find", func(ctx context.Context, opCtx *operation.OpContext, opts ...any) error {
    if user, ok := opCtx.Doc.(*User); ok {
        fmt.Println(user)
    }
    if users, ok := opCtx.Doc.([]*User); ok {
        fmt.Println(users)
    }
    return nil
}, operation.OpTypeAfterFind)

// 移除全局插件
database.RemovePlugin("after find", operation.OpTypeAfterFind)
```

`RegisterPlugin` 的方法签名如下：
```go
func (d *Database) RegisterPlugin(name string, cb callback.CbFn, opType operation.OpType)
```

该方法接收三个参数：
- `name`：插件的名称
- `cb`：插件的回调函数，该函数的签名如下：
    ```go
    type CbFn func(ctx context.Context, opCtx *operation.OpContext, opts ...any) error
    ```
  该函数接收三个参数：
    - `ctx`：上下文对象
    - `opCtx`：操作上下文对象，详情请查看 [OpContext 结构体](../operation/op_context.md)
    - `opts`：可选参数
- `opType`：插件的类型，支持的类型请查看 [OpType 插件类型](../operation/op_type.md)