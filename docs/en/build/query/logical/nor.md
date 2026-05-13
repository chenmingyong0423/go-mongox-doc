# Query Condition - $nor
## Function Build
Build `$nor` with the `Nor` function from the `query` package.
```go
// bson.D{bson.E{Key:"$nor", Value:[]any{query.Eq("status", "deleted"), query.Lt("age", 18)}}}
result := query.Nor(query.Eq("status", "deleted"), query.Lt("age", 18))
```
## Method Build (Builder)
Build `$nor` with the `Nor` method from `query.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$nor", Value:[]any{query.Eq("status", "deleted"), query.Lt("age", 18)}}}
result := query.NewBuilder().
    Nor(query.Eq("status", "deleted"), query.Lt("age", 18)).
    Build()
```