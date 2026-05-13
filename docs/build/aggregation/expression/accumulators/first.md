# 聚合表达式 - $first
## 函数构建
使用 `aggregation` 包提供的 `First` 函数构建 `$first`。
```go
// bson.D{bson.E{Key:"firstName", Value:bson.D{bson.E{Key:"$first", Value:"$name"}}}}
result := aggregation.First("firstName", "$name")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `First` 方法构建 `$first`。
```go
// bson.D{bson.E{Key:"firstName", Value:bson.D{bson.E{Key:"$first", Value:"$name"}}}}
result := aggregation.NewBuilder().
    First("firstName", "$name").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### FirstWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$first", Value:"$name"}}
expr := aggregation.FirstWithoutKey("$name")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$first", Value:"$name"}}
expr := aggregation.NewBuilder().
    FirstWithoutKey("$name").
    Build()
```

