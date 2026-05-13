# Aggregation Expression - $size
## Function Build
Build `$size` with the `Size` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"tagCount", Value:bson.D{bson.E{Key:"$size", Value:"$tags"}}}}
result := aggregation.Size("tagCount", "$tags")
```
## Method Build (Builder)
Build `$size` with the `Size` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"tagCount", Value:bson.D{bson.E{Key:"$size", Value:"$tags"}}}}
result := aggregation.NewBuilder().
    Size("tagCount", "$tags").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### SizeWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$size", Value:"$tags"}}
expr := aggregation.SizeWithoutKey("$tags")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$size", Value:"$tags"}}
expr := aggregation.NewBuilder().
    SizeWithoutKey("$tags").
    Build()
```

