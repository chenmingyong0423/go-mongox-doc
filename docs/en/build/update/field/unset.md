# Update Document - $unset
## Function Build
Build `$unset` with the `Unset` function from the `update` package.
```go
// bson.D{bson.E{Key:"$unset", Value:bson.D{bson.E{Key:"temporary", Value:""}, bson.E{Key:"deprecated", Value:""}}}}
result := update.Unset("temporary", "deprecated")
```
## Method Build (Builder)
Build `$unset` with the `Unset` method from `update.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$unset", Value:bson.D{bson.E{Key:"temporary", Value:""}, bson.E{Key:"deprecated", Value:""}}}}
result := update.NewBuilder().
    Unset("temporary", "deprecated").
    Build()
```