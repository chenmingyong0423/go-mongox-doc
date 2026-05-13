# Aggregation Expression - $multiply
## Function Build
Build `$multiply` with the `Multiply` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"amount", Value:bson.D{bson.E{Key:"$multiply", Value:[]interface {}{"$price", "$quantity"}}}}}
result := aggregation.Multiply("amount", "$price", "$quantity")
```
## Method Build (Builder)
Build `$multiply` with the `Multiply` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"amount", Value:bson.D{bson.E{Key:"$multiply", Value:[]interface {}{"$price", "$quantity"}}}}}
result := aggregation.NewBuilder().
    Multiply("amount", "$price", "$quantity").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### MultiplyWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$multiply", Value:[]any{"$price", "$quantity"}}}
expr := aggregation.MultiplyWithoutKey("$price", "$quantity")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$multiply", Value:[]any{"$price", "$quantity"}}}
expr := aggregation.NewBuilder().
    MultiplyWithoutKey("$price", "$quantity").
    Build()
```

