# Aggregation Expression - $ln
## Function Build
Build `$ln` with the `Ln` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"result", Value:bson.D{bson.E{Key:"$ln", Value:"$value"}}}}
result := aggregation.Ln("result", "$value")
```
## Method Build (Builder)
Build `$ln` with the `Ln` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"result", Value:bson.D{bson.E{Key:"$ln", Value:"$value"}}}}
result := aggregation.NewBuilder().
    Ln("result", "$value").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### LnWithoutKey
This variant is currently available as a builder method.

Method build (Builder):

```go
// bson.D{bson.E{Key:"$ln", Value:"$value"}}
expr := aggregation.NewBuilder().
    LnWithoutKey("$value").
    Build()
```

