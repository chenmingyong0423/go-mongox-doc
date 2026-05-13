# Aggregation Expression - $divide
## Function Build
Build `$divide` with the `Divide` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"avgPrice", Value:bson.D{bson.E{Key:"$divide", Value:[]interface {}{"$total", "$count"}}}}}
result := aggregation.Divide("avgPrice", "$total", "$count")
```
## Method Build (Builder)
Build `$divide` with the `Divide` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"avgPrice", Value:bson.D{bson.E{Key:"$divide", Value:[]interface {}{"$total", "$count"}}}}}
result := aggregation.NewBuilder().
    Divide("avgPrice", "$total", "$count").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### DivideWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$divide", Value:[]any{"$total", "$count"}}}
expr := aggregation.DivideWithoutKey("$total", "$count")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$divide", Value:[]any{"$total", "$count"}}}
expr := aggregation.NewBuilder().
    DivideWithoutKey("$total", "$count").
    Build()
```

