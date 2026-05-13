# 聚合表达式 - $lte
## 函数构建
使用 `aggregation` 包提供的 `Lte` 函数构建 `$lte`。
```go
// bson.D{bson.E{Key:"inLimit", Value:bson.D{bson.E{Key:"$lte", Value:[]interface {}{"$quantity", 10}}}}}
result := aggregation.Lte("inLimit", "$quantity", 10)
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Lte` 方法构建 `$lte`。
```go
// bson.D{bson.E{Key:"inLimit", Value:bson.D{bson.E{Key:"$lte", Value:[]interface {}{"$quantity", 10}}}}}
result := aggregation.NewBuilder().
    Lte("inLimit", "$quantity", 10).
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### LteWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$lte", Value:[]any{"$quantity", 10}}}
expr := aggregation.LteWithoutKey("$quantity", 10)
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$lte", Value:[]any{"$quantity", 10}}}
expr := aggregation.NewBuilder().
    LteWithoutKey("$quantity", 10).
    Build()
```

