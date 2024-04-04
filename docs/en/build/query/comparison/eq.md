# Query Condition - $eq
## Function Build
Build the `eq` query condition using the `Eq` function provided by the `query` package.
```go
// bson.D{bson.E{Key: "name", Value: bson.D{bson.E{Key: "$eq", Value: "Mingyong Chen"}}}}
query.Eq("name", "Mingyong Chen")
```

## Method Build (Builder)
Build the `eq` query condition using the `Builder` builder provided by the `query` package.
```go
// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$eq", Value:"Mingyong Chen"}}}}
query.BsonBuilder().Eq("name", "Mingyong Chen").Build()

// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$eq", Value:"Mingyong Chen"}}}, bson.E{Key:"age", Value:bson.D{bson.E{Key:"$eq", Value:18}}}}
query.BsonBuilder().Eq("name", "Mingyong Chen").Eq("age", 18).Build()
```
The builder provided by the `query` package is suitable for building composite query conditions.