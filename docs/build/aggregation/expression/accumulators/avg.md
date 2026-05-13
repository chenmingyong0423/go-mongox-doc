# 聚合表达式 - $avg
## 函数构建
使用 `aggregation` 包提供的 `Avg` 函数构建 `$avg`。
```go
// bson.D{bson.E{Key:"avgScore", Value:bson.D{bson.E{Key:"$avg", Value:"$score"}}}}
result := aggregation.Avg("avgScore", "$score")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Avg` 方法构建 `$avg`。
```go
// bson.D{bson.E{Key:"avgScore", Value:bson.D{bson.E{Key:"$avg", Value:"$score"}}}}
result := aggregation.NewBuilder().
    Avg("avgScore", "$score").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### AvgWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$avg", Value:"$score"}}
expr := aggregation.AvgWithoutKey("$score")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$avg", Value:"$score"}}
expr := aggregation.NewBuilder().
    AvgWithoutKey("$score").
    Build()
```

