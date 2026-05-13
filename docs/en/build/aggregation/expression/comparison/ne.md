# Aggregation Expression - $ne
## Function Build
Build `$ne` with the `Ne` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"changed", Value:bson.D{bson.E{Key:"$ne", Value:[]interface {}{"$old", "$new"}}}}}
result := aggregation.Ne("changed", "$old", "$new")
```
## Method Build (Builder)
Build `$ne` with the `Ne` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"changed", Value:bson.D{bson.E{Key:"$ne", Value:[]interface {}{"$old", "$new"}}}}}
result := aggregation.NewBuilder().
    Ne("changed", "$old", "$new").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### NeWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$ne", Value:[]any{"$status", "disabled"}}}
expr := aggregation.NeWithoutKey("$status", "disabled")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$ne", Value:[]any{"$status", "disabled"}}}
expr := aggregation.NewBuilder().
    NeWithoutKey("$status", "disabled").
    Build()
```

