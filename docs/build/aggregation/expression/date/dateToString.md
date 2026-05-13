# 聚合表达式 - $dateToString
## 函数构建
使用 `aggregation` 包提供的 `DateToString` 函数构建 `$dateToString`。
```go
// bson.D{bson.E{Key:"dateText", Value:bson.D{bson.E{Key:"$dateToString", Value:bson.D{bson.E{Key:"date", Value:"$created_at"}, bson.E{Key:"format", Value:"%Y-%m-%d"}}}}}}
result := aggregation.DateToString("dateText", "$created_at", &aggregation.DateToStringOptions{Format: "%Y-%m-%d"})
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `DateToString` 方法构建 `$dateToString`。
```go
// bson.D{bson.E{Key:"dateText", Value:bson.D{bson.E{Key:"$dateToString", Value:bson.D{bson.E{Key:"date", Value:"$created_at"}, bson.E{Key:"format", Value:"%Y-%m-%d"}}}}}}
result := aggregation.NewBuilder().
    DateToString("dateText", "$created_at", &aggregation.DateToStringOptions{Format: "%Y-%m-%d"}).
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### DateToStringWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$dateToString", Value:bson.D{bson.E{Key:"date", Value:"$created_at"}, bson.E{Key:"format", Value:"%Y-%m-%d"}}}}
expr := aggregation.DateToStringWithoutKey("$created_at", &aggregation.DateToStringOptions{Format: "%Y-%m-%d"})
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$dateToString", Value:bson.D{bson.E{Key:"date", Value:"$created_at"}, bson.E{Key:"format", Value:"%Y-%m-%d"}}}}
expr := aggregation.NewBuilder().
    DateToStringWithoutKey("$created_at", &aggregation.DateToStringOptions{Format: "%Y-%m-%d"}).
    Build()
```

