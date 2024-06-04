# Aggregator 聚合器
通过 `Aggregator()` 获取一个新的泛型的聚合器对象，即 `Aggregator[T any]`，通过 `Aggregator[T any]` 的方法，我们能够执行相关的聚合操作。

聚合器实现了三个方法：
- `Pipeline()` 用于设置聚合管道。
- `Aggregate()` 用于执行聚合操作，返回的查询结果类型与 `T` 一致。
- `AggregateWithParse()` 也是用于执行聚合操作，但使用场景不一样。当聚合结果的类型与 `T` 不一致时，使用 `AggregateWithParse()` 方法可以将结果解析到指定的对象里。

本文通过两个示例展示了这三种方法的用法。然而，聚合操作的核心在于构建聚合管道。关于这一部分的内容，请参阅 [聚合阶段构建](../build/aggregation/stage/introduction)。

## 忽略指定字段
```go
// 忽略年龄字段，只查询名字
users, err := userColl.Aggregator().
    Pipeline(aggregation.NewStageBuilder().Project(bsonx.M("age", 0)).Build()).
    Aggregate(context.Background())
```
`Pipeline()` 方法用于设置 **管道**，而 `Aggregate()` 方法则是执行聚合操作。

通过使用 `aggregation` 包中的 `NewStageBuilder()` 构建器，我们构建了一个 `Project` 阶段，以排除 `age` 字段。

## 字段重命名
```go
// 字段重命名，聚合查询并解析结果
type RealUser struct {
    mongox.Model `bson:"inline"`
    RealName     string `bson:"real_name"`
    Age          int    `bson:"age"`
}
var results []*RealUser
err := userColl.Aggregator().
    Pipeline(aggregation.NewStageBuilder().Project(
        bsonx.NewD().Add("real_name", "$name").Add("age", 1).Build(),
    ).Build()).
    AggregateWithParse(context.Background(), &results)
```