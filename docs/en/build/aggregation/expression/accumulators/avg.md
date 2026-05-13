# Aggregation Expression - $avg
## Function Build
Build `$avg` with the `Avg` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"avgScore", Value:bson.D{bson.E{Key:"$avg", Value:"$score"}}}}
result := aggregation.Avg("avgScore", "$score")
```
## Method Build (Builder)
Build `$avg` with the `Avg` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"avgScore", Value:bson.D{bson.E{Key:"$avg", Value:"$score"}}}}
result := aggregation.NewBuilder().
    Avg("avgScore", "$score").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### AvgWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$avg", Value:"$score"}}
expr := aggregation.AvgWithoutKey("$score")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$avg", Value:"$score"}}
expr := aggregation.NewBuilder().
    AvgWithoutKey("$score").
    Build()
```

