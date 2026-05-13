# Aggregation Expression - $and
## Function Build
Build `$and` with the `And` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"valid", Value:bson.D{bson.E{Key:"$and", Value:[]interface {}{"$isActive", "$isVerified"}}}}}
result := aggregation.And("valid", "$isActive", "$isVerified")
```
## Method Build (Builder)
Build `$and` with the `And` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"valid", Value:bson.D{bson.E{Key:"$and", Value:[]interface {}{"$isActive", "$isVerified"}}}}}
result := aggregation.NewBuilder().
    And("valid", "$isActive", "$isVerified").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### AndWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$and", Value:[]any{"$isActive", "$isVerified"}}}
expr := aggregation.AndWithoutKey("$isActive", "$isVerified")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$and", Value:[]any{"$isActive", "$isVerified"}}}
expr := aggregation.NewBuilder().
    AndWithoutKey("$isActive", "$isVerified").
    Build()
```

