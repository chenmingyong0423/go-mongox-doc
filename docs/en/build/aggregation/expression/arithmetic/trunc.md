# Aggregation Expression - $trunc
## Function Build
Build `$trunc` with the `Trunc` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"truncated", Value:bson.D{bson.E{Key:"$trunc", Value:[]interface {}{"$price", 2}}}}}
result := aggregation.Trunc("truncated", "$price", 2)
```
## Method Build (Builder)
Build `$trunc` with the `Trunc` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"truncated", Value:bson.D{bson.E{Key:"$trunc", Value:[]interface {}{"$price", 2}}}}}
result := aggregation.NewBuilder().
    Trunc("truncated", "$price", 2).
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### TruncWithoutKey
This variant is currently available as a builder method.

Method build (Builder):

```go
// bson.D{bson.E{Key:"$trunc", Value:[]any{"$price", 2}}}
expr := aggregation.NewBuilder().
    TruncWithoutKey("$price", 2).
    Build()
```

