# 查询条件 - $expr
## 函数构建
使用 `query` 包提供的 `Expr` 函数构建 `$expr`。
```go
// bson.D{bson.E{Key:"$expr", Value:bsonx.D("$gt", bson.A{"$spent", "$budget"})}}
result := query.Expr(bsonx.D("$gt", bson.A{"$spent", "$budget"}))
```
## 方法构建（构建器）
使用 `query.NewBuilder()` 的 `Expr` 方法构建 `$expr`。
```go
// bson.D{bson.E{Key:"$expr", Value:bsonx.D("$gt", bson.A{"$spent", "$budget"})}}
result := query.NewBuilder().
    Expr(bsonx.D("$gt", bson.A{"$spent", "$budget"})).
    Build()
```