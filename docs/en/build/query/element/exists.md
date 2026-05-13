# Query Condition - $exists
## Function Build
Build `$exists` with the `Exists` function from the `query` package.
```go
// bson.D{bson.E{Key:"deleted_at", Value:bson.D{bson.E{Key:"$exists", Value:false}}}}
result := query.Exists("deleted_at", false)
```
## Method Build (Builder)
Build `$exists` with the `Exists` method from `query.NewBuilder()`.
```go
// bson.D{bson.E{Key:"deleted_at", Value:bson.D{bson.E{Key:"$exists", Value:false}}}}
result := query.NewBuilder().
    Exists("deleted_at", false).
    Build()
```