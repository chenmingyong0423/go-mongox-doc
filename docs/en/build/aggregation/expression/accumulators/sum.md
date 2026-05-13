# Aggregation Expression - $sum
## Function Build
Build `$sum` with the `Sum` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"total", Value:bson.D{bson.E{Key:"$sum", Value:"$amount"}}}}
result := aggregation.Sum("total", "$amount")
```
## Method Build (Builder)
Build `$sum` with the `Sum` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"total", Value:bson.D{bson.E{Key:"$sum", Value:"$amount"}}}}
result := aggregation.NewBuilder().
    Sum("total", "$amount").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### SumWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$sum", Value:"$amount"}}
expr := aggregation.SumWithoutKey("$amount")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$sum", Value:"$amount"}}
expr := aggregation.NewBuilder().
    SumWithoutKey("$amount").
    Build()
```

