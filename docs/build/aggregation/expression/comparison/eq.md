# 聚合表达式 - $eq
## 函数构建
使用 `aggregation` 包提供的 `Eq` 函数构建 `$eq`。
```go
// bson.D{bson.E{Key:"sameName", Value:bson.D{bson.E{Key:"$eq", Value:[]interface {}{"$firstName", "$lastName"}}}}}
result := aggregation.Eq("sameName", "$firstName", "$lastName")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Eq` 方法构建 `$eq`。
```go
// bson.D{bson.E{Key:"sameName", Value:bson.D{bson.E{Key:"$eq", Value:[]interface {}{"$firstName", "$lastName"}}}}}
result := aggregation.NewBuilder().
    Eq("sameName", "$firstName", "$lastName").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### EqWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$eq", Value:[]any{"$status", "active"}}}
expr := aggregation.EqWithoutKey("$status", "active")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$eq", Value:[]any{"$status", "active"}}}
expr := aggregation.NewBuilder().
    EqWithoutKey("$status", "active").
    Build()
```

