# 查询条件 - $gt
## 函数构建
使用 `query` 包提供的 `Gt` 函数构建 `gt` 查询条件。
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gt", Value:18}}}}
query.Gt("age", 18)
```

## 方法构建（构建器）
使用 `query` 包提供的构建器 `Builder` 构建 `gt` 查询条件。
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gt", Value:18}}}}
query.BsonBuilder().Gt("age", 18).Build()

// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gt", Value:18}, bson.E{Key:"$lt", Value:30}}}}
query.BsonBuilder().Gt("age", 18).Lt("age", 30).Build()
```
`query` 包提供的构建器适用于构建复合查询条件的场景。