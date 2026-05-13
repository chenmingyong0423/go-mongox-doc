# Aggregation Expression - $log10
## Function Build
Build `$log10` with the `Log10` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"result", Value:bson.D{bson.E{Key:"$log10", Value:"$value"}}}}
result := aggregation.Log10("result", "$value")
```
## Method Build (Builder)
Build `$log10` with the `Log10` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"result", Value:bson.D{bson.E{Key:"$log10", Value:"$value"}}}}
result := aggregation.NewBuilder().
    Log10("result", "$value").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### Log10WithoutKey
This variant is currently available as a builder method.

Method build (Builder):

```go
// bson.D{bson.E{Key:"$log10", Value:"$value"}}
expr := aggregation.NewBuilder().
    Log10WithoutKey("$value").
    Build()
```

