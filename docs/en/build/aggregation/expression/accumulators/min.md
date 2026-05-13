# Aggregation Expression - $min
## Function Build
Build `$min` with the `Min` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"minScore", Value:bson.D{bson.E{Key:"$min", Value:"$score"}}}}
result := aggregation.Min("minScore", "$score")
```
## Method Build (Builder)
Build `$min` with the `Min` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"minScore", Value:bson.D{bson.E{Key:"$min", Value:"$score"}}}}
result := aggregation.NewBuilder().
    Min("minScore", "$score").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### MinWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$min", Value:"$score"}}
expr := aggregation.MinWithoutKey("$score")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$min", Value:"$score"}}
expr := aggregation.NewBuilder().
    MinWithoutKey("$score").
    Build()
```

