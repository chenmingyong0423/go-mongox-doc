# Plugin-Based Programming

`mongox` supports plugin-based programming, offering a flexible way to insert custom logic before or after database operations. This enhances the scalability and maintainability of your application.

Plugins are registered at the `mongox.Database` level, meaning plugins registered on a `mongox.Database` object will be passed to the `mongox.Collection` object. Consequently, the registered plugins will affect operations on the `mongox.Collection` object.

## Registering and Removing Plugins

Before registering a plugin, you need to create a `mongox.Database` object:

```go
client := mongox.NewClient(mongoClient, &mongox.Config{})
database := client.NewDatabase("db-test")
```

You can then register or remove plugins using the `RegisterPlugin` and `RemovePlugin` methods:

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// Register plugin
database.RegisterPlugin("after find", func(ctx context.Context, opCtx *operation.OpContext, opts ...any) error {
    if user, ok := opCtx.Doc.(*User); ok {
        fmt.Println(user)
    }
    if users, ok := opCtx.Doc.([]*User); ok {
        fmt.Println(users)
    }
    return nil
}, operation.OpTypeAfterFind)

// Remove plugin
database.RemovePlugin("after find", operation.OpTypeAfterFind)
```

The `RegisterPlugin` method has the following signature:

```go
func (d *Database) RegisterPlugin(name string, cb callback.CbFn, opType operation.OpType)
```

This method takes three parameters:
- `name`: The name of the plugin.
- `cb`: The callback function for the plugin. The signature of the callback function is:
    ```go
    type CbFn func(ctx context.Context, opCtx *operation.OpContext, opts ...any) error
    ```
  The callback function receives three parameters:
    - `ctx`: The context object.
    - `opCtx`: The operation context object. For more details, see the [OpContext struct](op-context).
    - `opts`: Optional parameters.
- `opType`: The type of plugin. For supported types, see [OpType Plugin Types](op-type).