# 聚合表达式 - $mod
## 函数构建
使用 `aggregation` 包提供的 `Mod` 函数构建 `$mod`。
```go
// bson.D{bson.E{Key:"remainder", Value:bson.D{bson.E{Key:"$mod", Value:[]interface {}{"$age", 5}}}}}
result := aggregation.Mod("remainder", "$age", 5)
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Mod` 方法构建 `$mod`。
```go
// bson.D{bson.E{Key:"remainder", Value:bson.D{bson.E{Key:"$mod", Value:[]interface {}{"$age", 5}}}}}
result := aggregation.NewBuilder().
    Mod("remainder", "$age", 5).
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### ModWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$mod", Value:[]any{"$age", 5}}}
expr := aggregation.ModWithoutKey("$age", 5)
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$mod", Value:[]any{"$age", 5}}}
expr := aggregation.NewBuilder().
    ModWithoutKey("$age", 5).
    Build()
```

