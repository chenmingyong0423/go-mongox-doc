# Aggregation Expression - $toUpper
## Function Build
Build `$toUpper` with the `ToUpper` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"upperName", Value:bson.D{bson.E{Key:"$toUpper", Value:"$name"}}}}
result := aggregation.ToUpper("upperName", "$name")
```
## Method Build (Builder)
Build `$toUpper` with the `ToUpper` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"upperName", Value:bson.D{bson.E{Key:"$toUpper", Value:"$name"}}}}
result := aggregation.NewBuilder().
    ToUpper("upperName", "$name").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### ToUpperWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$toUpper", Value:"$name"}}
expr := aggregation.ToUpperWithoutKey("$name")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$toUpper", Value:"$name"}}
expr := aggregation.NewBuilder().
    ToUpperWithoutKey("$name").
    Build()
```

