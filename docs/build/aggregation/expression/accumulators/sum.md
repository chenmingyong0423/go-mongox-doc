# 聚合表达式 - $sum
## 函数构建
使用 `aggregation` 包提供的 `Sum` 函数构建 `$sum`。
```go
// bson.D{bson.E{Key:"total", Value:bson.D{bson.E{Key:"$sum", Value:"$amount"}}}}
result := aggregation.Sum("total", "$amount")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Sum` 方法构建 `$sum`。
```go
// bson.D{bson.E{Key:"total", Value:bson.D{bson.E{Key:"$sum", Value:"$amount"}}}}
result := aggregation.NewBuilder().
    Sum("total", "$amount").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### SumWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$sum", Value:"$amount"}}
expr := aggregation.SumWithoutKey("$amount")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$sum", Value:"$amount"}}
expr := aggregation.NewBuilder().
    SumWithoutKey("$amount").
    Build()
```

