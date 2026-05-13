# Aggregation Expression - $slice
`SliceWithPosition` builds a `$slice` expression with a starting offset.
## Function Build
Build `$slice` with the `Slice` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"topScores", Value:bson.D{bson.E{Key:"$slice", Value:[]interface {}{"$scores", 3}}}}}
result := aggregation.Slice("topScores", "$scores", 3)
```
## Method Build (Builder)
Build `$slice` with the `SliceWithPosition` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"topScores", Value:bson.D{bson.E{Key:"$slice", Value:[]interface {}{"$scores", 3}}}}}
result := aggregation.NewBuilder().
    SliceWithPosition("topScores", "$scores", 1, 3).
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### SliceWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$slice", Value:[]any{"$scores", 3}}}
expr := aggregation.SliceWithoutKey("$scores", 3)
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$slice", Value:[]any{"$scores", 3}}}
expr := aggregation.NewBuilder().
    SliceWithoutKey("$scores", 3).
    Build()
```

### SliceWithPositionWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$slice", Value:[]any{"$scores", 1, 3}}}
expr := aggregation.SliceWithPositionWithoutKey("$scores", 1, 3)
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$slice", Value:[]any{"$scores", 1, 3}}}
expr := aggregation.NewBuilder().
    SliceWithPositionWithoutKey("$scores", 1, 3).
    Build()
```

