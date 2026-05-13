# Update Document - $push
## Function Build
Build `$push` with the `Push` function from the `update` package.
```go
// bson.D{bson.E{Key:"$push", Value:bson.D{bson.E{Key:"tags", Value:"mongodb"}}}}
result := update.Push("tags", "mongodb")
```
## Method Build (Builder)
Build `$push` with the `Push` method from `update.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$push", Value:bson.D{bson.E{Key:"tags", Value:"mongodb"}}}}
result := update.NewBuilder().
    Push("tags", "mongodb").
    Build()
```