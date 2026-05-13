# 聚合表达式 - $log
## 函数构建
使用 `aggregation` 包提供的 `Log` 函数构建 `$log`。
```go
// bson.D{bson.E{Key:"result", Value:bson.D{bson.E{Key:"$log", Value:[]interface {}{"$value", 10}}}}}
result := aggregation.Log("result", "$value", 10)
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Log` 方法构建 `$log`。
```go
// bson.D{bson.E{Key:"result", Value:bson.D{bson.E{Key:"$log", Value:[]interface {}{"$value", 10}}}}}
result := aggregation.NewBuilder().
    Log("result", "$value", 10).
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### LogWithoutKey
当前该变体只提供构建器方法。

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$log", Value:[]any{"$value", 10}}}
expr := aggregation.NewBuilder().
    LogWithoutKey("$value", 10).
    Build()
```

