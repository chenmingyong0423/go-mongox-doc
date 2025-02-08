# 插件化编程
`mongox` 支持插件化编程，它提供了一种灵活的方式在数据库操作的前后插入自定义的逻辑，从而增强应用的可扩展性和可维护性。

插件是 `mongox.Database` 级别的，即在 `mongox.Database` 对象上注册的插件会传递给 `mongox.Collection` 对象，因此所注册的插件会对 `mongox.Collection` 对象的操作生效。

## 插件的注册与删除
注册插件前，需要先创建一个 `mongox.Database` 对象：

```go
client := mongox.NewClient(mongoClient, &mongox.Config{})
database := client.NewDatabase("db-test")
```

然后可以通过 `RegisterPlugin` 方法和 `RemovePlugin` 方法来注册和删除插件：

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// 注册插件
database.RegisterPlugin("after find", func(ctx context.Context, opCtx *operation.OpContext, opts ...any) error {
    if user, ok := opCtx.Doc.(*User); ok {
        fmt.Println(user)
    }
    if users, ok := opCtx.Doc.([]*User); ok {
        fmt.Println(users)
    }
    return nil
}, operation.OpTypeAfterFind)

// 移除插件
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
    - `opCtx`：操作上下文对象，详情请查看 [OpContext 结构体](op-context)
    - `opts`：可选参数
- `opType`：插件的类型，支持的类型请查看 [OpType 插件类型](op-type)