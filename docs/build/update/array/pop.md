# 更新文档 - $pop
## 函数构建
使用 `update` 包提供的 `Pop` 函数构建 `$pop`。
```go
// bson.D{bson.E{Key:"$pop", Value:bson.D{bson.E{Key:"scores", Value:-1}}}}
result := update.Pop("scores", -1)
```
## 方法构建（构建器）
使用 `update.NewBuilder()` 的 `Pop` 方法构建 `$pop`。
```go
// bson.D{bson.E{Key:"$pop", Value:bson.D{bson.E{Key:"scores", Value:-1}}}}
result := update.NewBuilder().
    Pop("scores", -1).
    Build()
```