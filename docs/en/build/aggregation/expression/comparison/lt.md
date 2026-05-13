# Aggregation Expression - $lt
## Function Build
Build `$lt` with the `Lt` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"isMinor", Value:bson.D{bson.E{Key:"$lt", Value:[]interface {}{"$age", 18}}}}}
result := aggregation.Lt("isMinor", "$age", 18)
```
## Method Build (Builder)
Build `$lt` with the `Lt` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"isMinor", Value:bson.D{bson.E{Key:"$lt", Value:[]interface {}{"$age", 18}}}}}
result := aggregation.NewBuilder().
    Lt("isMinor", "$age", 18).
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### LtWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$lt", Value:[]any{"$age", 18}}}
expr := aggregation.LtWithoutKey("$age", 18)
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$lt", Value:[]any{"$age", 18}}}
expr := aggregation.NewBuilder().
    LtWithoutKey("$age", 18).
    Build()
```

