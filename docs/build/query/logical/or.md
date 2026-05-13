# 查询条件 - $or
## 函数构建
使用 `query` 包提供的 `Or` 函数构建 `$or`。
```go
// bson.D{bson.E{Key:"$or", Value:[]any{query.Eq("role", "admin"), query.Eq("role", "owner")}}}
result := query.Or(query.Eq("role", "admin"), query.Eq("role", "owner"))
```
## 方法构建（构建器）
使用 `query.NewBuilder()` 的 `Or` 方法构建 `$or`。
```go
// bson.D{bson.E{Key:"$or", Value:[]any{query.Eq("role", "admin"), query.Eq("role", "owner")}}}
result := query.NewBuilder().
    Or(query.Eq("role", "admin"), query.Eq("role", "owner")).
    Build()
```