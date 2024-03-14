# 插件化编程
`go-mongox` 支持插件化编程，它提供了一种灵活的方式在数据库操作的前后插入自定义的逻辑，从而增强应用的可扩展性和可维护性。

## 插件的注册与删除
`go-mongox` 提供了 `RegisterPlugin` 和 `UnregisterPlugin` 方法来注册和删除插件。

```go
// Register Plugin
mongox.RegisterPlugin("after find", func(ctx context.Context, opCtx *operation.OpContext, opts ...any) error {
    if user, ok := opCtx.Doc.(*User); ok {
        fmt.Println(user)
    }
    if users, ok := opCtx.Doc.([]*User); ok {
        fmt.Println(users)
    }
    return nil
}, operation.OpTypeAfterFind)

// Remove Plugin
mongox.RemovePlugin("after find", operation.OpTypeAfterFind)
```

`mongox.RegisterPlugin` 的函数签名如下：
```go
func RegisterPlugin(name string, cb callback.CbFn, opType operation.OpType)
```
该函数接收三个参数：
- `name`：插件的名称
- `cb`：插件的回调函数，该函数的签名如下：
    ```go
    type CbFn func(ctx context.Context, opCtx *operation.OpContext, opts ...any) error
    ```
    该函数接收三个参数：
    - `ctx`：上下文对象
    - `opCtx`：操作上下文对象
        `opCtx` 的结构如下：
        ```go
        type OpContext struct {
            Col *mongo.Collection `opt:"-"`
            Doc any
            // filter also can be used as query
            Filter      any
            Updates     any
            Replacement any
        }
        ```
        当 `opType` 为 `operation.OpTypeBeforeInsert` 或 `operation.OpTypeAfterInsert` 时，`opCtx.Doc` 的值可能不为 `nil`，其类型可能是 `*struct` 或 `[]*struct`。
  
        当 `opType` 为 `operation.OpTypeBeforeUpdate` 或 `operation.OpTypeAfterUpdate` 时，`opCtx.Filter` 和 `opCtx.Updates` 的值可能不为 `nil`。
  
        当 `opType` 为 `operation.OpTypeBeforeDelete` 或 `operation.OpTypeAfterDelete` 时，`opCtx.Filter` 的值可能不为 `nil`。
  
        当 `opType` 为 `operation.OpTypeBeforeUpsert` 或 `operation.OpTypeAfterUpsert` 时，`opCtx.Filter` 和 `opCtx.Replacement` 的值可能不为 `nil`。
  
        当 `opType` 为 `operation.OpTypeBeforeFind` 或 `operation.OpTypeAfterFind` 时，`opCtx.Filter` 的值可能不为 `nil`，如果是后者，`opCtx.Doc` 的值可能不为 `nil`。
  
    - `opts`：可选参数
- `opType`：插件的类型，支持的类型如下表格：

    | 类型                             | 描述        | 
    |--------------------------------|-----------|
    | `operation.OpTypeBeforeInsert` | 在插入文档之前执行 |
    | `operation.OpTypeAfterInsert`  | 在插入文档之后执行 |
    | `operation.OpTypeBeforeUpdate` | 在更新文档之前执行 |
    | `operation.OpTypeAfterUpdate`  | 在更新文档之后执行 |
    | `operation.OpTypeBeforeDelete` | 在删除文档之前执行 |
    | `operation.OpTypeAfterDelete`  | 在删除文档之后执行 |
    | `operation.OpTypeBeforeUpsert` | 在保存文档之前执行 |
    | `operation.OpTypeAfterUpsert`  | 在保存文档之后执行 |
    | `operation.OpTypeBeforeFind`   | 在查询文档之后执行 |
    | `operation.OpTypeAfterFind`    | 在查询文档之后执行 |
