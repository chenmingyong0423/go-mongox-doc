# 聚合表达式 - $toUpper
## 函数构建
使用 `aggregation` 包提供的 `ToUpper` 函数构建 `$toUpper`。
```go
// bson.D{bson.E{Key:"upperName", Value:bson.D{bson.E{Key:"$toUpper", Value:"$name"}}}}
result := aggregation.ToUpper("upperName", "$name")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `ToUpper` 方法构建 `$toUpper`。
```go
// bson.D{bson.E{Key:"upperName", Value:bson.D{bson.E{Key:"$toUpper", Value:"$name"}}}}
result := aggregation.NewBuilder().
    ToUpper("upperName", "$name").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### ToUpperWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$toUpper", Value:"$name"}}
expr := aggregation.ToUpperWithoutKey("$name")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$toUpper", Value:"$name"}}
expr := aggregation.NewBuilder().
    ToUpperWithoutKey("$name").
    Build()
```

