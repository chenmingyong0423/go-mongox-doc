# Query Condition - $gt
## Function Build
Build the `gt` query condition using the `Gt` function provided by the `query` package.
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gt", Value:18}}}}
query.Gt("age", 18)
```

## Method Build (Builder)
Build the `gt` query condition using the `Builder` builder provided by the `query` package.
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gt", Value:18}}}}
query.NewBuilder().Gt("age", 18).Build()

// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gt", Value:18}, bson.E{Key:"$lt", Value:30}}}}
query.NewBuilder().Gt("age", 18).Lt("age", 30).Build()
```
The builder provided by the `query` package is suitable for building composite query conditions.