# 插件化编程
`go mongox` 支持插件化编程，它提供了一种灵活的方式在数据库操作的前后插入自定义的逻辑，从而增强应用的可扩展性和可维护性。

[//]: # ()
[//]: # (## 启用内置插件（钩子）)

[//]: # (`go mongox` 库内置了三个实用的 `hook` 钩子（基于插件实现）：)

[//]: # (- `field` 钩子：自动化更新默认的 `field` 字段)

[//]: # (- `model` 钩子：针对模型（结构体）设置钩子函数，这些钩子函数会在 `MongoDB` 的集合操作前后被调用。)

[//]: # (- `validator` 钩子：利用结构体的标签（`tag`）去对字段值进行校验。)

[//]: # ()
[//]: # (`go mongox` 库默认不激活这些钩子，如果你想激活它们，可以参考以下代码：)

[//]: # ()
[//]: # (```go)

[//]: # (mongox.InitPlugin&#40;&mongox.PluginConfig{)

[//]: # (	EnableDefaultFieldHook: true,)

[//]: # (	EnableModelHook:        true,)

[//]: # (	EnableValidationHook:   true,)

[//]: # (	// 覆盖默认的校验器，当 EnableValidationHook 为 true 时生效)

[//]: # (	Validate: nil,)

[//]: # (}&#41;)

[//]: # (```)

[//]: # ()
[//]: # (## 插件的注册与删除)

[//]: # (`go mongox` 提供了 `RegisterPlugin` 和 `UnregisterPlugin` 方法来注册和删除插件。)

[//]: # ()
[//]: # (```go)

[//]: # (// Register Plugin)

[//]: # (mongox.RegisterPlugin&#40;"after find", func&#40;ctx context.Context, opCtx *operation.OpContext, opts ...any&#41; error {)

[//]: # (    if user, ok := opCtx.Doc.&#40;*User&#41;; ok {)

[//]: # (        fmt.Println&#40;user&#41;)

[//]: # (    })

[//]: # (    if users, ok := opCtx.Doc.&#40;[]*User&#41;; ok {)

[//]: # (        fmt.Println&#40;users&#41;)

[//]: # (    })

[//]: # (    return nil)

[//]: # (}, operation.OpTypeAfterFind&#41;)

[//]: # ()
[//]: # (// Remove Plugin)

[//]: # (mongox.RemovePlugin&#40;"after find", operation.OpTypeAfterFind&#41;)

[//]: # (```)

[//]: # ()
[//]: # (`mongox.RegisterPlugin` 的函数签名如下：)

[//]: # (```go)

[//]: # (func RegisterPlugin&#40;name string, cb callback.CbFn, opType operation.OpType&#41;)

[//]: # (```)

[//]: # (该函数接收三个参数：)

[//]: # (- `name`：插件的名称)

[//]: # (- `cb`：插件的回调函数，该函数的签名如下：)

[//]: # (    ```go)

[//]: # (    type CbFn func&#40;ctx context.Context, opCtx *operation.OpContext, opts ...any&#41; error)

[//]: # (    ```)

[//]: # (    该函数接收三个参数：)

[//]: # (    - `ctx`：上下文对象)

[//]: # (    - `opCtx`：操作上下文对象)

[//]: # (        `opCtx` 的结构如下：)

[//]: # (        ```go)

[//]: # (        type OpContext struct {)

[//]: # (            Col *mongo.Collection `opt:"-"`)

[//]: # (            Doc any)

[//]: # (            // filter also can be used as query)

[//]: # (            Filter       any)

[//]: # (            Updates      any)

[//]: # (            Replacement  any)

[//]: # (            MongoOptions any)

[//]: # (            ModelHook    any)

[//]: # (        })

[//]: # (        ```)

[//]: # (        当 `opType` 为 `operation.OpTypeBeforeInsert` 或 `operation.OpTypeAfterInsert` 时，`opCtx.Doc` 的值可能不为 `nil`，其类型可能是 `*struct` 或 `[]*struct`。)

[//]: # (  )
[//]: # (        当 `opType` 为 `operation.OpTypeBeforeUpdate` 或 `operation.OpTypeAfterUpdate` 时，`opCtx.Filter` 和 `opCtx.Updates` 的值可能不为 `nil`。)

[//]: # (  )
[//]: # (        当 `opType` 为 `operation.OpTypeBeforeDelete` 或 `operation.OpTypeAfterDelete` 时，`opCtx.Filter` 的值可能不为 `nil`。)

[//]: # (  )
[//]: # (        当 `opType` 为 `operation.OpTypeBeforeUpsert` 或 `operation.OpTypeAfterUpsert` 时，`opCtx.Filter` 和 `opCtx.Updates` 的值可能不为 `nil`。)

[//]: # (  )
[//]: # (        当 `opType` 为 `operation.OpTypeBeforeFind` 或 `operation.OpTypeAfterFind` 时，`opCtx.Filter` 的值可能不为 `nil`，如果是后者，`opCtx.Doc` 的值可能不为 `nil`。)

[//]: # ()
[//]: # (        `MongoOptions` 和 `ModelHook` 是否为 `nil`，取决于在执行 `MongoDB` 操作时，使用者是否设置它们。)

[//]: # ()
[//]: # (  - `opts`：可选参数)

[//]: # (- `opType`：插件的类型，支持的类型如下表格：)

[//]: # ()
[//]: # (    | 类型                             | 描述        | )

[//]: # (    |--------------------------------|-----------|)

[//]: # (    | `operation.OpTypeBeforeInsert` | 在插入文档之前执行 |)

[//]: # (    | `operation.OpTypeAfterInsert`  | 在插入文档之后执行 |)

[//]: # (    | `operation.OpTypeBeforeUpdate` | 在更新文档之前执行 |)

[//]: # (    | `operation.OpTypeAfterUpdate`  | 在更新文档之后执行 |)

[//]: # (    | `operation.OpTypeBeforeDelete` | 在删除文档之前执行 |)

[//]: # (    | `operation.OpTypeAfterDelete`  | 在删除文档之后执行 |)

[//]: # (    | `operation.OpTypeBeforeUpsert` | 在保存文档之前执行 |)

[//]: # (    | `operation.OpTypeAfterUpsert`  | 在保存文档之后执行 |)

[//]: # (    | `operation.OpTypeBeforeFind`   | 在查询文档之后执行 |)

[//]: # (    | `operation.OpTypeAfterFind`    | 在查询文档之后执行 |)
