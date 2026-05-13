# 更新文档 - SetFields
## 函数构建
使用 `update` 包提供的 `SetFields` 函数构建 `SetFields`。
```go
// bson.D{bson.E{Key:"$set", Value:user}}
result := update.SetFields(user)
```
## 方法构建（构建器）
使用 `update.NewBuilder()` 的 `SetFields` 方法构建 `SetFields`。
```go
// bson.D{bson.E{Key:"$set", Value:user}}
result := update.NewBuilder().
    SetFields(user).
    Build()
```