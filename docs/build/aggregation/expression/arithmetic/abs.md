# 聚合表达式 - $abs
## 函数构建
使用 `aggregation` 包提供的 `Abs` 函数构建 `$abs`。
```go
// bson.D{bson.E{Key:"absoluteDelta", Value:bson.D{bson.E{Key:"$abs", Value:"$delta"}}}}
result := aggregation.Abs("absoluteDelta", "$delta")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Abs` 方法构建 `$abs`。
```go
// bson.D{bson.E{Key:"absoluteDelta", Value:bson.D{bson.E{Key:"$abs", Value:"$delta"}}}}
result := aggregation.NewBuilder().
    Abs("absoluteDelta", "$delta").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### AbsWithoutKey
当前该变体只提供构建器方法。

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$abs", Value:"$delta"}}
expr := aggregation.NewBuilder().
    AbsWithoutKey("$delta").
    Build()
```

