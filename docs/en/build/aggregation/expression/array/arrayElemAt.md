# Aggregation Expression - $arrayElemAt
## Function Build
Build `$arrayElemAt` with the `ArrayElemAt` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"firstTag", Value:bson.D{bson.E{Key:"$arrayElemAt", Value:[]interface {}{"$tags", 0}}}}}
result := aggregation.ArrayElemAt("firstTag", "$tags", 0)
```
## Method Build (Builder)
Build `$arrayElemAt` with the `ArrayElemAt` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"firstTag", Value:bson.D{bson.E{Key:"$arrayElemAt", Value:[]interface {}{"$tags", 0}}}}}
result := aggregation.NewBuilder().
    ArrayElemAt("firstTag", "$tags", 0).
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### ArrayElemAtWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$arrayElemAt", Value:[]any{"$tags", 0}}}
expr := aggregation.ArrayElemAtWithoutKey("$tags", 0)
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$arrayElemAt", Value:[]any{"$tags", 0}}}
expr := aggregation.NewBuilder().
    ArrayElemAtWithoutKey("$tags", 0).
    Build()
```

