# 聚合表达式 - $push
## 函数构建
使用 `aggregation` 包提供的 `Push` 函数构建 `$push`。
```go
// bson.D{bson.E{Key:"names", Value:bson.D{bson.E{Key:"$push", Value:"$name"}}}}
result := aggregation.Push("names", "$name")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Push` 方法构建 `$push`。
```go
// bson.D{bson.E{Key:"names", Value:bson.D{bson.E{Key:"$push", Value:"$name"}}}}
result := aggregation.NewBuilder().
    Push("names", "$name").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### PushWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$push", Value:"$name"}}
expr := aggregation.PushWithoutKey("$name")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$push", Value:"$name"}}
expr := aggregation.NewBuilder().
    PushWithoutKey("$name").
    Build()
```

