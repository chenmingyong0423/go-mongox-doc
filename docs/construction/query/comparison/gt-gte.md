# Gt
## 函数构造
使用 `query` 包提供的 `Gt` 函数构造 `gt` 查询条件。
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gt", Value:18}}}}
query.Gt("age", 18)
```

## 方法构造（构造器）
使用 `query` 包提供的构造器 `Builder` 构造 `gt` 查询条件。
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gt", Value:18}}}}
query.BsonBuilder().Gt("age", 18).Build()

// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gt", Value:18}, bson.E{Key:"$lt", Value:30}}}}
query.BsonBuilder().Gt("age", 18).Lt("age", 30).Build()
```
`query` 包提供的构造器适用于构建复合查询条件的场景。

# Gte
## 函数构造
使用 `query` 包提供的 `Gte` 函数构造 `gte` 查询条件。
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gte", Value:18}}}}
query.Gte("age", 18)
```

## 方法构造（构造器）
使用 `query` 包提供的构造器 `Builder` 构造 `gte` 查询条件。
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gte", Value:18}}}}
 query.BsonBuilder().Gte("age", 18).Build()

// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gte", Value:18}, bson.E{Key:"$lte", Value:30}}}}
query.BsonBuilder().Gte("age", 18).Lte("age", 30).Build()
```
`query` 包提供的构造器适用于构建复合查询条件的场景。