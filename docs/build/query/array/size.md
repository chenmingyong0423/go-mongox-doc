# 查询条件 - $size
## 函数构建
使用 `query` 包提供的 `Size` 函数构建 `$size`。
```go
// bson.D{bson.E{Key:"tags", Value:bson.D{bson.E{Key:"$size", Value:3}}}}
result := query.Size("tags", 3)
```
## 方法构建（构建器）
使用 `query.NewBuilder()` 的 `Size` 方法构建 `$size`。
```go
// bson.D{bson.E{Key:"tags", Value:bson.D{bson.E{Key:"$size", Value:3}}}}
result := query.NewBuilder().
    Size("tags", 3).
    Build()
```