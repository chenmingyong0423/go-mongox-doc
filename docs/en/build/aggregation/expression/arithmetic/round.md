# Aggregation Expression - $round
## Function Build
Build `$round` with the `Round` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"rounded", Value:bson.D{bson.E{Key:"$round", Value:[]interface {}{"$price", 2}}}}}
result := aggregation.Round("rounded", "$price", 2)
```
## Method Build (Builder)
Build `$round` with the `Round` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"rounded", Value:bson.D{bson.E{Key:"$round", Value:[]interface {}{"$price", 2}}}}}
result := aggregation.NewBuilder().
    Round("rounded", "$price", 2).
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### RoundWithoutKey
This variant is currently available as a builder method.

Method build (Builder):

```go
// bson.D{bson.E{Key:"$round", Value:[]any{"$price", 2}}}
expr := aggregation.NewBuilder().
    RoundWithoutKey("$price", 2).
    Build()
```

