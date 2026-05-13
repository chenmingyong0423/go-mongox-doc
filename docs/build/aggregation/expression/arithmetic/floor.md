# 聚合表达式 - $floor
## 函数构建
使用 `aggregation` 包提供的 `Floor` 函数构建 `$floor`。
```go
// bson.D{bson.E{Key:"roundedPrice", Value:bson.D{bson.E{Key:"$floor", Value:"$price"}}}}
result := aggregation.Floor("roundedPrice", "$price")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Floor` 方法构建 `$floor`。
```go
// bson.D{bson.E{Key:"roundedPrice", Value:bson.D{bson.E{Key:"$floor", Value:"$price"}}}}
result := aggregation.NewBuilder().
    Floor("roundedPrice", "$price").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### FloorWithoutKey
当前该变体只提供构建器方法。

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$floor", Value:"$price"}}
expr := aggregation.NewBuilder().
    FloorWithoutKey("$price").
    Build()
```

