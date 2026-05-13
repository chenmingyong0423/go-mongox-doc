# Query Condition - $expr
## Function Build
Build `$expr` with the `Expr` function from the `query` package.
```go
// bson.D{bson.E{Key:"$expr", Value:bsonx.D("$gt", bson.A{"$spent", "$budget"})}}
result := query.Expr(bsonx.D("$gt", bson.A{"$spent", "$budget"}))
```
## Method Build (Builder)
Build `$expr` with the `Expr` method from `query.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$expr", Value:bsonx.D("$gt", bson.A{"$spent", "$budget"})}}
result := query.NewBuilder().
    Expr(bsonx.D("$gt", bson.A{"$spent", "$budget"})).
    Build()
```