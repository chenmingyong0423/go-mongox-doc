# Aggregation Expression - $last
## Function Build
Build `$last` with the `Last` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"lastName", Value:bson.D{bson.E{Key:"$last", Value:"$name"}}}}
result := aggregation.Last("lastName", "$name")
```
## Method Build (Builder)
Build `$last` with the `Last` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"lastName", Value:bson.D{bson.E{Key:"$last", Value:"$name"}}}}
result := aggregation.NewBuilder().
    Last("lastName", "$name").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### LastWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$last", Value:"$name"}}
expr := aggregation.LastWithoutKey("$name")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$last", Value:"$name"}}
expr := aggregation.NewBuilder().
    LastWithoutKey("$name").
    Build()
```

