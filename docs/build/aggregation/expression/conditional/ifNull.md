# 聚合表达式 - $ifNull
## 函数构建
使用 `aggregation` 包提供的 `IfNull` 函数构建 `$ifNull`。
```go
// bson.D{bson.E{Key:"displayName", Value:bson.D{bson.E{Key:"$ifNull", Value:[]interface {}{"$nickname", "$name"}}}}}
result := aggregation.IfNull("displayName", "$nickname", "$name")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `IfNull` 方法构建 `$ifNull`。
```go
// bson.D{bson.E{Key:"displayName", Value:bson.D{bson.E{Key:"$ifNull", Value:[]interface {}{"$nickname", "$name"}}}}}
result := aggregation.NewBuilder().
    IfNull("displayName", "$nickname", "$name").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### IfNullWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$ifNull", Value:[]any{"$nickname", "anonymous"}}}
expr := aggregation.IfNullWithoutKey("$nickname", "anonymous")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$ifNull", Value:[]any{"$nickname", "anonymous"}}}
expr := aggregation.NewBuilder().
    IfNullWithoutKey("$nickname", "anonymous").
    Build()
```

