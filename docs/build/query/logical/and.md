# 查询条件 - $and
## 函数构建
使用 `query` 包提供的 `And` 函数构建 `$and`。
```go
// bson.D{bson.E{Key:"$and", Value:[]any{query.Eq("status", "active"), query.Gte("age", 18)}}}
result := query.And(query.Eq("status", "active"), query.Gte("age", 18))
```
## 方法构建（构建器）
使用 `query.NewBuilder()` 的 `And` 方法构建 `$and`。
```go
// bson.D{bson.E{Key:"$and", Value:[]any{query.Eq("status", "active"), query.Gte("age", 18)}}}
result := query.NewBuilder().
    And(query.Eq("status", "active"), query.Gte("age", 18)).
    Build()
```