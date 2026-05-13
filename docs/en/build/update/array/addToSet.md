# Update Document - $addToSet
## Function Build
Build `$addToSet` with the `AddToSet` function from the `update` package.
```go
// bson.D{bson.E{Key:"$addToSet", Value:bson.D{bson.E{Key:"tags", Value:"mongodb"}}}}
result := update.AddToSet("tags", "mongodb")
```
## Method Build (Builder)
Build `$addToSet` with the `AddToSet` method from `update.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$addToSet", Value:bson.D{bson.E{Key:"tags", Value:"mongodb"}}}}
result := update.NewBuilder().
    AddToSet("tags", "mongodb").
    Build()
```