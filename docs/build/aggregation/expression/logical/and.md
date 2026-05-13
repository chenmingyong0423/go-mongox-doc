# 聚合表达式 - $and
## 函数构建
使用 `aggregation` 包提供的 `And` 函数构建 `$and`。
```go
// bson.D{bson.E{Key:"valid", Value:bson.D{bson.E{Key:"$and", Value:[]interface {}{"$isActive", "$isVerified"}}}}}
result := aggregation.And("valid", "$isActive", "$isVerified")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `And` 方法构建 `$and`。
```go
// bson.D{bson.E{Key:"valid", Value:bson.D{bson.E{Key:"$and", Value:[]interface {}{"$isActive", "$isVerified"}}}}}
result := aggregation.NewBuilder().
    And("valid", "$isActive", "$isVerified").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### AndWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$and", Value:[]any{"$isActive", "$isVerified"}}}
expr := aggregation.AndWithoutKey("$isActive", "$isVerified")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$and", Value:[]any{"$isActive", "$isVerified"}}}
expr := aggregation.NewBuilder().
    AndWithoutKey("$isActive", "$isVerified").
    Build()
```

