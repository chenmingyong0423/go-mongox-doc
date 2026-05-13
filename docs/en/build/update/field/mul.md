# Update Document - $mul
## Function Build
Build `$mul` with the `Mul` function from the `update` package.
```go
// bson.D{bson.E{Key:"$mul", Value:bson.D{bson.E{Key:"price", Value:1.1}}}}
result := update.Mul("price", 1.1)
```
## Method Build (Builder)
Build `$mul` with the `Mul` method from `update.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$mul", Value:bson.D{bson.E{Key:"price", Value:1.1}}}}
result := update.NewBuilder().
    Mul("price", 1.1).
    Build()
```