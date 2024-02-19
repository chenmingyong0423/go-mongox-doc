# Query Condition - $gte
## Function Construction
Construct the `gte` query condition using the `Gte` function provided by the `query` package.
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gte", Value:18}}}}
query.Gte("age", 18)
```

## Method Construction (Builder)
Construct the `gte` query condition using the `Builder` constructor provided by the `query` package.
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gte", Value:18}}}}
 query.BsonBuilder().Gte("age", 18).Build()

// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gte", Value:18}, bson.E{Key:"$lte", Value:30}}}}
query.BsonBuilder().Gte("age", 18).Lte("age", 30).Build()
```
The constructor provided by the `query` package is suitable for constructing composite query conditions.