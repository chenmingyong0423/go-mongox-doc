# 聚合表达式 - $add
## 函数构建
使用 `aggregation` 包提供的 `Add` 函数构建 `$add`。
```go
// bson.D{bson.E{Key:"total", Value:bson.D{bson.E{Key:"$add", Value:[]interface {}{"$price", "$fee"}}}}}
result := aggregation.Add("total", "$price", "$fee")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Add` 方法构建 `$add`。
```go
// bson.D{bson.E{Key:"total", Value:bson.D{bson.E{Key:"$add", Value:[]interface {}{"$price", "$fee"}}}}}
result := aggregation.NewBuilder().
    Add("total", "$price", "$fee").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### AddWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$add", Value:[]any{"$price", "$fee"}}}
expr := aggregation.AddWithoutKey("$price", "$fee")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$add", Value:[]any{"$price", "$fee"}}}
expr := aggregation.NewBuilder().
    AddWithoutKey("$price", "$fee").
    Build()
```

