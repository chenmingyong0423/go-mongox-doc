# 聚合表达式 - $toLower
## 函数构建
使用 `aggregation` 包提供的 `ToLower` 函数构建 `$toLower`。
```go
// bson.D{bson.E{Key:"lowerName", Value:bson.D{bson.E{Key:"$toLower", Value:"$name"}}}}
result := aggregation.ToLower("lowerName", "$name")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `ToLower` 方法构建 `$toLower`。
```go
// bson.D{bson.E{Key:"lowerName", Value:bson.D{bson.E{Key:"$toLower", Value:"$name"}}}}
result := aggregation.NewBuilder().
    ToLower("lowerName", "$name").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### ToLowerWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$toLower", Value:"$name"}}
expr := aggregation.ToLowerWithoutKey("$name")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$toLower", Value:"$name"}}
expr := aggregation.NewBuilder().
    ToLowerWithoutKey("$name").
    Build()
```

