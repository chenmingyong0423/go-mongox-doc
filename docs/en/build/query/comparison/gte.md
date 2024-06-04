# Query Condition - $gte
## Function Build
Build the `gte` query condition using the `Gte` function provided by the `query` package.
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gte", Value:18}}}}
query.Gte("age", 18)
```

## Method Build (Builder)
Build the `gte` query condition using the `Builder` builder provided by the `query` package.
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gte", Value:18}}}}
 query.NewBuilder().Gte("age", 18).Build()

// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gte", Value:18}, bson.E{Key:"$lte", Value:30}}}}
query.NewBuilder().Gte("age", 18).Lte("age", 30).Build()
```
The builder provided by the `query` package is suitable for building composite query conditions.