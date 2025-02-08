# Context Object

The `OpContext` struct is used to pass operation context information. It contains the following fields:

```go
type OpContext struct {
    Col           *mongo.Collection `opt:"-"` // The collection object
    Fields        []*field.Filed    // Metadata of the struct fields bound to the Collection's generic type
    Doc           any                // Document object (e.g., *T or []*T)
    Filter        any                // Query filter
    Updates       any                // Document updates
    Pipeline      any                // Aggregation pipeline
    MongoOptions  any                // MongoDB operation options
    ModelHook     any                // Model hook
    ReflectValue  reflect.Value     // Reflection value of the Doc (used to dynamically modify the document in plugins)
    StartTime     time.Time         // Operation start time
    Result        any                // Result of the MongoDB collection operation
}
```

### Field Descriptions:
- `Col`: The `*mongo.Collection` object.
- `Fields`: A slice of `[]*field.Filed` objects that store metadata of the structure fields bound to the `Collection` object’s generic type.
- `Doc`: The document object, representing the structure bound to the `Collection` object’s generic type (e.g., `*T` or `[]*T`).
- `Filter`: The query filter.
- `Updates`: The updates to be applied to the document.
- `Pipeline`: The aggregation pipeline.
- `MongoOptions`: MongoDB operation options.
- `ModelHook`: The model hook.
- `ReflectValue`: The reflection value of `Doc`, used for dynamically modifying the document object inside plugins.
- `StartTime`: The start time of the operation.
- `Result`: The result of the MongoDB collection operation.

### Different Operation Types and Their Context Fields

Depending on the operation type, the values of `OpContext` fields may differ. For example:

- When `opType` is `operation.OpTypeBeforeInsert` or `operation.OpTypeAfterInsert`:
  - `opCtx.Doc` may be non-nil, and its type could be `*struct` or `[]*struct`.
  - `opCtx.ReflectValue` will not be nil.

- When `opType` is `operation.OpTypeBeforeUpdate` or `operation.OpTypeAfterUpdate`:
  - `opCtx.Filter` and `opCtx.Updates` may be non-nil.

- When `opType` is `operation.OpTypeBeforeDelete` or `operation.OpTypeAfterDelete`:
  - `opCtx.Filter` may be non-nil.

- When `opType` is `operation.OpTypeBeforeUpsert` or `operation.OpTypeAfterUpsert`:
  - `opCtx.Filter` and `opCtx.Updates` may be non-nil.

- When `opType` is `operation.OpTypeBeforeFind` or `operation.OpTypeAfterFind`:
  - `opCtx.Filter` may be non-nil.
  - If the type is `operation.OpTypeAfterFind`, `opCtx.Doc` may be non-nil.
  - `opCtx.Result` may be non-nil.

- When `opType` is `operation.OpTypeBeforeAny` or `operation.OpTypeAfterAny`:
  - All fields in `OpContext` can be referenced according to the descriptions above.

- Regardless of the operation type, the `Col`, `Fields`, and `StartTime` fields of `OpContext` will never be nil.

- Regardless of the operation type, `MongoOptions` and `Result` may be non-nil.

- Whether `OpContext.MongoOptions` and `ModelHook` are nil depends on whether the user has set them via `Creator`, `Updater`, `Deleter`, `Finder`, or `Aggregator` during the MongoDB operation.