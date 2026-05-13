# Update Document - SetFields
## Function Build
Build `SetFields` with the `SetFields` function from the `update` package.
```go
// bson.D{bson.E{Key:"$set", Value:user}}
result := update.SetFields(user)
```
## Method Build (Builder)
Build `SetFields` with the `SetFields` method from `update.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$set", Value:user}}
result := update.NewBuilder().
    SetFields(user).
    Build()
```