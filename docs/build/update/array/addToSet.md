# 更新文档 - $addToSet
## 函数构建
使用 `update` 包提供的 `AddToSet` 函数构建 `$addToSet`。
```go
// bson.D{bson.E{Key:"$addToSet", Value:bson.D{bson.E{Key:"tags", Value:"mongodb"}}}}
result := update.AddToSet("tags", "mongodb")
```
## 方法构建（构建器）
使用 `update.NewBuilder()` 的 `AddToSet` 方法构建 `$addToSet`。
```go
// bson.D{bson.E{Key:"$addToSet", Value:bson.D{bson.E{Key:"tags", Value:"mongodb"}}}}
result := update.NewBuilder().
    AddToSet("tags", "mongodb").
    Build()
```