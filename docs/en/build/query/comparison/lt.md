# Query Condition - $lt
## Function Build
Build `$lt` with the `Lt` function from the `query` package.
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$lt", Value:60}}}}
result := query.Lt("age", 60)
```
## Method Build (Builder)
Build `$lt` with the `Lt` method from `query.NewBuilder()`.
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$lt", Value:60}}}}
result := query.NewBuilder().
    Lt("age", 60).
    Build()
```