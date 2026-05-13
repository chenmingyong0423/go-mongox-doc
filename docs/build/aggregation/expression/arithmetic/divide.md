# 聚合表达式 - $divide
## 函数构建
使用 `aggregation` 包提供的 `Divide` 函数构建 `$divide`。
```go
// bson.D{bson.E{Key:"avgPrice", Value:bson.D{bson.E{Key:"$divide", Value:[]interface {}{"$total", "$count"}}}}}
result := aggregation.Divide("avgPrice", "$total", "$count")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Divide` 方法构建 `$divide`。
```go
// bson.D{bson.E{Key:"avgPrice", Value:bson.D{bson.E{Key:"$divide", Value:[]interface {}{"$total", "$count"}}}}}
result := aggregation.NewBuilder().
    Divide("avgPrice", "$total", "$count").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### DivideWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$divide", Value:[]any{"$total", "$count"}}}
expr := aggregation.DivideWithoutKey("$total", "$count")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$divide", Value:[]any{"$total", "$count"}}}
expr := aggregation.NewBuilder().
    DivideWithoutKey("$total", "$count").
    Build()
```

