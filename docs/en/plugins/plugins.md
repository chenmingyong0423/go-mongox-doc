# Plugin
`go-mongox` supports plugin programming, providing a flexible way to insert custom logic before and after database operations, thereby enhancing the scalability and maintainability of applications.

## Plugin Registration and Removal
`go-mongox` provides the `RegisterPlugin` and `UnregisterPlugin` methods to register and remove plugins.

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

The function signature of `mongox.RegisterPlugin` is as follows:
```go
func RegisterPlugin(name string, cb callback.CbFn, opType operation.OpType)
```
This function takes three parameters:
- `name`: The name of the plugin
- `cb`: The callback function of the plugin, the signature of which is as follows:
    ```go
    type CbFn func(ctx context.Context, opCtx *operation.OpContext, opts ...any) error
    ```
    This function takes three parameters:
    - `ctx`: The context object
    - `opCtx`: The operation context object
        `opCtx` has the following structure:
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
      
        When `opType` is `operation.OpTypeBeforeInsert` or `operation.OpTypeAfterInsert`, the value of `opCtx.Doc` may not be `nil`, and its type may be `*struct` or `[]*struct`.
 
        When `opType` is `operation.OpTypeBeforeUpdate` or `operation.OpTypeAfterUpdate`, the values of `opCtx.Filter` and `opCtx.Updates` may not be `nil`.
 
        When `opType` is `operation.OpTypeBeforeDelete` or `operation.OpTypeAfterDelete`, the value of `opCtx.Filter` may not be `nil`.
 
        When `opType` is `operation.OpTypeBeforeUpsert` or `operation.OpTypeAfterUpsert`, the values of `opCtx.Filter` and `opCtx.Replacement` may not be `nil`.
 
        When `opType` is `operation.OpTypeBeforeFind` or `operation.OpTypeAfterFind`, the value of `opCtx.Filter` may not be `nil`, and if it is the latter, the value of `opCtx.Doc` may not be `nil`.

    - `opts`: Optional parameters
- `opType`: The type of the plugin, the supported types are as follows:

  | type                           | description                           |
  |--------------------------------|---------------------------------------|
  | `operation.OpTypeBeforeInsert` | Execute before inserting the document |
  | `operation.OpTypeAfterInsert`  | Execute after inserting the document  |
  | `operation.OpTypeBeforeUpdate` | Execute before updating the document  |
  | `operation.OpTypeAfterUpdate`  | Execute after updating the document   |
  | `operation.OpTypeBeforeDelete` | Execute before deleting the document  |
  | `operation.OpTypeAfterDelete`  | Execute after deleting the document   |
  | `operation.OpTypeBeforeUpsert` | Execute before saving the document    |
  | `operation.OpTypeAfterUpsert`  | Execute after saving the document     |
  | `operation.OpTypeBeforeFind`   | Execute before finding the document   |
  | `operation.OpTypeAfterFind`    | Execute after finding the document    |
