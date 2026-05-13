# 聚合表达式 - $max
## 函数构建
使用 `aggregation` 包提供的 `Max` 函数构建 `$max`。
```go
// bson.D{bson.E{Key:"maxScore", Value:bson.D{bson.E{Key:"$max", Value:"$score"}}}}
result := aggregation.Max("maxScore", "$score")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Max` 方法构建 `$max`。
```go
// bson.D{bson.E{Key:"maxScore", Value:bson.D{bson.E{Key:"$max", Value:"$score"}}}}
result := aggregation.NewBuilder().
    Max("maxScore", "$score").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### MaxWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$max", Value:"$score"}}
expr := aggregation.MaxWithoutKey("$score")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$max", Value:"$score"}}
expr := aggregation.NewBuilder().
    MaxWithoutKey("$score").
    Build()
```

