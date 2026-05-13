# 聚合表达式 - $gte
## 函数构建
使用 `aggregation` 包提供的 `Gte` 函数构建 `$gte`。
```go
// bson.D{bson.E{Key:"isAdult", Value:bson.D{bson.E{Key:"$gte", Value:[]interface {}{"$age", 18}}}}}
result := aggregation.Gte("isAdult", "$age", 18)
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Gte` 方法构建 `$gte`。
```go
// bson.D{bson.E{Key:"isAdult", Value:bson.D{bson.E{Key:"$gte", Value:[]interface {}{"$age", 18}}}}}
result := aggregation.NewBuilder().
    Gte("isAdult", "$age", 18).
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### GteWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$gte", Value:[]any{"$age", 18}}}
expr := aggregation.GteWithoutKey("$age", 18)
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$gte", Value:[]any{"$age", 18}}}
expr := aggregation.NewBuilder().
    GteWithoutKey("$age", 18).
    Build()
```

