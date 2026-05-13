# 查询条件 - $not
## 函数构建
使用 `query` 包提供的 `Not` 函数构建 `$not`。
```go
// bson.D{bson.E{Key:"$not", Value:query.Regex("name", "^tmp")}}
result := query.Not(query.Regex("name", "^tmp"))
```
## 方法构建（构建器）
使用 `query.NewBuilder()` 的 `Not` 方法构建 `$not`。
```go
// bson.D{bson.E{Key:"$not", Value:query.Regex("name", "^tmp")}}
result := query.NewBuilder().
    Not(query.Regex("name", "^tmp")).
    Build()
```