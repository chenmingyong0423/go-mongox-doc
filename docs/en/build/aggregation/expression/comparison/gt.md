# Aggregation Expression - $gt
## Function Build
Build `$gt` with the `Gt` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"isAdult", Value:bson.D{bson.E{Key:"$gt", Value:[]interface {}{"$age", 18}}}}}
result := aggregation.Gt("isAdult", "$age", 18)
```
## Method Build (Builder)
Build `$gt` with the `Gt` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"isAdult", Value:bson.D{bson.E{Key:"$gt", Value:[]interface {}{"$age", 18}}}}}
result := aggregation.NewBuilder().
    Gt("isAdult", "$age", 18).
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### GtWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$gt", Value:[]any{"$age", 18}}}
expr := aggregation.GtWithoutKey("$age", 18)
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$gt", Value:[]any{"$age", 18}}}
expr := aggregation.NewBuilder().
    GtWithoutKey("$age", 18).
    Build()
```

