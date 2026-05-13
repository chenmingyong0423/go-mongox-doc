# 聚合表达式 - $sqrt
## 函数构建
使用 `aggregation` 包提供的 `Sqrt` 函数构建 `$sqrt`。
```go
// bson.D{bson.E{Key:"root", Value:bson.D{bson.E{Key:"$sqrt", Value:"$value"}}}}
result := aggregation.Sqrt("root", "$value")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Sqrt` 方法构建 `$sqrt`。
```go
// bson.D{bson.E{Key:"root", Value:bson.D{bson.E{Key:"$sqrt", Value:"$value"}}}}
result := aggregation.NewBuilder().
    Sqrt("root", "$value").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### SqrtWithoutKey
当前该变体只提供构建器方法。

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$sqrt", Value:"$value"}}
expr := aggregation.NewBuilder().
    SqrtWithoutKey("$value").
    Build()
```

