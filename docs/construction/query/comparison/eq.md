# 函数构造
使用 `query` 包提供的 `Eq` 函数构造 `eq` 查询条件。
```go
// bson.D{bson.E{Key: "name", Value: bson.D{bson.E{Key: "$eq", Value: "Mingyong Chen"}}}}
eq := query.Eq("name", "Mingyong Chen")
```

# 方法构造（构造器）
使用 `query` 包提供的构造器 `Builder` 构造 `eq` 查询条件。
```go
// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$eq", Value:"Mingyong Chen"}}}}
eq := query.BsonBuilder().Eq("name", "Mingyong Chen").Build()

// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$eq", Value:"Mingyong Chen"}}}, bson.E{Key:"age", Value:bson.D{bson.E{Key:"$eq", Value:18}}}}
eq = query.BsonBuilder().Eq("name", "Mingyong Chen").Eq("age", 18).Build()
```
`query` 包提供的构造器适用于构建复合查询条件的场景。