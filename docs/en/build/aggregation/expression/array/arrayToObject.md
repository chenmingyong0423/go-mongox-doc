# Aggregation Expression - $arrayToObject
## Function Build
Build `$arrayToObject` with the `ArrayToObject` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"attrs", Value:bson.D{bson.E{Key:"$arrayToObject", Value:"$pairs"}}}}
result := aggregation.ArrayToObject("attrs", "$pairs")
```
## Method Build (Builder)
Build `$arrayToObject` with the `ArrayToObject` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"attrs", Value:bson.D{bson.E{Key:"$arrayToObject", Value:"$pairs"}}}}
result := aggregation.NewBuilder().
    ArrayToObject("attrs", "$pairs").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### ArrayToObjectWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$arrayToObject", Value:"$pairs"}}
expr := aggregation.ArrayToObjectWithoutKey("$pairs")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$arrayToObject", Value:"$pairs"}}
expr := aggregation.NewBuilder().
    ArrayToObjectWithoutKey("$pairs").
    Build()
```

