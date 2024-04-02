# Aggregator 聚合器
通过 `Aggregator()` 获取一个新的泛型的聚合器对象，即 `Aggregator[T any]`，通过 `Aggregator[T any]` 的方法，我们能够执行相关的聚合操作。

## 忽略指定字段
```go
// 忽略年龄字段，只查询名字
users, err := userColl.Aggregator().
    Pipeline(aggregation.StageBsonBuilder().Project(bsonx.M("age", 0)).Build()).
    Aggregate(context.Background())
```