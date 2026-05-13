# 聚合表达式 - $map
## 函数构建
使用 `aggregation` 包提供的 `Map` 函数构建 `$map`。
```go
// bson.D{bson.E{Key:"scoreLabels", Value:bson.D{bson.E{Key:"$map", Value:bson.D{bson.E{Key:"input", Value:"$scores"}, bson.E{Key:"as", Value:"score"}, bson.E{Key:"in", Value:bsonx.D("$toString", "$$score")}}}}}}
result := aggregation.Map("scoreLabels", "$scores", "score", bsonx.D("$toString", "$$score"))
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Map` 方法构建 `$map`。
```go
// bson.D{bson.E{Key:"scoreLabels", Value:bson.D{bson.E{Key:"$map", Value:bson.D{bson.E{Key:"input", Value:"$scores"}, bson.E{Key:"as", Value:"score"}, bson.E{Key:"in", Value:bsonx.D("$toString", "$$score")}}}}}}
result := aggregation.NewBuilder().
    Map("scoreLabels", "$scores", "score", bsonx.D("$toString", "$$score")).
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### MapWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$map", Value:bson.D{bson.E{Key:"input", Value:"$scores"}, bson.E{Key:"as", Value:"score"}, bson.E{Key:"in", Value:bsonx.D("$toString", "$$score")}}}}
expr := aggregation.MapWithoutKey("$scores", "score", bsonx.D("$toString", "$$score"))
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$map", Value:bson.D{bson.E{Key:"input", Value:"$scores"}, bson.E{Key:"as", Value:"score"}, bson.E{Key:"in", Value:bsonx.D("$toString", "$$score")}}}}
expr := aggregation.NewBuilder().
    MapWithoutKey("$scores", "score", bsonx.D("$toString", "$$score")).
    Build()
```

