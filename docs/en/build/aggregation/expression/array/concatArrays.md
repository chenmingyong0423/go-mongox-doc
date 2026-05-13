# Aggregation Expression - $concatArrays
## Function Build
Build `$concatArrays` with the `ConcatArrays` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"allTags", Value:bson.D{bson.E{Key:"$concatArrays", Value:[]interface {}{"$tags", "$extraTags"}}}}}
result := aggregation.ConcatArrays("allTags", "$tags", "$extraTags")
```
## Method Build (Builder)
Build `$concatArrays` with the `ConcatArrays` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"allTags", Value:bson.D{bson.E{Key:"$concatArrays", Value:[]interface {}{"$tags", "$extraTags"}}}}}
result := aggregation.NewBuilder().
    ConcatArrays("allTags", "$tags", "$extraTags").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### ConcatArraysWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$concatArrays", Value:[]any{"$tags", "$extraTags"}}}
expr := aggregation.ConcatArraysWithoutKey("$tags", "$extraTags")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$concatArrays", Value:[]any{"$tags", "$extraTags"}}}
expr := aggregation.NewBuilder().
    ConcatArraysWithoutKey("$tags", "$extraTags").
    Build()
```

