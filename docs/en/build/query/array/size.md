# Query Condition - $size
## Function Build
Build `$size` with the `Size` function from the `query` package.
```go
// bson.D{bson.E{Key:"tags", Value:bson.D{bson.E{Key:"$size", Value:3}}}}
result := query.Size("tags", 3)
```
## Method Build (Builder)
Build `$size` with the `Size` method from `query.NewBuilder()`.
```go
// bson.D{bson.E{Key:"tags", Value:bson.D{bson.E{Key:"$size", Value:3}}}}
result := query.NewBuilder().
    Size("tags", 3).
    Build()
```