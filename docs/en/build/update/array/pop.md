# Update Document - $pop
## Function Build
Build `$pop` with the `Pop` function from the `update` package.
```go
// bson.D{bson.E{Key:"$pop", Value:bson.D{bson.E{Key:"scores", Value:-1}}}}
result := update.Pop("scores", -1)
```
## Method Build (Builder)
Build `$pop` with the `Pop` method from `update.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$pop", Value:bson.D{bson.E{Key:"scores", Value:-1}}}}
result := update.NewBuilder().
    Pop("scores", -1).
    Build()
```