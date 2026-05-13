# 聚合表达式 - $or
## 函数构建
使用 `aggregation` 包提供的 `Or` 函数构建 `$or`。
```go
// bson.D{bson.E{Key:"visible", Value:bson.D{bson.E{Key:"$or", Value:[]interface {}{"$isPublic", "$isOwner"}}}}}
result := aggregation.Or("visible", "$isPublic", "$isOwner")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Or` 方法构建 `$or`。
```go
// bson.D{bson.E{Key:"visible", Value:bson.D{bson.E{Key:"$or", Value:[]interface {}{"$isPublic", "$isOwner"}}}}}
result := aggregation.NewBuilder().
    Or("visible", "$isPublic", "$isOwner").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### OrWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$or", Value:[]any{"$isPublic", "$isOwner"}}}
expr := aggregation.OrWithoutKey("$isPublic", "$isOwner")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$or", Value:[]any{"$isPublic", "$isOwner"}}}
expr := aggregation.NewBuilder().
    OrWithoutKey("$isPublic", "$isOwner").
    Build()
```

