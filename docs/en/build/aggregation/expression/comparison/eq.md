# Aggregation Expression - $eq
## Function Build
Build `$eq` with the `Eq` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"sameName", Value:bson.D{bson.E{Key:"$eq", Value:[]interface {}{"$firstName", "$lastName"}}}}}
result := aggregation.Eq("sameName", "$firstName", "$lastName")
```
## Method Build (Builder)
Build `$eq` with the `Eq` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"sameName", Value:bson.D{bson.E{Key:"$eq", Value:[]interface {}{"$firstName", "$lastName"}}}}}
result := aggregation.NewBuilder().
    Eq("sameName", "$firstName", "$lastName").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### EqWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$eq", Value:[]any{"$status", "active"}}}
expr := aggregation.EqWithoutKey("$status", "active")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$eq", Value:[]any{"$status", "active"}}}
expr := aggregation.NewBuilder().
    EqWithoutKey("$status", "active").
    Build()
```

