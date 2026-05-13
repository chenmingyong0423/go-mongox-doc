# Query Condition - $mod
## Function Build
Build `$mod` with the `Mod` function from the `query` package.
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$mod", Value:bson.A{5, 0}}}}}
result := query.Mod("age", 5, 0)
```
## Method Build (Builder)
Build `$mod` with the `Mod` method from `query.NewBuilder()`.
```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$mod", Value:bson.A{5, 0}}}}}
result := query.NewBuilder().
    Mod("age", 5, 0).
    Build()
```