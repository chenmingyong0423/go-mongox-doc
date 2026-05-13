# 聚合表达式 - $multiply
## 函数构建
使用 `aggregation` 包提供的 `Multiply` 函数构建 `$multiply`。
```go
// bson.D{bson.E{Key:"amount", Value:bson.D{bson.E{Key:"$multiply", Value:[]interface {}{"$price", "$quantity"}}}}}
result := aggregation.Multiply("amount", "$price", "$quantity")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Multiply` 方法构建 `$multiply`。
```go
// bson.D{bson.E{Key:"amount", Value:bson.D{bson.E{Key:"$multiply", Value:[]interface {}{"$price", "$quantity"}}}}}
result := aggregation.NewBuilder().
    Multiply("amount", "$price", "$quantity").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### MultiplyWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$multiply", Value:[]any{"$price", "$quantity"}}}
expr := aggregation.MultiplyWithoutKey("$price", "$quantity")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$multiply", Value:[]any{"$price", "$quantity"}}}
expr := aggregation.NewBuilder().
    MultiplyWithoutKey("$price", "$quantity").
    Build()
```

