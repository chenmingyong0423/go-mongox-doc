# Update Document - $rename
## Function Build
Build `$rename` with the `Rename` function from the `update` package.
```go
// bson.D{bson.E{Key:"$rename", Value:bson.D{bson.E{Key:"nickname", Value:"display_name"}}}}
result := update.Rename("nickname", "display_name")
```
## Method Build (Builder)
Build `$rename` with the `Rename` method from `update.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$rename", Value:bson.D{bson.E{Key:"nickname", Value:"display_name"}}}}
result := update.NewBuilder().
    Rename("nickname", "display_name").
    Build()
```