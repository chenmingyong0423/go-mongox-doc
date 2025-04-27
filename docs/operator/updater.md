# Updater 更新器

通过 `Updater()` 方法获取一个新的泛型的更新器对象，即 `Updater[T]`。通过 `Updater[T]` 的方法，我们能够执行相关的更新操作。

| 方法名                | 功能描述                 | 参数说明                                                                                                                                                                   | 示例                                                                                                    |
| --------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `Filter`              | 设置更新操作的过滤条件   | `filter any`: 用于筛选文档的条件                                                                                                                                           | `updater.Filter(query.Eq("name", "Mingyong Chen"))`                                                     |
| `Updates`             | 设置要执行的更新操作     | `updates any`: 更新操作的内容                                                                                                                                              | `updater.Updates(update.Set("name", "chenmingyong"))`                                                   |
| `Replacement`         | 设置替换文档的内容       | `replacement any`: 用于替换的文档                                                                                                                                          | `updater.Replacement(newUser)`                                                                          |
| `ModelHook`           | 设置模型钩子             | `modelHook any`: 自定义模型钩子                                                                                                                                            | `updater.ModelHook(userHook)`                                                                           |
| `RegisterBeforeHooks` | 注册前置钩子函数         | `hooks ...BeforeHookFn`: 在更新操作前执行的钩子函数                                                                                                                        | `updater.RegisterBeforeHooks(validateUserHook)`                                                         |
| `RegisterAfterHooks`  | 注册后置钩子函数         | `hooks ...AfterHookFn`: 在更新操作后执行的钩子函数                                                                                                                         | `updater.RegisterAfterHooks(logUpdateHook)`                                                             |
| `UpdateOne`           | 更新单个文档             | `ctx context.Context`: 上下文 <br> `opts ...options.Lister[options.UpdateOneOptions]`: 更新选项                                                                            | `updater.Filter(query.Eq("_id", "1")).Updates(update.Set("name", "新名称")).UpdateOne(ctx)`             |
| `UpdateMany`          | 更新多个文档             | `ctx context.Context`: 上下文 <br> `opts ...options.Lister[options.UpdateManyOptions]`: 更新选项                                                                           | `updater.Filter(query.In("status", "pending")).Updates(update.Set("status", "active")).UpdateMany(ctx)` |
| `Upsert`              | 更新文档，如不存在则插入 | `ctx context.Context`: 上下文 <br> `opts ...options.Lister[options.UpdateOneOptions]`: 更新选项                                                                            | `updater.Filter(query.Eq("_id", "1")).Updates(update.Set("name", "新文档")).Upsert(ctx)`                |
| `GetCollection`       | 获取关联的集合对象       | 无                                                                                                                                                                         | `collection := updater.GetCollection()`                                                                 |
| `PreActionHandler`    | 处理前置操作（内部方法） | `ctx context.Context`: 上下文 <br> `globalOpContext *operation.OpContext`: 全局操作上下文 <br> `opContext *OpContext`: 操作上下文 <br> `opType operation.OpType`: 操作类型 | 内部使用，通常不直接调用                                                                                |
| `PostActionHandler`   | 处理后置操作（内部方法） | `ctx context.Context`: 上下文 <br> `globalOpContext *operation.OpContext`: 全局操作上下文 <br> `opContext *OpContext`: 操作上下文 <br> `opType operation.OpType`: 操作类型 | 内部使用，通常不直接调用                                                                                |
|  |

## 更新单个文档

```go
updateResult, err := userColl.Updater().
		Filter(query.Id("60e96214a21b1b0001c3d69e")).
		Updates(update.Set("name", "Mingyong Chen")).
		UpdateOne(context.Background())
```

`UpdateOne` 方法用于更新单个文档。`updateResult` 为 `*mongo.UpdateResult` 类型。

- 通过 `Updates` 方法，我们可以指定更新的操作。该方法接受的参数类型为 `any`，意味着可以传入任意类型的参数（但是必须是合法的更新语句结构）。在上面的例子中，`update.Set("name", "Mingyong Chen")` 用于指定更新字段为 `name` 等于 `Mingyong Chen`。更多的更新语句构建可以参考 `update` 包。

## 更新多个文档

```go
updateResult, err := userColl.Updater().
		Updates(update.Set("name", "Mingyong Chen")).
		UpdateMany(context.Background())
```

- `UpdateMany` 方法用于更新多个文档。`updateResult` 为 `*mongo.UpdateResult` 类型。

## Upsert 操作

```go
updateResult, err := userColl.Updater().
		Filter(query.Eq("name", "Mingyong Chen")).
		Updates(update.NewBuilder().Set("name", "Mingyong Chen").Set("age", 18).Build()).
		Upsert(context.Background())
```

- `Upsert` 方法用于更新或插入一个文档。`updateResult` 为 `*mongo.UpdateResult` 类型。
