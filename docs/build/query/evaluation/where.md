# 查询条件 - $where
## 函数构建
使用 `query` 包提供的 `Where` 函数构建 `$where`。
```go
// bson.D{bson.E{Key:"$where", Value:"this.age > 18"}}
result := query.Where("this.age > 18")
```
## 方法构建（构建器）
使用 `query.NewBuilder()` 的 `Where` 方法构建 `$where`。
```go
// bson.D{bson.E{Key:"$where", Value:"this.age > 18"}}
result := query.NewBuilder().
    Where("this.age > 18").
    Build()
```