# 查询条件 - $elemMatch
## 函数构建
使用 `query` 包提供的 `ElemMatch` 函数构建 `$elemMatch`。
```go
// bson.D{bson.E{Key:"scores", Value:bson.D{bson.E{Key:"$elemMatch", Value:query.Gte("score", 90)}}}}
result := query.ElemMatch("scores", query.Gte("score", 90))
```
## 方法构建（构建器）
使用 `query.NewBuilder()` 的 `ElemMatch` 方法构建 `$elemMatch`。
```go
// bson.D{bson.E{Key:"scores", Value:bson.D{bson.E{Key:"$elemMatch", Value:query.Gte("score", 90)}}}}
result := query.NewBuilder().
    ElemMatch("scores", query.Gte("score", 90)).
    Build()
```