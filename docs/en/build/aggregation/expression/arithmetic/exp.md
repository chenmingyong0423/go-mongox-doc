# Aggregation Expression - $exp
## Function Build
Build `$exp` with the `Exp` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"result", Value:bson.D{bson.E{Key:"$exp", Value:"$power"}}}}
result := aggregation.Exp("result", "$power")
```
## Method Build (Builder)
Build `$exp` with the `Exp` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"result", Value:bson.D{bson.E{Key:"$exp", Value:"$power"}}}}
result := aggregation.NewBuilder().
    Exp("result", "$power").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### ExpWithoutKey
This variant is currently available as a builder method.

Method build (Builder):

```go
// bson.D{bson.E{Key:"$exp", Value:"$power"}}
expr := aggregation.NewBuilder().
    ExpWithoutKey("$power").
    Build()
```

