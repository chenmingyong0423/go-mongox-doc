# Aggregation Expression - $add
## Function Build
Build `$add` with the `Add` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"total", Value:bson.D{bson.E{Key:"$add", Value:[]interface {}{"$price", "$fee"}}}}}
result := aggregation.Add("total", "$price", "$fee")
```
## Method Build (Builder)
Build `$add` with the `Add` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"total", Value:bson.D{bson.E{Key:"$add", Value:[]interface {}{"$price", "$fee"}}}}}
result := aggregation.NewBuilder().
    Add("total", "$price", "$fee").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### AddWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$add", Value:[]any{"$price", "$fee"}}}
expr := aggregation.AddWithoutKey("$price", "$fee")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$add", Value:[]any{"$price", "$fee"}}}
expr := aggregation.NewBuilder().
    AddWithoutKey("$price", "$fee").
    Build()
```

