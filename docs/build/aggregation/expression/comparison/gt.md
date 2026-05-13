# 聚合表达式 - $gt
## 函数构建
使用 `aggregation` 包提供的 `Gt` 函数构建 `$gt`。
```go
// bson.D{bson.E{Key:"isAdult", Value:bson.D{bson.E{Key:"$gt", Value:[]interface {}{"$age", 18}}}}}
result := aggregation.Gt("isAdult", "$age", 18)
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Gt` 方法构建 `$gt`。
```go
// bson.D{bson.E{Key:"isAdult", Value:bson.D{bson.E{Key:"$gt", Value:[]interface {}{"$age", 18}}}}}
result := aggregation.NewBuilder().
    Gt("isAdult", "$age", 18).
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### GtWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$gt", Value:[]any{"$age", 18}}}
expr := aggregation.GtWithoutKey("$age", 18)
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$gt", Value:[]any{"$age", 18}}}
expr := aggregation.NewBuilder().
    GtWithoutKey("$age", 18).
    Build()
```

