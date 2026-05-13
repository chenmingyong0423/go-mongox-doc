# 聚合表达式 - $filter
## 函数构建
使用 `aggregation` 包提供的 `Filter` 函数构建 `$filter`。
```go
// bson.D{bson.E{Key:"validScores", Value:bson.D{bson.E{Key:"$filter", Value:bson.D{bson.E{Key:"input", Value:"$scores"}, bson.E{Key:"cond", Value:bsonx.D("$gte", bson.A{"$$score", 60})}, bson.E{Key:"as", Value:"score"}}}}}}
result := aggregation.Filter("validScores", "$scores", bsonx.D("$gte", bson.A{"$$score", 60}), &aggregation.FilterOptions{As: "score"})
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Filter` 方法构建 `$filter`。
```go
// bson.D{bson.E{Key:"validScores", Value:bson.D{bson.E{Key:"$filter", Value:bson.D{bson.E{Key:"input", Value:"$scores"}, bson.E{Key:"cond", Value:bsonx.D("$gte", bson.A{"$$score", 60})}, bson.E{Key:"as", Value:"score"}}}}}}
result := aggregation.NewBuilder().
    Filter("validScores", "$scores", bsonx.D("$gte", bson.A{"$$score", 60}), &aggregation.FilterOptions{As: "score"}).
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### FilterWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$filter", Value:bson.D{bson.E{Key:"input", Value:"$scores"}, bson.E{Key:"cond", Value:aggregation.GteWithoutKey("$$score", 60)}, bson.E{Key:"as", Value:"score"}}}}
expr := aggregation.FilterWithoutKey("$scores", aggregation.GteWithoutKey("$$score", 60), &aggregation.FilterOptions{As: "score"})
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$filter", Value:bson.D{bson.E{Key:"input", Value:"$scores"}, bson.E{Key:"cond", Value:aggregation.GteWithoutKey("$$score", 60)}, bson.E{Key:"as", Value:"score"}}}}
expr := aggregation.NewBuilder().
    FilterWithoutKey("$scores", aggregation.GteWithoutKey("$$score", 60), &aggregation.FilterOptions{As: "score"}).
    Build()
```

