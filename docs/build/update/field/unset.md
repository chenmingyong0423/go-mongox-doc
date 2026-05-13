# 更新文档 - $unset
## 函数构建
使用 `update` 包提供的 `Unset` 函数构建 `$unset`。
```go
// bson.D{bson.E{Key:"$unset", Value:bson.D{bson.E{Key:"temporary", Value:""}, bson.E{Key:"deprecated", Value:""}}}}
result := update.Unset("temporary", "deprecated")
```
## 方法构建（构建器）
使用 `update.NewBuilder()` 的 `Unset` 方法构建 `$unset`。
```go
// bson.D{bson.E{Key:"$unset", Value:bson.D{bson.E{Key:"temporary", Value:""}, bson.E{Key:"deprecated", Value:""}}}}
result := update.NewBuilder().
    Unset("temporary", "deprecated").
    Build()
```