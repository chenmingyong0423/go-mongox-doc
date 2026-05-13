# 更新文档 - $max
## 函数构建
使用 `update` 包提供的 `Max` 函数构建 `$max`。
```go
// bson.D{bson.E{Key:"$max", Value:bson.D{bson.E{Key:"high_score", Value:100}}}}
result := update.Max("high_score", 100)
```
## 方法构建（构建器）
使用 `update.NewBuilder()` 的 `Max` 方法构建 `$max`。
```go
// bson.D{bson.E{Key:"$max", Value:bson.D{bson.E{Key:"high_score", Value:100}}}}
result := update.NewBuilder().
    Max("high_score", 100).
    Build()
```