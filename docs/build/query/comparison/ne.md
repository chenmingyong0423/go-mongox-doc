# 查询条件 - $ne
## 函数构建
使用 `query` 包提供的 `Ne` 函数构建 `$ne`。
```go
// bson.D{bson.E{Key:"status", Value:bson.D{bson.E{Key:"$ne", Value:"disabled"}}}}
result := query.Ne("status", "disabled")
```
## 方法构建（构建器）
使用 `query.NewBuilder()` 的 `Ne` 方法构建 `$ne`。
```go
// bson.D{bson.E{Key:"status", Value:bson.D{bson.E{Key:"$ne", Value:"disabled"}}}}
result := query.NewBuilder().
    Ne("status", "disabled").
    Build()
```