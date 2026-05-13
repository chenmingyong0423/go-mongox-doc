# 聚合表达式 - $ne
## 函数构建
使用 `aggregation` 包提供的 `Ne` 函数构建 `$ne`。
```go
// bson.D{bson.E{Key:"changed", Value:bson.D{bson.E{Key:"$ne", Value:[]interface {}{"$old", "$new"}}}}}
result := aggregation.Ne("changed", "$old", "$new")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Ne` 方法构建 `$ne`。
```go
// bson.D{bson.E{Key:"changed", Value:bson.D{bson.E{Key:"$ne", Value:[]interface {}{"$old", "$new"}}}}}
result := aggregation.NewBuilder().
    Ne("changed", "$old", "$new").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### NeWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$ne", Value:[]any{"$status", "disabled"}}}
expr := aggregation.NeWithoutKey("$status", "disabled")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$ne", Value:[]any{"$status", "disabled"}}}
expr := aggregation.NewBuilder().
    NeWithoutKey("$status", "disabled").
    Build()
```

