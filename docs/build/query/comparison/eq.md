# 查询条件 - $eq
## 函数构建
使用 `query` 包提供的 `Eq` 函数构建 `eq` 查询条件。
```go
// bson.D{bson.E{Key: "name", Value: bson.D{bson.E{Key: "$eq", Value: "Mingyong Chen"}}}}
eq := query.Eq("name", "Mingyong Chen")
```

## 方法构建（构建器）
使用 `query` 包提供的构建器 `Builder` 构建 `eq` 查询条件。
```go
// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$eq", Value:"Mingyong Chen"}}}}
eq := query.NewBuilder().Eq("name", "Mingyong Chen").Build()

// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$eq", Value:"Mingyong Chen"}}}, bson.E{Key:"age", Value:bson.D{bson.E{Key:"$eq", Value:18}}}}
eq = query.NewBuilder().Eq("name", "Mingyong Chen").Eq("age", 18).Build()
```
`query` 包提供的构建器适用于构建复合查询条件的场景。