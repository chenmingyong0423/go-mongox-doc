# 聚合表达式 - $lt
## 函数构建
使用 `aggregation` 包提供的 `Lt` 函数构建 `$lt`。
```go
// bson.D{bson.E{Key:"isMinor", Value:bson.D{bson.E{Key:"$lt", Value:[]interface {}{"$age", 18}}}}}
result := aggregation.Lt("isMinor", "$age", 18)
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Lt` 方法构建 `$lt`。
```go
// bson.D{bson.E{Key:"isMinor", Value:bson.D{bson.E{Key:"$lt", Value:[]interface {}{"$age", 18}}}}}
result := aggregation.NewBuilder().
    Lt("isMinor", "$age", 18).
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### LtWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$lt", Value:[]any{"$age", 18}}}
expr := aggregation.LtWithoutKey("$age", 18)
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$lt", Value:[]any{"$age", 18}}}
expr := aggregation.NewBuilder().
    LtWithoutKey("$age", 18).
    Build()
```

