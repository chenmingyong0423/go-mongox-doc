# Aggregation Expression - $push
## Function Build
Build `$push` with the `Push` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"names", Value:bson.D{bson.E{Key:"$push", Value:"$name"}}}}
result := aggregation.Push("names", "$name")
```
## Method Build (Builder)
Build `$push` with the `Push` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"names", Value:bson.D{bson.E{Key:"$push", Value:"$name"}}}}
result := aggregation.NewBuilder().
    Push("names", "$name").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### PushWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$push", Value:"$name"}}
expr := aggregation.PushWithoutKey("$name")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$push", Value:"$name"}}
expr := aggregation.NewBuilder().
    PushWithoutKey("$name").
    Build()
```

