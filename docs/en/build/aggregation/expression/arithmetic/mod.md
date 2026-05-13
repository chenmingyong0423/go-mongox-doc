# Aggregation Expression - $mod
## Function Build
Build `$mod` with the `Mod` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"remainder", Value:bson.D{bson.E{Key:"$mod", Value:[]interface {}{"$age", 5}}}}}
result := aggregation.Mod("remainder", "$age", 5)
```
## Method Build (Builder)
Build `$mod` with the `Mod` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"remainder", Value:bson.D{bson.E{Key:"$mod", Value:[]interface {}{"$age", 5}}}}}
result := aggregation.NewBuilder().
    Mod("remainder", "$age", 5).
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### ModWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$mod", Value:[]any{"$age", 5}}}
expr := aggregation.ModWithoutKey("$age", 5)
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$mod", Value:[]any{"$age", 5}}}
expr := aggregation.NewBuilder().
    ModWithoutKey("$age", 5).
    Build()
```

