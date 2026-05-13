# 更新文档 - $inc
## 函数构建
使用 `update` 包提供的 `Inc` 函数构建 `$inc`。
```go
// bson.D{bson.E{Key:"$inc", Value:bson.D{bson.E{Key:"age", Value:1}}}}
result := update.Inc("age", 1)
```
## 方法构建（构建器）
使用 `update.NewBuilder()` 的 `Inc` 方法构建 `$inc`。
```go
// bson.D{bson.E{Key:"$inc", Value:bson.D{bson.E{Key:"age", Value:1}}}}
result := update.NewBuilder().
    Inc("age", 1).
    Build()
```