# Aggregation Expression - $first
## Function Build
Build `$first` with the `First` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"firstName", Value:bson.D{bson.E{Key:"$first", Value:"$name"}}}}
result := aggregation.First("firstName", "$name")
```
## Method Build (Builder)
Build `$first` with the `First` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"firstName", Value:bson.D{bson.E{Key:"$first", Value:"$name"}}}}
result := aggregation.NewBuilder().
    First("firstName", "$name").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### FirstWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$first", Value:"$name"}}
expr := aggregation.FirstWithoutKey("$name")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$first", Value:"$name"}}
expr := aggregation.NewBuilder().
    FirstWithoutKey("$name").
    Build()
```

