# 更新文档 - $pull
## 函数构建
使用 `update` 包提供的 `Pull` 函数构建 `$pull`。
```go
// bson.D{bson.E{Key:"$pull", Value:bson.D{bson.E{Key:"tags", Value:"deprecated"}}}}
result := update.Pull("tags", "deprecated")
```
## 方法构建（构建器）
使用 `update.NewBuilder()` 的 `Pull` 方法构建 `$pull`。
```go
// bson.D{bson.E{Key:"$pull", Value:bson.D{bson.E{Key:"tags", Value:"deprecated"}}}}
result := update.NewBuilder().
    Pull("tags", "deprecated").
    Build()
```