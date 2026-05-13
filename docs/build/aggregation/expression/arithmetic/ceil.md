# 聚合表达式 - $ceil
## 函数构建
使用 `aggregation` 包提供的 `Ceil` 函数构建 `$ceil`。
```go
// bson.D{bson.E{Key:"roundedPrice", Value:bson.D{bson.E{Key:"$ceil", Value:"$price"}}}}
result := aggregation.Ceil("roundedPrice", "$price")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Ceil` 方法构建 `$ceil`。
```go
// bson.D{bson.E{Key:"roundedPrice", Value:bson.D{bson.E{Key:"$ceil", Value:"$price"}}}}
result := aggregation.NewBuilder().
    Ceil("roundedPrice", "$price").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### CeilWithoutKey
当前该变体只提供构建器方法。

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$ceil", Value:"$price"}}
expr := aggregation.NewBuilder().
    CeilWithoutKey("$price").
    Build()
```

