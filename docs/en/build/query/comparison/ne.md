# Query Condition - $ne
## Function Build
Build `$ne` with the `Ne` function from the `query` package.
```go
// bson.D{bson.E{Key:"status", Value:bson.D{bson.E{Key:"$ne", Value:"disabled"}}}}
result := query.Ne("status", "disabled")
```
## Method Build (Builder)
Build `$ne` with the `Ne` method from `query.NewBuilder()`.
```go
// bson.D{bson.E{Key:"status", Value:bson.D{bson.E{Key:"$ne", Value:"disabled"}}}}
result := query.NewBuilder().
    Ne("status", "disabled").
    Build()
```