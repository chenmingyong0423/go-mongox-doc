# 聚合表达式 - $cond
## 函数构建
使用 `aggregation` 包提供的 `Cond` 函数构建 `$cond`。
```go
// bson.D{bson.E{Key:"level", Value:bson.D{bson.E{Key:"$cond", Value:[]interface {}{aggregation.GteWithoutKey("$score", 60), "pass", "fail"}}}}}
result := aggregation.Cond("level", aggregation.GteWithoutKey("$score", 60), "pass", "fail")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Cond` 方法构建 `$cond`。
```go
// bson.D{bson.E{Key:"level", Value:bson.D{bson.E{Key:"$cond", Value:[]interface {}{aggregation.GteWithoutKey("$score", 60), "pass", "fail"}}}}}
result := aggregation.NewBuilder().
    Cond("level", aggregation.GteWithoutKey("$score", 60), "pass", "fail").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### CondWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$cond", Value:[]any{aggregation.GteWithoutKey("$score", 60), "pass", "fail"}}}
expr := aggregation.CondWithoutKey(aggregation.GteWithoutKey("$score", 60), "pass", "fail")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$cond", Value:[]any{aggregation.GteWithoutKey("$score", 60), "pass", "fail"}}}
expr := aggregation.NewBuilder().
    CondWithoutKey(aggregation.GteWithoutKey("$score", 60), "pass", "fail").
    Build()
```

