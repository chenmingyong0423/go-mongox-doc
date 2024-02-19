# Query Condition - $eq
## Function Construction
Construct the `eq` query condition using the `Eq` function provided by the `query` package.
```go
// bson.D{bson.E{Key: "name", Value: bson.D{bson.E{Key: "$eq", Value: "Mingyong Chen"}}}}
query.Eq("name", "Mingyong Chen")
```

## Method Construction (Builder)
Construct the `eq` query condition using the `Builder` constructor provided by the `query` package.
```go
// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$eq", Value:"Mingyong Chen"}}}}
query.BsonBuilder().Eq("name", "Mingyong Chen").Build()

// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$eq", Value:"Mingyong Chen"}}}, bson.E{Key:"age", Value:bson.D{bson.E{Key:"$eq", Value:18}}}}
query.BsonBuilder().Eq("name", "Mingyong Chen").Eq("age", 18).Build()
```
The constructor provided by the `query` package is suitable for constructing composite query conditions.