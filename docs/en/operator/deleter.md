# Deleter

The `Deleter()` method allows us to obtain a new generic deleter object, namely `Deleter[T]`. With the methods of `Deleter[T]`, we can execute relevant deletion operations.

| Method Name           | Description                                        | Parameters                                                                                                                                                                                             | Example                                                          |
| --------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| `Filter`              | Set the filter conditions for the delete operation | `filter any`: The condition used to filter documents to be deleted                                                                                                                                     | `deleter.Filter(query.Eq("name", "Mingyong Chen"))`              |
| `ModelHook`           | Set the model hook                                 | `modelHook any`: Custom model hook                                                                                                                                                                     | `deleter.ModelHook(userHook)`                                    |
| `RegisterBeforeHooks` | Register pre-action hook functions                 | `hooks ...BeforeHookFn`: Hook functions to execute before the delete operation                                                                                                                         | `deleter.RegisterBeforeHooks(validateDeleteHook)`                |
| `RegisterAfterHooks`  | Register post-action hook functions                | `hooks ...AfterHookFn`: Hook functions to execute after the delete operation                                                                                                                           | `deleter.RegisterAfterHooks(logDeleteHook)`                      |
| `DeleteOne`           | Delete a single document                           | `ctx context.Context`: The context <br> `opts ...options.Lister[options.DeleteOneOptions]`: Delete options                                                                                             | `deleter.Filter(query.Eq("_id", "1")).DeleteOne(ctx)`            |
| `DeleteMany`          | Delete multiple documents                          | `ctx context.Context`: The context <br> `opts ...options.Lister[options.DeleteManyOptions]`: Delete options                                                                                            | `deleter.Filter(query.Eq("status", "inactive")).DeleteMany(ctx)` |
| `GetCollection`       | Get the associated collection object               | None                                                                                                                                                                                                   | `collection := deleter.GetCollection()`                          |
| `PreActionHandler`    | Handle pre-action (internal method)                | `ctx context.Context`: The context <br> `globalOpContext *operation.OpContext`: Global operation context <br> `opContext *OpContext`: Operation context <br> `opType operation.OpType`: Operation type | For internal use, generally not called directly                  |
| `PostActionHandler`   | Handle post-action (internal method)               | `ctx context.Context`: The context <br> `globalOpContext *operation.OpContext`: Global operation context <br> `opContext *OpContext`: Operation context <br> `opType operation.OpType`: Operation type | For internal use, generally not called directly                  |

## Delete a single document

```go
deleteResult, err := userColl.Deleter().Filter(query.Id("60e96214a21b1b0001c3d69e")).DeleteOne(context.Background())
```

The `DeleteOne` method is used to delete a single document. The `deleteResult` is of type `*mongo.DeleteResult`.

## Delete multiple documents

```go
deleteResult, err := userColl.Deleter().Filter(query.In("_id", "60e96214a21b1b0001c3d69e", "80e96214a21b1b0001c3d70e")).DeleteMany(context.Background())
```

The `DeleteMany` method is used to delete multiple documents. The `deleteResult` is of type `*mongo.DeleteResult`.
