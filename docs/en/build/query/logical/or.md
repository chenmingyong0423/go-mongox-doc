# Query Condition - $or
## Function Build
Build `$or` with the `Or` function from the `query` package.
```go
// bson.D{bson.E{Key:"$or", Value:[]any{query.Eq("role", "admin"), query.Eq("role", "owner")}}}
result := query.Or(query.Eq("role", "admin"), query.Eq("role", "owner"))
```
## Method Build (Builder)
Build `$or` with the `Or` method from `query.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$or", Value:[]any{query.Eq("role", "admin"), query.Eq("role", "owner")}}}
result := query.NewBuilder().
    Or(query.Eq("role", "admin"), query.Eq("role", "owner")).
    Build()
```