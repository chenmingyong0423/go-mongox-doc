# Update Document - $inc
## Function Build
Build `$inc` with the `Inc` function from the `update` package.
```go
// bson.D{bson.E{Key:"$inc", Value:bson.D{bson.E{Key:"age", Value:1}}}}
result := update.Inc("age", 1)
```
## Method Build (Builder)
Build `$inc` with the `Inc` method from `update.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$inc", Value:bson.D{bson.E{Key:"age", Value:1}}}}
result := update.NewBuilder().
    Inc("age", 1).
    Build()
```