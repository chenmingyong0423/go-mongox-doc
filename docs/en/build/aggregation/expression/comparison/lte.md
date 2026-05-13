# Aggregation Expression - $lte
## Function Build
Build `$lte` with the `Lte` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"inLimit", Value:bson.D{bson.E{Key:"$lte", Value:[]interface {}{"$quantity", 10}}}}}
result := aggregation.Lte("inLimit", "$quantity", 10)
```
## Method Build (Builder)
Build `$lte` with the `Lte` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"inLimit", Value:bson.D{bson.E{Key:"$lte", Value:[]interface {}{"$quantity", 10}}}}}
result := aggregation.NewBuilder().
    Lte("inLimit", "$quantity", 10).
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### LteWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$lte", Value:[]any{"$quantity", 10}}}
expr := aggregation.LteWithoutKey("$quantity", 10)
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$lte", Value:[]any{"$quantity", 10}}}
expr := aggregation.NewBuilder().
    LteWithoutKey("$quantity", 10).
    Build()
```

