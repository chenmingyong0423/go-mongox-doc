# Query Condition - $gt
## Function Construction
Construct the `gt` query condition using the `Gt` function provided by the `query` package.
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gt", Value:18}}}}
query.Gt("age", 18)
```

## Method Construction (Builder)
Construct the `gt` query condition using the `Builder` constructor provided by the `query` package.
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gt", Value:18}}}}
query.BsonBuilder().Gt("age", 18).Build()

// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gt", Value:18}, bson.E{Key:"$lt", Value:30}}}}
query.BsonBuilder().Gt("age", 18).Lt("age", 30).Build()
```
The constructor provided by the `query` package is suitable for constructing composite query conditions.