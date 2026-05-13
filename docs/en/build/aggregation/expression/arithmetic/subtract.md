# Aggregation Expression - $subtract
## Function Build
Build `$subtract` with the `Subtract` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"delta", Value:bson.D{bson.E{Key:"$subtract", Value:[]interface {}{"$end", "$start"}}}}}
result := aggregation.Subtract("delta", "$end", "$start")
```
## Method Build (Builder)
Build `$subtract` with the `Subtract` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"delta", Value:bson.D{bson.E{Key:"$subtract", Value:[]interface {}{"$end", "$start"}}}}}
result := aggregation.NewBuilder().
    Subtract("delta", "$end", "$start").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### SubtractWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$subtract", Value:[]any{"$end", "$start"}}}
expr := aggregation.SubtractWithoutKey("$end", "$start")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$subtract", Value:[]any{"$end", "$start"}}}
expr := aggregation.NewBuilder().
    SubtractWithoutKey("$end", "$start").
    Build()
```

