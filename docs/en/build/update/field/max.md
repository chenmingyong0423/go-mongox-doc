# Update Document - $max
## Function Build
Build `$max` with the `Max` function from the `update` package.
```go
// bson.D{bson.E{Key:"$max", Value:bson.D{bson.E{Key:"high_score", Value:100}}}}
result := update.Max("high_score", 100)
```
## Method Build (Builder)
Build `$max` with the `Max` method from `update.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$max", Value:bson.D{bson.E{Key:"high_score", Value:100}}}}
result := update.NewBuilder().
    Max("high_score", 100).
    Build()
```