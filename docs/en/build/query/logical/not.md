# Query Condition - $not
## Function Build
Build `$not` with the `Not` function from the `query` package.
```go
// bson.D{bson.E{Key:"$not", Value:query.Regex("name", "^tmp")}}
result := query.Not(query.Regex("name", "^tmp"))
```
## Method Build (Builder)
Build `$not` with the `Not` method from `query.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$not", Value:query.Regex("name", "^tmp")}}
result := query.NewBuilder().
    Not(query.Regex("name", "^tmp")).
    Build()
```