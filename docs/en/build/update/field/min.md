# Update Document - $min
## Function Build
Build `$min` with the `Min` function from the `update` package.
```go
// bson.D{bson.E{Key:"$min", Value:bson.D{bson.E{Key:"low_score", Value:60}}}}
result := update.Min("low_score", 60)
```
## Method Build (Builder)
Build `$min` with the `Min` method from `update.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$min", Value:bson.D{bson.E{Key:"low_score", Value:60}}}}
result := update.NewBuilder().
    Min("low_score", 60).
    Build()
```