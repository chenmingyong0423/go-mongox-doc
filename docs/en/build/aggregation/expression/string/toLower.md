# Aggregation Expression - $toLower
## Function Build
Build `$toLower` with the `ToLower` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"lowerName", Value:bson.D{bson.E{Key:"$toLower", Value:"$name"}}}}
result := aggregation.ToLower("lowerName", "$name")
```
## Method Build (Builder)
Build `$toLower` with the `ToLower` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"lowerName", Value:bson.D{bson.E{Key:"$toLower", Value:"$name"}}}}
result := aggregation.NewBuilder().
    ToLower("lowerName", "$name").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### ToLowerWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$toLower", Value:"$name"}}
expr := aggregation.ToLowerWithoutKey("$name")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$toLower", Value:"$name"}}
expr := aggregation.NewBuilder().
    ToLowerWithoutKey("$name").
    Build()
```

