# Query Condition - $where
## Function Build
Build `$where` with the `Where` function from the `query` package.
```go
// bson.D{bson.E{Key:"$where", Value:"this.age > 18"}}
result := query.Where("this.age > 18")
```
## Method Build (Builder)
Build `$where` with the `Where` method from `query.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$where", Value:"this.age > 18"}}
result := query.NewBuilder().
    Where("this.age > 18").
    Build()
```