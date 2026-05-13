# 聚合表达式 - $size
## 函数构建
使用 `aggregation` 包提供的 `Size` 函数构建 `$size`。
```go
// bson.D{bson.E{Key:"tagCount", Value:bson.D{bson.E{Key:"$size", Value:"$tags"}}}}
result := aggregation.Size("tagCount", "$tags")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Size` 方法构建 `$size`。
```go
// bson.D{bson.E{Key:"tagCount", Value:bson.D{bson.E{Key:"$size", Value:"$tags"}}}}
result := aggregation.NewBuilder().
    Size("tagCount", "$tags").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### SizeWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$size", Value:"$tags"}}
expr := aggregation.SizeWithoutKey("$tags")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$size", Value:"$tags"}}
expr := aggregation.NewBuilder().
    SizeWithoutKey("$tags").
    Build()
```

