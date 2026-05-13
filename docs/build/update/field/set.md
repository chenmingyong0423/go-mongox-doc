# 更新文档 - $set
## 函数构建
使用 `update` 包提供的 `Set` 函数构建 `$set`。
```go
// bson.D{bson.E{Key:"$set", Value:bson.D{bson.E{Key:"name", Value:"Mingyong Chen"}}}}
result := update.Set("name", "Mingyong Chen")
```
## 方法构建（构建器）
使用 `update.NewBuilder()` 的 `Set` 方法构建 `$set`。
```go
// bson.D{bson.E{Key:"$set", Value:bson.D{bson.E{Key:"name", Value:"Mingyong Chen"}}}}
result := update.NewBuilder().
    Set("name", "Mingyong Chen").
    Build()
```