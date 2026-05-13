# 聚合表达式 - $slice
`SliceWithPosition` 可生成带起始位置的 `$slice` 表达式。
## 函数构建
使用 `aggregation` 包提供的 `Slice` 函数构建 `$slice`。
```go
// bson.D{bson.E{Key:"topScores", Value:bson.D{bson.E{Key:"$slice", Value:[]interface {}{"$scores", 3}}}}}
result := aggregation.Slice("topScores", "$scores", 3)
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `SliceWithPosition` 方法构建 `$slice`。
```go
// bson.D{bson.E{Key:"topScores", Value:bson.D{bson.E{Key:"$slice", Value:[]interface {}{"$scores", 3}}}}}
result := aggregation.NewBuilder().
    SliceWithPosition("topScores", "$scores", 1, 3).
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### SliceWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$slice", Value:[]any{"$scores", 3}}}
expr := aggregation.SliceWithoutKey("$scores", 3)
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$slice", Value:[]any{"$scores", 3}}}
expr := aggregation.NewBuilder().
    SliceWithoutKey("$scores", 3).
    Build()
```

### SliceWithPositionWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$slice", Value:[]any{"$scores", 1, 3}}}
expr := aggregation.SliceWithPositionWithoutKey("$scores", 1, 3)
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$slice", Value:[]any{"$scores", 1, 3}}}
expr := aggregation.NewBuilder().
    SliceWithPositionWithoutKey("$scores", 1, 3).
    Build()
```

