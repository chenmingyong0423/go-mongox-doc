# Aggregation Expression - $floor
## Function Build
Build `$floor` with the `Floor` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"roundedPrice", Value:bson.D{bson.E{Key:"$floor", Value:"$price"}}}}
result := aggregation.Floor("roundedPrice", "$price")
```
## Method Build (Builder)
Build `$floor` with the `Floor` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"roundedPrice", Value:bson.D{bson.E{Key:"$floor", Value:"$price"}}}}
result := aggregation.NewBuilder().
    Floor("roundedPrice", "$price").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### FloorWithoutKey
This variant is currently available as a builder method.

Method build (Builder):

```go
// bson.D{bson.E{Key:"$floor", Value:"$price"}}
expr := aggregation.NewBuilder().
    FloorWithoutKey("$price").
    Build()
```

