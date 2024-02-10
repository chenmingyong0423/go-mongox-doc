# 单一构造
通过 `query` 包提供的函数直接构造 `eq` 查询条件。
```go
// bson.D{bson.E{Key: "name", Value: bson.D{bson.E{Key: "$eq", Value: "Mingyong Chen"}}}}
eq := query.Eq("name", "Mingyong Chen")
```
通过 `query` 包提供的函数只能构造一个查询条件。

# 通过构造器构造
通过 `query` 包提供的构造器构造 `eq` 查询条件。
```go
// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$eq", Value:"Mingyong Chen"}}}}
eq := query.BsonBuilder().Eq("name", "Mingyong Chen").Build()
// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$eq", Value:"Mingyong Chen"}}}, bson.E{Key:"age", Value:bson.D{bson.E{Key:"$eq", Value:18}}}}
eq = query.BsonBuilder().Eq("name", "Mingyong Chen").Eq("age", 18).Build()
```
通过构造器构造 `eq` 查询条件时，可以通过链式调用构造器的方法构造多个查询条件。