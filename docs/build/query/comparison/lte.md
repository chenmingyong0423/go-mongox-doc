# 查询条件 - $lte
## 函数构建
使用 `query` 包提供的 `Lte` 函数构建 `$lte`。
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$lte", Value:60}}}}
result := query.Lte("age", 60)
```
## 方法构建（构建器）
使用 `query.NewBuilder()` 的 `Lte` 方法构建 `$lte`。
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$lte", Value:60}}}}
result := query.NewBuilder().
    Lte("age", 60).
    Build()
```