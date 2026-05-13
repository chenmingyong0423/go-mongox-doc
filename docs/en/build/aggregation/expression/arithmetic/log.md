# Aggregation Expression - $log
## Function Build
Build `$log` with the `Log` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"result", Value:bson.D{bson.E{Key:"$log", Value:[]interface {}{"$value", 10}}}}}
result := aggregation.Log("result", "$value", 10)
```
## Method Build (Builder)
Build `$log` with the `Log` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"result", Value:bson.D{bson.E{Key:"$log", Value:[]interface {}{"$value", 10}}}}}
result := aggregation.NewBuilder().
    Log("result", "$value", 10).
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### LogWithoutKey
This variant is currently available as a builder method.

Method build (Builder):

```go
// bson.D{bson.E{Key:"$log", Value:[]any{"$value", 10}}}
expr := aggregation.NewBuilder().
    LogWithoutKey("$value", 10).
    Build()
```

