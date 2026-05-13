# 聚合表达式 - $ln
## 函数构建
使用 `aggregation` 包提供的 `Ln` 函数构建 `$ln`。
```go
// bson.D{bson.E{Key:"result", Value:bson.D{bson.E{Key:"$ln", Value:"$value"}}}}
result := aggregation.Ln("result", "$value")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Ln` 方法构建 `$ln`。
```go
// bson.D{bson.E{Key:"result", Value:bson.D{bson.E{Key:"$ln", Value:"$value"}}}}
result := aggregation.NewBuilder().
    Ln("result", "$value").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### LnWithoutKey
当前该变体只提供构建器方法。

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$ln", Value:"$value"}}
expr := aggregation.NewBuilder().
    LnWithoutKey("$value").
    Build()
```

