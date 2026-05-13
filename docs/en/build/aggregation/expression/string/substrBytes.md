# Aggregation Expression - $substrBytes
## Function Build
Build `$substrBytes` with the `SubstrBytes` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"prefix", Value:bson.D{bson.E{Key:"$substrBytes", Value:[]interface {}{"$name", 0, 3}}}}}
result := aggregation.SubstrBytes("prefix", "$name", 0, 3)
```
## Method Build (Builder)
Build `$substrBytes` with the `SubstrBytes` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"prefix", Value:bson.D{bson.E{Key:"$substrBytes", Value:[]interface {}{"$name", 0, 3}}}}}
result := aggregation.NewBuilder().
    SubstrBytes("prefix", "$name", 0, 3).
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### SubstrBytesWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$substrBytes", Value:[]any{"$name", 0, 3}}}
expr := aggregation.SubstrBytesWithoutKey("$name", 0, 3)
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$substrBytes", Value:[]any{"$name", 0, 3}}}
expr := aggregation.NewBuilder().
    SubstrBytesWithoutKey("$name", 0, 3).
    Build()
```

