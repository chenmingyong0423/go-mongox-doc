# 查询条件 - $exists
## 函数构建
使用 `query` 包提供的 `Exists` 函数构建 `$exists`。
```go
// bson.D{bson.E{Key:"deleted_at", Value:bson.D{bson.E{Key:"$exists", Value:false}}}}
result := query.Exists("deleted_at", false)
```
## 方法构建（构建器）
使用 `query.NewBuilder()` 的 `Exists` 方法构建 `$exists`。
```go
// bson.D{bson.E{Key:"deleted_at", Value:bson.D{bson.E{Key:"$exists", Value:false}}}}
result := query.NewBuilder().
    Exists("deleted_at", false).
    Build()
```