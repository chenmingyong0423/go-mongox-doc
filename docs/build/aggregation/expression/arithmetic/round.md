# 聚合表达式 - $round
## 函数构建
使用 `aggregation` 包提供的 `Round` 函数构建 `$round`。
```go
// bson.D{bson.E{Key:"rounded", Value:bson.D{bson.E{Key:"$round", Value:[]interface {}{"$price", 2}}}}}
result := aggregation.Round("rounded", "$price", 2)
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Round` 方法构建 `$round`。
```go
// bson.D{bson.E{Key:"rounded", Value:bson.D{bson.E{Key:"$round", Value:[]interface {}{"$price", 2}}}}}
result := aggregation.NewBuilder().
    Round("rounded", "$price", 2).
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### RoundWithoutKey
当前该变体只提供构建器方法。

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$round", Value:[]any{"$price", 2}}}
expr := aggregation.NewBuilder().
    RoundWithoutKey("$price", 2).
    Build()
```

