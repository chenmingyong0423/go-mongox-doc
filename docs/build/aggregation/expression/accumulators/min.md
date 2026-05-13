# 聚合表达式 - $min
## 函数构建
使用 `aggregation` 包提供的 `Min` 函数构建 `$min`。
```go
// bson.D{bson.E{Key:"minScore", Value:bson.D{bson.E{Key:"$min", Value:"$score"}}}}
result := aggregation.Min("minScore", "$score")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Min` 方法构建 `$min`。
```go
// bson.D{bson.E{Key:"minScore", Value:bson.D{bson.E{Key:"$min", Value:"$score"}}}}
result := aggregation.NewBuilder().
    Min("minScore", "$score").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### MinWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$min", Value:"$score"}}
expr := aggregation.MinWithoutKey("$score")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$min", Value:"$score"}}
expr := aggregation.NewBuilder().
    MinWithoutKey("$score").
    Build()
```

