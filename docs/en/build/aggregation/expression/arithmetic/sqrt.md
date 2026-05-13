# Aggregation Expression - $sqrt
## Function Build
Build `$sqrt` with the `Sqrt` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"root", Value:bson.D{bson.E{Key:"$sqrt", Value:"$value"}}}}
result := aggregation.Sqrt("root", "$value")
```
## Method Build (Builder)
Build `$sqrt` with the `Sqrt` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"root", Value:bson.D{bson.E{Key:"$sqrt", Value:"$value"}}}}
result := aggregation.NewBuilder().
    Sqrt("root", "$value").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### SqrtWithoutKey
This variant is currently available as a builder method.

Method build (Builder):

```go
// bson.D{bson.E{Key:"$sqrt", Value:"$value"}}
expr := aggregation.NewBuilder().
    SqrtWithoutKey("$value").
    Build()
```

