# Aggregation Expression - $dateToString
## Function Build
Build `$dateToString` with the `DateToString` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"dateText", Value:bson.D{bson.E{Key:"$dateToString", Value:bson.D{bson.E{Key:"date", Value:"$created_at"}, bson.E{Key:"format", Value:"%Y-%m-%d"}}}}}}
result := aggregation.DateToString("dateText", "$created_at", &aggregation.DateToStringOptions{Format: "%Y-%m-%d"})
```
## Method Build (Builder)
Build `$dateToString` with the `DateToString` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"dateText", Value:bson.D{bson.E{Key:"$dateToString", Value:bson.D{bson.E{Key:"date", Value:"$created_at"}, bson.E{Key:"format", Value:"%Y-%m-%d"}}}}}}
result := aggregation.NewBuilder().
    DateToString("dateText", "$created_at", &aggregation.DateToStringOptions{Format: "%Y-%m-%d"}).
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### DateToStringWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$dateToString", Value:bson.D{bson.E{Key:"date", Value:"$created_at"}, bson.E{Key:"format", Value:"%Y-%m-%d"}}}}
expr := aggregation.DateToStringWithoutKey("$created_at", &aggregation.DateToStringOptions{Format: "%Y-%m-%d"})
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$dateToString", Value:bson.D{bson.E{Key:"date", Value:"$created_at"}, bson.E{Key:"format", Value:"%Y-%m-%d"}}}}
expr := aggregation.NewBuilder().
    DateToStringWithoutKey("$created_at", &aggregation.DateToStringOptions{Format: "%Y-%m-%d"}).
    Build()
```

