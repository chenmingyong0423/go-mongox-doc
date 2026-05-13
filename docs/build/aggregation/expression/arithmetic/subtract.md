# 聚合表达式 - $subtract
## 函数构建
使用 `aggregation` 包提供的 `Subtract` 函数构建 `$subtract`。
```go
// bson.D{bson.E{Key:"delta", Value:bson.D{bson.E{Key:"$subtract", Value:[]interface {}{"$end", "$start"}}}}}
result := aggregation.Subtract("delta", "$end", "$start")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Subtract` 方法构建 `$subtract`。
```go
// bson.D{bson.E{Key:"delta", Value:bson.D{bson.E{Key:"$subtract", Value:[]interface {}{"$end", "$start"}}}}}
result := aggregation.NewBuilder().
    Subtract("delta", "$end", "$start").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### SubtractWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$subtract", Value:[]any{"$end", "$start"}}}
expr := aggregation.SubtractWithoutKey("$end", "$start")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$subtract", Value:[]any{"$end", "$start"}}}
expr := aggregation.NewBuilder().
    SubtractWithoutKey("$end", "$start").
    Build()
```

