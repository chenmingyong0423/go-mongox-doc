# Query Condition - $and
## Function Build
Build `$and` with the `And` function from the `query` package.
```go
// bson.D{bson.E{Key:"$and", Value:[]any{query.Eq("status", "active"), query.Gte("age", 18)}}}
result := query.And(query.Eq("status", "active"), query.Gte("age", 18))
```
## Method Build (Builder)
Build `$and` with the `And` method from `query.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$and", Value:[]any{query.Eq("status", "active"), query.Gte("age", 18)}}}
result := query.NewBuilder().
    And(query.Eq("status", "active"), query.Gte("age", 18)).
    Build()
```