# Update Document - $set
## Function Build
Build `$set` with the `Set` function from the `update` package.
```go
// bson.D{bson.E{Key:"$set", Value:bson.D{bson.E{Key:"name", Value:"Mingyong Chen"}}}}
result := update.Set("name", "Mingyong Chen")
```
## Method Build (Builder)
Build `$set` with the `Set` method from `update.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$set", Value:bson.D{bson.E{Key:"name", Value:"Mingyong Chen"}}}}
result := update.NewBuilder().
    Set("name", "Mingyong Chen").
    Build()
```