# Finder 查询器

通过 `Finder()` 方法获取一个新的泛型的查询器对象，即 `Finder[T]`。通过 `Finder[T]` 的方法，我们能够执行相关的查询操作。

| 方法名                | 功能描述                                | 参数说明                                                                                                                                                                          | 示例                                                                                                  |
| --------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `Filter`              | 设置查询的过滤条件                      | `filter any`: 用于筛选文档的条件                                                                                                                                                  | `finder.Filter(query.Eq("name", "Mingyong Chen"))`                                                    |
| `Find`                | 查询多个文档                            | `ctx context.Context`: 上下文 <br> `opts ...options.Lister[options.FindOptions]`: 查询选项                                                                                        | `finder.Filter(query.Eq("status", "active")).Find(ctx)`                                               |
| `FindOne`             | 查询单个文档                            | `ctx context.Context`: 上下文 <br> `opts ...options.Lister[options.FindOneOptions]`: 查询选项                                                                                     | `finder.Filter(query.Eq("_id", "1")).FindOne(ctx)`                                                    |
| `Count`               | 计算符合条件的文档数量                  | `ctx context.Context`: 上下文 <br> `opts ...options.Lister[options.CountOptions]`: 计数选项                                                                                       | `finder.Filter(query.Eq("status", "active")).Count(ctx)`                                              |
| `Distinct`            | 获取指定字段的不同值                    | `ctx context.Context`: 上下文 <br> `fieldName string`: 字段名 <br> `opts ...options.Lister[options.DistinctOptions]`: 选项                                                        | `finder.Filter(query.Eq("status", "active")).Distinct(ctx, "category")`                               |
| `DistinctWithParse`   | 获取并解析指定字段的不同值              | `ctx context.Context`: 上下文 <br> `fieldName string`: 字段名 <br> `result any`: 结果接收对象 <br> `opts ...options.Lister[options.DistinctOptions]`: 选项                        | `finder.Filter(query.Eq("status", "active")).DistinctWithParse(ctx, "category", &categories)`         |
| `FindOneAndUpdate`    | 查询并更新单个文档                      | `ctx context.Context`: 上下文 <br> `opts ...options.Lister[options.FindOneAndUpdateOptions]`: 选项                                                                                | `finder.Filter(query.Eq("_id", "1")).Updates(update.Set("status", "inactive")).FindOneAndUpdate(ctx)` |
| `Limit`               | 设置查询结果的最大数量                  | `limit int64`: 限制数量                                                                                                                                                           | `finder.Filter(query.Eq("status", "active")).Limit(10).Find(ctx)`                                     |
| `Skip`                | 设置查询结果的跳过数量                  | `skip int64`: 跳过数量                                                                                                                                                            | `finder.Filter(query.Eq("status", "active")).Skip(20).Find(ctx)`                                      |
| `Sort`                | 设置查询结果的排序方式                  | `sort any`: 排序条件                                                                                                                                                              | `finder.Filter(query.Eq("status", "active")).Sort(bsonx.StringSortToBsonD("-createdAt")).Find(ctx)`   |
| `Updates`             | 设置更新操作（用于 `FindOneAndUpdate`） | `update any`: 更新操作                                                                                                                                                            | `finder.Filter(query.Eq("_id", "1")).Updates(update.Set("status", "inactive")).FindOneAndUpdate(ctx)` |
| `ModelHook`           | 设置模型钩子                            | `modelHook any`: 自定义模型钩子                                                                                                                                                   | `finder.Filter(query.Eq("status", "active")).ModelHook(userHook).Find(ctx)`                           |
| `RegisterBeforeHooks` | 注册前置钩子函数                        | `hooks ...BeforeHookFn[T]`: 在查询操作前执行的钩子函数                                                                                                                            | `finder.RegisterBeforeHooks(validateQueryHook).Find(ctx)`                                             |
| `RegisterAfterHooks`  | 注册后置钩子函数                        | `hooks ...AfterHookFn[T]`: 在查询操作后执行的钩子函数                                                                                                                             | `finder.RegisterAfterHooks(logQueryResultHook).Find(ctx)`                                             |
| `GetCollection`       | 获取关联的集合对象                      | 无                                                                                                                                                                                | `collection := finder.GetCollection()`                                                                |
| `PreActionHandler`    | 处理前置操作（内部方法）                | `ctx context.Context`: 上下文 <br> `globalOpContext *operation.OpContext`: 全局操作上下文 <br> `opContext *OpContext[T]`: 操作上下文 <br> `opTypes ...operation.OpType`: 操作类型 | 内部使用，通常不直接调用                                                                              |
| `PostActionHandler`   | 处理后置操作（内部方法）                | `ctx context.Context`: 上下文 <br> `globalOpContext *operation.OpContext`: 全局操作上下文 <br> `opContext *OpContext[T]`: 操作上下文 <br> `opTypes ...operation.OpType`: 操作类型 | 内部使用，通常不直接调用                                                                              |

## 查询单个文档

```go
user, err := userColl.Finder().Filter(query.Id("60e96214a21b1b0001c3d69e")).FindOne(context.Background())
```

- `FindOne` 方法用于查询单个文档。`user` 为指定的泛型类型的指针对象，即 `*User`。

- 通过 `Filter` 方法，我们可以指定查询条件。该方法接受的参数类型 `any`，意味着允许传入任意类型的参数（但是必须是合法的查询条件）。在上面的例子中，`query.Id("60e96214a21b1b0001c3d69e")` 用于指定查询条件为 `_id` 等于 `60e96214a21b1b0001c3d69e`。更多的查询条件构建可以参考 [query 包](../build/query/introduction)。

## 查询多个文档

```go
users, err := userColl.Finder().Filter(query.In("_id", "60e96214a21b1b0001c3d69e", "80e96214a21b1b0001c3d70e")).Find(context.Background())
```

- `Find` 方法用于查询多个文档。`users` 为指定的泛型类型的指针对象的切片，即 `[]*User`。

## 统计文档数量

```go
count, err := userColl.Finder().
		Filter(query.NewBuilder().Gt("age", 18).Lt("age", 24).Build()).
		Count(context.Background())
```

- `Count` 方法用于统计文档数量。`count` 为 `int64` 类型。

## Distinct 查询

```go
// v1
//result, err := userColl.Finder().Distinct(context.Background(), "age")
//
//// 你可以使用 DistinctWithParse 方法来解析结果到一个切片
//ageSlice := make([]int, 0)
//err := userColl.Finder().DistinctWithParse(context.Background(), "age", &ageSlice)

// v2
distinctResult := userColl.Finder().Distinct(context.Background(), "age")
if distinctResult.Err() != nil {
    panic(distinctResult.Err())
}

// 你可以使用 DistinctWithParse 方法来解析结果到一个切片
ageSlice := make([]int, 0)
err := userColl.Finder().DistinctWithParse(context.Background(), "age", &ageSlice)
```

- `Distinct` 方法用于查询指定字段的唯一值。`mongo-driver v1` 返回的 `result` 为 `[]any` 类型，而 `mongo-driver v2` 返回的则是 `*mongo.DistinctResult` 类型。

- 如果你想要解析结果到一个切片，你可以使用 `DistinctWithParse` 方法。该方法接受一个指向切片的指针作为参数，用于解析结果。

## 分页查询

```go
users, err := userColl.Finder().Skip(10).Limit(10).Find(context.Background())
```

- `Skip(n)`: 设置查询结果跳过前 n 条记录，通常用于分页时跳过已加载的部分数据。
- `Limit(n)`: 限制查询结果返回的最大记录数，避免一次性加载过多数据。

本示例中：跳过前 10 条记录，返回第 11~20 条，共 10 条数据，通常用于第 2 页的数据加载（假设每页 10 条）。

## 对结果进行排序

```go
users, err := userColl.Finder().Sort(bson.M{"age": 1, "created_at": -1}).Find(context.Background())
```

- `Sort`: 该方法用于对查询结果进行排序。
- `bson.M{"age": 1, "created_at": -1}`: 按照 `age` 字段升序排序，如果 `age` 相同，则按照 `created_at` 字段降序排序。
