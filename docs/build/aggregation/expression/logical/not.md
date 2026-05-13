# 聚合表达式 - $not
## 函数构建
使用 `aggregation` 包提供的 `Not` 函数构建 `$not`。
```go
// bson.D{bson.E{Key:"disabled", Value:bson.D{bson.E{Key:"$not", Value:"$isActive"}}}}
result := aggregation.Not("disabled", "$isActive")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Not` 方法构建 `$not`。
```go
// bson.D{bson.E{Key:"disabled", Value:bson.D{bson.E{Key:"$not", Value:"$isActive"}}}}
result := aggregation.NewBuilder().
    Not("disabled", "$isActive").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### NotWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$not", Value:"$isDeleted"}}
expr := aggregation.NotWithoutKey("$isDeleted")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$not", Value:"$isDeleted"}}
expr := aggregation.NewBuilder().
    NotWithoutKey("$isDeleted").
    Build()
```

