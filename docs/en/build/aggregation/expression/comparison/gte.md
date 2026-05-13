# Aggregation Expression - $gte
## Function Build
Build `$gte` with the `Gte` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"isAdult", Value:bson.D{bson.E{Key:"$gte", Value:[]interface {}{"$age", 18}}}}}
result := aggregation.Gte("isAdult", "$age", 18)
```
## Method Build (Builder)
Build `$gte` with the `Gte` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"isAdult", Value:bson.D{bson.E{Key:"$gte", Value:[]interface {}{"$age", 18}}}}}
result := aggregation.NewBuilder().
    Gte("isAdult", "$age", 18).
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### GteWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$gte", Value:[]any{"$age", 18}}}
expr := aggregation.GteWithoutKey("$age", 18)
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$gte", Value:[]any{"$age", 18}}}
expr := aggregation.NewBuilder().
    GteWithoutKey("$age", 18).
    Build()
```

