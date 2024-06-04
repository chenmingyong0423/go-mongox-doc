# 查询条件 - $gte
## 函数构建
使用 `query` 包提供的 `Gte` 函数构建 `gte` 查询条件。
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gte", Value:18}}}}
query.Gte("age", 18)
```

## 方法构建（构建器）
使用 `query` 包提供的构建器 `Builder` 构建 `gte` 查询条件。
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gte", Value:18}}}}
 query.NewBuilder().Gte("age", 18).Build()

// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gte", Value:18}, bson.E{Key:"$lte", Value:30}}}}
query.NewBuilder().Gte("age", 18).Lte("age", 30).Build()
```
`query` 包提供的构建器适用于构建复合查询条件的场景。