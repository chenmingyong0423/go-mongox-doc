# OpContext 结构体
`OpContext` 结构体用于传递操作上下文信息，它包含以下字段：
```go
type OpContext struct {
    Col    *mongo.Collection `opt:"-"`
    Fields []*field.Filed

    Doc any
    // filter also can be used as query
    Filter       any
    Updates      any
    Pipeline     any
    MongoOptions any
    ModelHook    any
    ReflectValue reflect.Value
    StartTime    time.Time

    // result of the collection operation
    Result any
}
```
结构体字段说明：
- `Col`：`*mongo.Collection` 对象
- `Fields`：`[]*field.Filed` 对象，存储的是 `Collection` 对象所绑定泛型的结构体字段元数据。
- `Doc`：文档对象，为 `Collection` 对象所绑定泛型的结构体对象，例如 `*T` 或 `[]*T`。
- `Filter`：查询条件。
- `Updates`：更新文档。
- `Pipeline`：聚合管道。
- `MongoOptions`：`mongo` 操作选项。
- `ModelHook`：模型钩子。
- `ReflectValue`：为 `Doc` 的反射值，可用于在插件里动态修改文档对象。
- `StartTime`：操作开始时间。
- `Result`：`mongo collection` 操作的结果。


不同的操作类型，`OpContext` 的字段值可能不同，例如：

- 当 `opType` 为 `operation.OpTypeBeforeInsert` 或 `operation.OpTypeAfterInsert` 时：
  - `opCtx.Doc` 的值可能不为 `nil`，其类型可能是 `*struct` 或 `[]*struct`。
  - `opCtx.ReflectValue` 的值不为 `nil`。

- 当 `opType` 为 `operation.OpTypeBeforeUpdate` 或 `operation.OpTypeAfterUpdate` 时：
  - `opCtx.Filter` 和 `opCtx.Updates` 的值可能不为 `nil`。

- 当 `opType` 为 `operation.OpTypeBeforeDelete` 或 `operation.OpTypeAfterDelete` 时：
  - `opCtx.Filter` 的值可能不为 `nil`。

- 当 `opType` 为 `operation.OpTypeBeforeUpsert` 或 `operation.OpTypeAfterUpsert` 时：
  - `opCtx.Filter` 和 `opCtx.Updates` 的值可能不为 `nil`。

- 当 `opType` 为 `operation.OpTypeBeforeFind` 或 `operation.OpTypeAfterFind` 时：
  - `opCtx.Filter` 的值可能不为 `nil`
  - 如果类型是后者，`opCtx.Doc` 的值可能不为 `nil`。
  - `opCtx.Result` 的值可能不为 `nil`。

- 当 `opType` 为 `operation.OpTypeBeforeAny` 或 `operation.OpTypeAfterAny` 时，`OpContext` 的所有字段值参考上述说明。

- 无论是哪种操作类型，`OpContext` 的 `Col` 和 `Fields` 以及 `StartTime` 的值都不为 `nil`。
- 无论是哪种操作类型，`OpContext` 的 `opCtx.MongoOptions` 和 `opCtx.Result` 的值可能不为 `nil`。

- `OpContext` 的 `MongoOptions` 和 `ModelHook` 是否为 `nil`，取决于在执行 `MongoDB` 操作时，使用者是否通过 `Creator`、`Updater`、`Deleter`、`Finder` 或 `Aggregator` 设置它们。
