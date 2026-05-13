# 更新文档 - $mul
## 函数构建
使用 `update` 包提供的 `Mul` 函数构建 `$mul`。
```go
// bson.D{bson.E{Key:"$mul", Value:bson.D{bson.E{Key:"price", Value:1.1}}}}
result := update.Mul("price", 1.1)
```
## 方法构建（构建器）
使用 `update.NewBuilder()` 的 `Mul` 方法构建 `$mul`。
```go
// bson.D{bson.E{Key:"$mul", Value:bson.D{bson.E{Key:"price", Value:1.1}}}}
result := update.NewBuilder().
    Mul("price", 1.1).
    Build()
```