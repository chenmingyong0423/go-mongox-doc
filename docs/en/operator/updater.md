# Updater

The `Updater()` method is used to obtain a new generic updater object, namely `Updater[T]`. With the methods of `Updater[T]`, we can execute relevant update operations.

| Method Name           | Description                                        | Parameters                                                                                                                                                                                             | Example                                                                                                 |
| --------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| `Filter`              | Set the filter conditions for the update operation | `filter any`: The condition used to filter documents                                                                                                                                                   | `updater.Filter(query.Eq("name", "Mingyong Chen"))`                                                     |
| `Updates`             | Set the update operation to be performed           | `updates any`: The content of the update operation                                                                                                                                                     | `updater.Updates(update.Set("name", "chenmingyong"))`                                                   |
| `Replacement`         | Set the content to replace the document            | `replacement any`: The document used for replacement                                                                                                                                                   | `updater.Replacement(newUser)`                                                                          |
| `ModelHook`           | Set the model hook                                 | `modelHook any`: Custom model hook                                                                                                                                                                     | `updater.ModelHook(userHook)`                                                                           |
| `RegisterBeforeHooks` | Register pre-action hook functions                 | `hooks ...BeforeHookFn`: Hook functions to be executed before the update operation                                                                                                                     | `updater.RegisterBeforeHooks(validateUserHook)`                                                         |
| `RegisterAfterHooks`  | Register post-action hook functions                | `hooks ...AfterHookFn`: Hook functions to be executed after the update operation                                                                                                                       | `updater.RegisterAfterHooks(logUpdateHook)`                                                             |
| `UpdateOne`           | Update a single document                           | `ctx context.Context`: The context <br> `opts ...options.Lister[options.UpdateOneOptions]`: Update options                                                                                             | `updater.Filter(query.Eq("_id", "1")).Updates(update.Set("name", "new name")).UpdateOne(ctx)`           |
| `UpdateMany`          | Update multiple documents                          | `ctx context.Context`: The context <br> `opts ...options.Lister[options.UpdateManyOptions]`: Update options                                                                                            | `updater.Filter(query.In("status", "pending")).Updates(update.Set("status", "active")).UpdateMany(ctx)` |
| `Upsert`              | Update a document, insert if not exists            | `ctx context.Context`: The context <br> `opts ...options.Lister[options.UpdateOneOptions]`: Update options                                                                                             | `updater.Filter(query.Eq("_id", "1")).Updates(update.Set("name", "new document")).Upsert(ctx)`          |
| `GetCollection`       | Get the associated collection object               | None                                                                                                                                                                                                   | `collection := updater.GetCollection()`                                                                 |
| `PreActionHandler`    | Handle pre-action (internal method)                | `ctx context.Context`: The context <br> `globalOpContext *operation.OpContext`: Global operation context <br> `opContext *OpContext`: Operation context <br> `opType operation.OpType`: Operation type | Internal use, usually not called directly                                                               |
| `PostActionHandler`   | Handle post-action (internal method)               | `ctx context.Context`: The context <br> `globalOpContext *operation.OpContext`: Global operation context <br> `opContext *OpContext`: Operation context <br> `opType operation.OpType`: Operation type | Internal use, usually not called directly                                                               |

## Update a single document

```go
updateResult, err := userColl.Updater().
		Filter(query.Id("60e96214a21b1b0001c3d69e")).
		Updates(update.Set("name", "Mingyong Chen")).
		UpdateOne(context.Background())
```

- The `UpdateOne` method is used to update a single document. The `updateResult` is of type `*mongo.UpdateResult`.

- Through the `Updates` method, we can specify the operations for the update. This method accepts parameters of type `any`, allowing for any type of argument to be passed in, provided they conform to a valid update statement structure. In the example provided, `update.Set("name", "Mingyong Chen")` is used to specify that the `name` field should be updated to "Mingyong Chen". For more buildss of update statements, refer to the `update` package.

## Update multiple documents

```go
updateResult, err := userColl.Updater().
		Updates(update.Set("name", "Mingyong Chen")).
		UpdateMany(context.Background())
```

- The `UpdateMany` method is used for updating multiple documents. The `updateResult` is of type `*mongo.UpdateResult`.

## Upsert operation

```go
updateResult, err := userColl.Updater().
		Filter(query.Eq("name", "Mingyong Chen")).
		Updates(update.NewBuilder().Set("name", "Mingyong Chen").Set("age", 18).Build()).
		Upsert(context.Background())
```

- The `Upsert` method is used to update or insert a single document. The `updateResult` is of type `*mongo.UpdateResult`.
