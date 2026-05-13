# 聚合表达式 - $arrayElemAt
## 函数构建
使用 `aggregation` 包提供的 `ArrayElemAt` 函数构建 `$arrayElemAt`。
```go
// bson.D{bson.E{Key:"firstTag", Value:bson.D{bson.E{Key:"$arrayElemAt", Value:[]interface {}{"$tags", 0}}}}}
result := aggregation.ArrayElemAt("firstTag", "$tags", 0)
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `ArrayElemAt` 方法构建 `$arrayElemAt`。
```go
// bson.D{bson.E{Key:"firstTag", Value:bson.D{bson.E{Key:"$arrayElemAt", Value:[]interface {}{"$tags", 0}}}}}
result := aggregation.NewBuilder().
    ArrayElemAt("firstTag", "$tags", 0).
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### ArrayElemAtWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$arrayElemAt", Value:[]any{"$tags", 0}}}
expr := aggregation.ArrayElemAtWithoutKey("$tags", 0)
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$arrayElemAt", Value:[]any{"$tags", 0}}}
expr := aggregation.NewBuilder().
    ArrayElemAtWithoutKey("$tags", 0).
    Build()
```

