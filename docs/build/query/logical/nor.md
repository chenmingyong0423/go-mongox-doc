# 查询条件 - $nor
## 函数构建
使用 `query` 包提供的 `Nor` 函数构建 `$nor`。
```go
// bson.D{bson.E{Key:"$nor", Value:[]any{query.Eq("status", "deleted"), query.Lt("age", 18)}}}
result := query.Nor(query.Eq("status", "deleted"), query.Lt("age", 18))
```
## 方法构建（构建器）
使用 `query.NewBuilder()` 的 `Nor` 方法构建 `$nor`。
```go
// bson.D{bson.E{Key:"$nor", Value:[]any{query.Eq("status", "deleted"), query.Lt("age", 18)}}}
result := query.NewBuilder().
    Nor(query.Eq("status", "deleted"), query.Lt("age", 18)).
    Build()
```