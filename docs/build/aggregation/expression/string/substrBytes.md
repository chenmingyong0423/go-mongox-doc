# 聚合表达式 - $substrBytes
## 函数构建
使用 `aggregation` 包提供的 `SubstrBytes` 函数构建 `$substrBytes`。
```go
// bson.D{bson.E{Key:"prefix", Value:bson.D{bson.E{Key:"$substrBytes", Value:[]interface {}{"$name", 0, 3}}}}}
result := aggregation.SubstrBytes("prefix", "$name", 0, 3)
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `SubstrBytes` 方法构建 `$substrBytes`。
```go
// bson.D{bson.E{Key:"prefix", Value:bson.D{bson.E{Key:"$substrBytes", Value:[]interface {}{"$name", 0, 3}}}}}
result := aggregation.NewBuilder().
    SubstrBytes("prefix", "$name", 0, 3).
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### SubstrBytesWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$substrBytes", Value:[]any{"$name", 0, 3}}}
expr := aggregation.SubstrBytesWithoutKey("$name", 0, 3)
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$substrBytes", Value:[]any{"$name", 0, 3}}}
expr := aggregation.NewBuilder().
    SubstrBytesWithoutKey("$name", 0, 3).
    Build()
```

