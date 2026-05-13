# 聚合表达式 - $trunc
## 函数构建
使用 `aggregation` 包提供的 `Trunc` 函数构建 `$trunc`。
```go
// bson.D{bson.E{Key:"truncated", Value:bson.D{bson.E{Key:"$trunc", Value:[]interface {}{"$price", 2}}}}}
result := aggregation.Trunc("truncated", "$price", 2)
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Trunc` 方法构建 `$trunc`。
```go
// bson.D{bson.E{Key:"truncated", Value:bson.D{bson.E{Key:"$trunc", Value:[]interface {}{"$price", 2}}}}}
result := aggregation.NewBuilder().
    Trunc("truncated", "$price", 2).
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### TruncWithoutKey
当前该变体只提供构建器方法。

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$trunc", Value:[]any{"$price", 2}}}
expr := aggregation.NewBuilder().
    TruncWithoutKey("$price", 2).
    Build()
```

