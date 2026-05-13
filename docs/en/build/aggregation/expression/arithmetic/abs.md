# Aggregation Expression - $abs
## Function Build
Build `$abs` with the `Abs` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"absoluteDelta", Value:bson.D{bson.E{Key:"$abs", Value:"$delta"}}}}
result := aggregation.Abs("absoluteDelta", "$delta")
```
## Method Build (Builder)
Build `$abs` with the `Abs` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"absoluteDelta", Value:bson.D{bson.E{Key:"$abs", Value:"$delta"}}}}
result := aggregation.NewBuilder().
    Abs("absoluteDelta", "$delta").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### AbsWithoutKey
This variant is currently available as a builder method.

Method build (Builder):

```go
// bson.D{bson.E{Key:"$abs", Value:"$delta"}}
expr := aggregation.NewBuilder().
    AbsWithoutKey("$delta").
    Build()
```

