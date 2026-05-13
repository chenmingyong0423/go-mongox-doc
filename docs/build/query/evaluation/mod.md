# 查询条件 - $mod
## 函数构建
使用 `query` 包提供的 `Mod` 函数构建 `$mod`。
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$mod", Value:bson.A{5, 0}}}}}
result := query.Mod("age", 5, 0)
```
## 方法构建（构建器）
使用 `query.NewBuilder()` 的 `Mod` 方法构建 `$mod`。
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$mod", Value:bson.A{5, 0}}}}}
result := query.NewBuilder().
    Mod("age", 5, 0).
    Build()
```