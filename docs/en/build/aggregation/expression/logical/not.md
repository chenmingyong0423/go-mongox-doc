# Aggregation Expression - $not
## Function Build
Build `$not` with the `Not` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"disabled", Value:bson.D{bson.E{Key:"$not", Value:"$isActive"}}}}
result := aggregation.Not("disabled", "$isActive")
```
## Method Build (Builder)
Build `$not` with the `Not` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"disabled", Value:bson.D{bson.E{Key:"$not", Value:"$isActive"}}}}
result := aggregation.NewBuilder().
    Not("disabled", "$isActive").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### NotWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$not", Value:"$isDeleted"}}
expr := aggregation.NotWithoutKey("$isDeleted")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$not", Value:"$isDeleted"}}
expr := aggregation.NewBuilder().
    NotWithoutKey("$isDeleted").
    Build()
```

