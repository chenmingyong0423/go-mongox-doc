# 聚合表达式 - $arrayToObject
## 函数构建
使用 `aggregation` 包提供的 `ArrayToObject` 函数构建 `$arrayToObject`。
```go
// bson.D{bson.E{Key:"attrs", Value:bson.D{bson.E{Key:"$arrayToObject", Value:"$pairs"}}}}
result := aggregation.ArrayToObject("attrs", "$pairs")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `ArrayToObject` 方法构建 `$arrayToObject`。
```go
// bson.D{bson.E{Key:"attrs", Value:bson.D{bson.E{Key:"$arrayToObject", Value:"$pairs"}}}}
result := aggregation.NewBuilder().
    ArrayToObject("attrs", "$pairs").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### ArrayToObjectWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$arrayToObject", Value:"$pairs"}}
expr := aggregation.ArrayToObjectWithoutKey("$pairs")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$arrayToObject", Value:"$pairs"}}
expr := aggregation.NewBuilder().
    ArrayToObjectWithoutKey("$pairs").
    Build()
```

