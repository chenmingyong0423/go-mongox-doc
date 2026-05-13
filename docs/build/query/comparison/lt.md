# 查询条件 - $lt
## 函数构建
使用 `query` 包提供的 `Lt` 函数构建 `$lt`。
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$lt", Value:60}}}}
result := query.Lt("age", 60)
```
## 方法构建（构建器）
使用 `query.NewBuilder()` 的 `Lt` 方法构建 `$lt`。
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$lt", Value:60}}}}
result := query.NewBuilder().
    Lt("age", 60).
    Build()
```