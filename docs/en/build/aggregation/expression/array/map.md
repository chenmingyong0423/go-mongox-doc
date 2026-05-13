# Aggregation Expression - $map
## Function Build
Build `$map` with the `Map` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"scoreLabels", Value:bson.D{bson.E{Key:"$map", Value:bson.D{bson.E{Key:"input", Value:"$scores"}, bson.E{Key:"as", Value:"score"}, bson.E{Key:"in", Value:bsonx.D("$toString", "$$score")}}}}}}
result := aggregation.Map("scoreLabels", "$scores", "score", bsonx.D("$toString", "$$score"))
```
## Method Build (Builder)
Build `$map` with the `Map` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"scoreLabels", Value:bson.D{bson.E{Key:"$map", Value:bson.D{bson.E{Key:"input", Value:"$scores"}, bson.E{Key:"as", Value:"score"}, bson.E{Key:"in", Value:bsonx.D("$toString", "$$score")}}}}}}
result := aggregation.NewBuilder().
    Map("scoreLabels", "$scores", "score", bsonx.D("$toString", "$$score")).
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### MapWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$map", Value:bson.D{bson.E{Key:"input", Value:"$scores"}, bson.E{Key:"as", Value:"score"}, bson.E{Key:"in", Value:bsonx.D("$toString", "$$score")}}}}
expr := aggregation.MapWithoutKey("$scores", "score", bsonx.D("$toString", "$$score"))
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$map", Value:bson.D{bson.E{Key:"input", Value:"$scores"}, bson.E{Key:"as", Value:"score"}, bson.E{Key:"in", Value:bsonx.D("$toString", "$$score")}}}}
expr := aggregation.NewBuilder().
    MapWithoutKey("$scores", "score", bsonx.D("$toString", "$$score")).
    Build()
```

