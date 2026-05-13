# 更新文档 - $rename
## 函数构建
使用 `update` 包提供的 `Rename` 函数构建 `$rename`。
```go
// bson.D{bson.E{Key:"$rename", Value:bson.D{bson.E{Key:"nickname", Value:"display_name"}}}}
result := update.Rename("nickname", "display_name")
```
## 方法构建（构建器）
使用 `update.NewBuilder()` 的 `Rename` 方法构建 `$rename`。
```go
// bson.D{bson.E{Key:"$rename", Value:bson.D{bson.E{Key:"nickname", Value:"display_name"}}}}
result := update.NewBuilder().
    Rename("nickname", "display_name").
    Build()
```