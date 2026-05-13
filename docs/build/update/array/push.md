# 更新文档 - $push
## 函数构建
使用 `update` 包提供的 `Push` 函数构建 `$push`。
```go
// bson.D{bson.E{Key:"$push", Value:bson.D{bson.E{Key:"tags", Value:"mongodb"}}}}
result := update.Push("tags", "mongodb")
```
## 方法构建（构建器）
使用 `update.NewBuilder()` 的 `Push` 方法构建 `$push`。
```go
// bson.D{bson.E{Key:"$push", Value:bson.D{bson.E{Key:"tags", Value:"mongodb"}}}}
result := update.NewBuilder().
    Push("tags", "mongodb").
    Build()
```