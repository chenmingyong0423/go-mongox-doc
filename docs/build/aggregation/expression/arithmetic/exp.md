# 聚合表达式 - $exp
## 函数构建
使用 `aggregation` 包提供的 `Exp` 函数构建 `$exp`。
```go
// bson.D{bson.E{Key:"result", Value:bson.D{bson.E{Key:"$exp", Value:"$power"}}}}
result := aggregation.Exp("result", "$power")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Exp` 方法构建 `$exp`。
```go
// bson.D{bson.E{Key:"result", Value:bson.D{bson.E{Key:"$exp", Value:"$power"}}}}
result := aggregation.NewBuilder().
    Exp("result", "$power").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### ExpWithoutKey
当前该变体只提供构建器方法。

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$exp", Value:"$power"}}
expr := aggregation.NewBuilder().
    ExpWithoutKey("$power").
    Build()
```

