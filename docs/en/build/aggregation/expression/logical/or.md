# Aggregation Expression - $or
## Function Build
Build `$or` with the `Or` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"visible", Value:bson.D{bson.E{Key:"$or", Value:[]interface {}{"$isPublic", "$isOwner"}}}}}
result := aggregation.Or("visible", "$isPublic", "$isOwner")
```
## Method Build (Builder)
Build `$or` with the `Or` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"visible", Value:bson.D{bson.E{Key:"$or", Value:[]interface {}{"$isPublic", "$isOwner"}}}}}
result := aggregation.NewBuilder().
    Or("visible", "$isPublic", "$isOwner").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### OrWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$or", Value:[]any{"$isPublic", "$isOwner"}}}
expr := aggregation.OrWithoutKey("$isPublic", "$isOwner")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$or", Value:[]any{"$isPublic", "$isOwner"}}}
expr := aggregation.NewBuilder().
    OrWithoutKey("$isPublic", "$isOwner").
    Build()
```

