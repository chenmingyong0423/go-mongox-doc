# Aggregation Expression - $filter
## Function Build
Build `$filter` with the `Filter` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"validScores", Value:bson.D{bson.E{Key:"$filter", Value:bson.D{bson.E{Key:"input", Value:"$scores"}, bson.E{Key:"cond", Value:bsonx.D("$gte", bson.A{"$$score", 60})}, bson.E{Key:"as", Value:"score"}}}}}}
result := aggregation.Filter("validScores", "$scores", bsonx.D("$gte", bson.A{"$$score", 60}), &aggregation.FilterOptions{As: "score"})
```
## Method Build (Builder)
Build `$filter` with the `Filter` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"validScores", Value:bson.D{bson.E{Key:"$filter", Value:bson.D{bson.E{Key:"input", Value:"$scores"}, bson.E{Key:"cond", Value:bsonx.D("$gte", bson.A{"$$score", 60})}, bson.E{Key:"as", Value:"score"}}}}}}
result := aggregation.NewBuilder().
    Filter("validScores", "$scores", bsonx.D("$gte", bson.A{"$$score", 60}), &aggregation.FilterOptions{As: "score"}).
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### FilterWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$filter", Value:bson.D{bson.E{Key:"input", Value:"$scores"}, bson.E{Key:"cond", Value:aggregation.GteWithoutKey("$$score", 60)}, bson.E{Key:"as", Value:"score"}}}}
expr := aggregation.FilterWithoutKey("$scores", aggregation.GteWithoutKey("$$score", 60), &aggregation.FilterOptions{As: "score"})
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$filter", Value:bson.D{bson.E{Key:"input", Value:"$scores"}, bson.E{Key:"cond", Value:aggregation.GteWithoutKey("$$score", 60)}, bson.E{Key:"as", Value:"score"}}}}
expr := aggregation.NewBuilder().
    FilterWithoutKey("$scores", aggregation.GteWithoutKey("$$score", 60), &aggregation.FilterOptions{As: "score"}).
    Build()
```

