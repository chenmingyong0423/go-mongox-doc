# Deleter 删除器

通过 `Deleter()` 方法获取一个新的泛型的删除器对象，即 `Deleter[T]`。通过 `Deleter[T]` 的方法，我们能够执行相关的删除操作。

| 方法名                | 功能描述                 | 参数说明                                                                                                                                                                   | 示例                                                             |
| --------------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `Filter`              | 设置删除操作的过滤条件   | `filter any`: 用于筛选要删除的文档的条件                                                                                                                                   | `deleter.Filter(query.Eq("name", "Mingyong Chen"))`              |
| `ModelHook`           | 设置模型钩子             | `modelHook any`: 自定义模型钩子                                                                                                                                            | `deleter.ModelHook(userHook)`                                    |
| `RegisterBeforeHooks` | 注册前置钩子函数         | `hooks ...BeforeHookFn`: 在删除操作前执行的钩子函数                                                                                                                        | `deleter.RegisterBeforeHooks(validateDeleteHook)`                |
| `RegisterAfterHooks`  | 注册后置钩子函数         | `hooks ...AfterHookFn`: 在删除操作后执行的钩子函数                                                                                                                         | `deleter.RegisterAfterHooks(logDeleteHook)`                      |
| `DeleteOne`           | 删除单个文档             | `ctx context.Context`: 上下文 <br> `opts ...options.Lister[options.DeleteOneOptions]`: 删除选项                                                                            | `deleter.Filter(query.Eq("_id", "1")).DeleteOne(ctx)`            |
| `DeleteMany`          | 删除多个文档             | `ctx context.Context`: 上下文 <br> `opts ...options.Lister[options.DeleteManyOptions]`: 删除选项                                                                           | `deleter.Filter(query.Eq("status", "inactive")).DeleteMany(ctx)` |
| `GetCollection`       | 获取关联的集合对象       | 无                                                                                                                                                                         | `collection := deleter.GetCollection()`                          |
| `PreActionHandler`    | 处理前置操作（内部方法） | `ctx context.Context`: 上下文 <br> `globalOpContext *operation.OpContext`: 全局操作上下文 <br> `opContext *OpContext`: 操作上下文 <br> `opType operation.OpType`: 操作类型 | 内部使用，通常不直接调用                                         |
| `PostActionHandler`   | 处理后置操作（内部方法） | `ctx context.Context`: 上下文 <br> `globalOpContext *operation.OpContext`: 全局操作上下文 <br> `opContext *OpContext`: 操作上下文 <br> `opType operation.OpType`: 操作类型 | 内部使用，通常不直接调用                                         |

## 删除单个文档

```go
deleteResult, err := userColl.Deleter().Filter(query.Id("60e96214a21b1b0001c3d69e")).DeleteOne(context.Background())
```

`DeleteOne` 方法用于删除单个文档。`deleteResult` 为 `*mongo.DeleteResult` 类型。

## 删除多个文档

```go
deleteResult, err := userColl.Deleter().Filter(query.In("_id", "60e96214a21b1b0001c3d69e", "80e96214a21b1b0001c3d70e")).DeleteMany(context.Background())
```

`DeleteMany` 方法用于删除多个文档。`deleteResult` 为 `*mongo.DeleteResult` 类型。
