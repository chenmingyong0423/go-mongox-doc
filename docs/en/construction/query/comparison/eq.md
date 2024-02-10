# 单一构造
# single construction
Construct the `eq` query condition directly through the functions provided by the `query` package.
```go
// bson.D{bson.E{Key: "name", Value: bson.D{bson.E{Key: "$eq", Value: "Mingyong Chen"}}}}
eq := query.Eq("name", "Mingyong Chen")
```
Use the functions provided by the `query` package to construct only one query condition.

# 通过构造器构造
Construct the `eq` query condition using the constructor provided by the `query` package.
```go
// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$eq", Value:"Mingyong Chen"}}}}
eq := query.BsonBuilder().Eq("name", "Mingyong Chen").Build()
// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$eq", Value:"Mingyong Chen"}}}, bson.E{Key:"age", Value:bson.D{bson.E{Key:"$eq", Value:18}}}}
eq = query.BsonBuilder().Eq("name", "Mingyong Chen").Eq("age", 18).Build()
```
When constructing the `eq` query condition using the constructor, you can build multiple query conditions by chaining methods of the constructor.