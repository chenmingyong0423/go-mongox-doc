# Aggregation Expression - $ifNull
## Function Build
Build `$ifNull` with the `IfNull` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"displayName", Value:bson.D{bson.E{Key:"$ifNull", Value:[]interface {}{"$nickname", "$name"}}}}}
result := aggregation.IfNull("displayName", "$nickname", "$name")
```
## Method Build (Builder)
Build `$ifNull` with the `IfNull` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"displayName", Value:bson.D{bson.E{Key:"$ifNull", Value:[]interface {}{"$nickname", "$name"}}}}}
result := aggregation.NewBuilder().
    IfNull("displayName", "$nickname", "$name").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### IfNullWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$ifNull", Value:[]any{"$nickname", "anonymous"}}}
expr := aggregation.IfNullWithoutKey("$nickname", "anonymous")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$ifNull", Value:[]any{"$nickname", "anonymous"}}}
expr := aggregation.NewBuilder().
    IfNullWithoutKey("$nickname", "anonymous").
    Build()
```

