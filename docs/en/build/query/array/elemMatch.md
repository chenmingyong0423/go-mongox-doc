# Query Condition - $elemMatch
## Function Build
Build `$elemMatch` with the `ElemMatch` function from the `query` package.
```go
// bson.D{bson.E{Key:"scores", Value:bson.D{bson.E{Key:"$elemMatch", Value:query.Gte("score", 90)}}}}
result := query.ElemMatch("scores", query.Gte("score", 90))
```
## Method Build (Builder)
Build `$elemMatch` with the `ElemMatch` method from `query.NewBuilder()`.
```go
// bson.D{bson.E{Key:"scores", Value:bson.D{bson.E{Key:"$elemMatch", Value:query.Gte("score", 90)}}}}
result := query.NewBuilder().
    ElemMatch("scores", query.Gte("score", 90)).
    Build()
```