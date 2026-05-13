# Aggregation Expression - $max
## Function Build
Build `$max` with the `Max` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"maxScore", Value:bson.D{bson.E{Key:"$max", Value:"$score"}}}}
result := aggregation.Max("maxScore", "$score")
```
## Method Build (Builder)
Build `$max` with the `Max` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"maxScore", Value:bson.D{bson.E{Key:"$max", Value:"$score"}}}}
result := aggregation.NewBuilder().
    Max("maxScore", "$score").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### MaxWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$max", Value:"$score"}}
expr := aggregation.MaxWithoutKey("$score")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$max", Value:"$score"}}
expr := aggregation.NewBuilder().
    MaxWithoutKey("$score").
    Build()
```

