# Update Document - $pull
## Function Build
Build `$pull` with the `Pull` function from the `update` package.
```go
// bson.D{bson.E{Key:"$pull", Value:bson.D{bson.E{Key:"tags", Value:"deprecated"}}}}
result := update.Pull("tags", "deprecated")
```
## Method Build (Builder)
Build `$pull` with the `Pull` method from `update.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$pull", Value:bson.D{bson.E{Key:"tags", Value:"deprecated"}}}}
result := update.NewBuilder().
    Pull("tags", "deprecated").
    Build()
```