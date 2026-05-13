# Aggregation Expression - $pow
## Function Build
Build `$pow` with the `Pow` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"squared", Value:bson.D{bson.E{Key:"$pow", Value:[]interface {}{"$value", 2}}}}}
result := aggregation.Pow("squared", "$value", 2)
```
## Method Build (Builder)
Build `$pow` with the `Pow` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"squared", Value:bson.D{bson.E{Key:"$pow", Value:[]interface {}{"$value", 2}}}}}
result := aggregation.NewBuilder().
    Pow("squared", "$value", 2).
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### PowWithoutKey
This variant is currently available as a builder method.

Method build (Builder):

```go
// bson.D{bson.E{Key:"$pow", Value:[]any{"$value", 2}}}
expr := aggregation.NewBuilder().
    PowWithoutKey("$value", 2).
    Build()
```

