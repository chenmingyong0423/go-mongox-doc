# Query Condition - $lte
## Function Build
Build `$lte` with the `Lte` function from the `query` package.
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$lte", Value:60}}}}
result := query.Lte("age", 60)
```
## Method Build (Builder)
Build `$lte` with the `Lte` method from `query.NewBuilder()`.
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$lte", Value:60}}}}
result := query.NewBuilder().
    Lte("age", 60).
    Build()
```