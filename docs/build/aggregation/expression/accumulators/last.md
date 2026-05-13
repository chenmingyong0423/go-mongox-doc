# 聚合表达式 - $last
## 函数构建
使用 `aggregation` 包提供的 `Last` 函数构建 `$last`。
```go
// bson.D{bson.E{Key:"lastName", Value:bson.D{bson.E{Key:"$last", Value:"$name"}}}}
result := aggregation.Last("lastName", "$name")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Last` 方法构建 `$last`。
```go
// bson.D{bson.E{Key:"lastName", Value:bson.D{bson.E{Key:"$last", Value:"$name"}}}}
result := aggregation.NewBuilder().
    Last("lastName", "$name").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### LastWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$last", Value:"$name"}}
expr := aggregation.LastWithoutKey("$name")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$last", Value:"$name"}}
expr := aggregation.NewBuilder().
    LastWithoutKey("$name").
    Build()
```

