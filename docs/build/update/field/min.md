# 更新文档 - $min
## 函数构建
使用 `update` 包提供的 `Min` 函数构建 `$min`。
```go
// bson.D{bson.E{Key:"$min", Value:bson.D{bson.E{Key:"low_score", Value:60}}}}
result := update.Min("low_score", 60)
```
## 方法构建（构建器）
使用 `update.NewBuilder()` 的 `Min` 方法构建 `$min`。
```go
// bson.D{bson.E{Key:"$min", Value:bson.D{bson.E{Key:"low_score", Value:60}}}}
result := update.NewBuilder().
    Min("low_score", 60).
    Build()
```