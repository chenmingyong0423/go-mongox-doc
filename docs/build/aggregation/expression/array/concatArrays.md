# 聚合表达式 - $concatArrays
## 函数构建
使用 `aggregation` 包提供的 `ConcatArrays` 函数构建 `$concatArrays`。
```go
// bson.D{bson.E{Key:"allTags", Value:bson.D{bson.E{Key:"$concatArrays", Value:[]interface {}{"$tags", "$extraTags"}}}}}
result := aggregation.ConcatArrays("allTags", "$tags", "$extraTags")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `ConcatArrays` 方法构建 `$concatArrays`。
```go
// bson.D{bson.E{Key:"allTags", Value:bson.D{bson.E{Key:"$concatArrays", Value:[]interface {}{"$tags", "$extraTags"}}}}}
result := aggregation.NewBuilder().
    ConcatArrays("allTags", "$tags", "$extraTags").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### ConcatArraysWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$concatArrays", Value:[]any{"$tags", "$extraTags"}}}
expr := aggregation.ConcatArraysWithoutKey("$tags", "$extraTags")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$concatArrays", Value:[]any{"$tags", "$extraTags"}}}
expr := aggregation.NewBuilder().
    ConcatArraysWithoutKey("$tags", "$extraTags").
    Build()
```

