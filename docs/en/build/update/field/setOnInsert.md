# Update Document - $setOnInsert
## Function Build
Build `$setOnInsert` with the `SetOnInsert` function from the `update` package.
```go
// bson.D{bson.E{Key:"$setOnInsert", Value:bson.D{bson.E{Key:"created_at", Value:time.Now()}}}}
result := update.SetOnInsert("created_at", time.Now())
```
## Method Build (Builder)
Build `$setOnInsert` with the `SetOnInsert` method from `update.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$setOnInsert", Value:bson.D{bson.E{Key:"created_at", Value:time.Now()}}}}
result := update.NewBuilder().
    SetOnInsert("created_at", time.Now()).
    Build()
```