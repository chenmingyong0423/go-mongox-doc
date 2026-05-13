# 聚合表达式 - $pow
## 函数构建
使用 `aggregation` 包提供的 `Pow` 函数构建 `$pow`。
```go
// bson.D{bson.E{Key:"squared", Value:bson.D{bson.E{Key:"$pow", Value:[]interface {}{"$value", 2}}}}}
result := aggregation.Pow("squared", "$value", 2)
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Pow` 方法构建 `$pow`。
```go
// bson.D{bson.E{Key:"squared", Value:bson.D{bson.E{Key:"$pow", Value:[]interface {}{"$value", 2}}}}}
result := aggregation.NewBuilder().
    Pow("squared", "$value", 2).
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### PowWithoutKey
当前该变体只提供构建器方法。

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$pow", Value:[]any{"$value", 2}}}
expr := aggregation.NewBuilder().
    PowWithoutKey("$value", 2).
    Build()
```

