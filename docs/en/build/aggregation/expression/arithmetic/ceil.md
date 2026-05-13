# Aggregation Expression - $ceil
## Function Build
Build `$ceil` with the `Ceil` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"roundedPrice", Value:bson.D{bson.E{Key:"$ceil", Value:"$price"}}}}
result := aggregation.Ceil("roundedPrice", "$price")
```
## Method Build (Builder)
Build `$ceil` with the `Ceil` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"roundedPrice", Value:bson.D{bson.E{Key:"$ceil", Value:"$price"}}}}
result := aggregation.NewBuilder().
    Ceil("roundedPrice", "$price").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### CeilWithoutKey
This variant is currently available as a builder method.

Method build (Builder):

```go
// bson.D{bson.E{Key:"$ceil", Value:"$price"}}
expr := aggregation.NewBuilder().
    CeilWithoutKey("$price").
    Build()
```

