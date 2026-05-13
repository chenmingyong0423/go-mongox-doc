# 更新文档 - $sort
`$sort` 是 `$push` 的修饰符。

## 函数构建
使用 `update` 包提供的 `Sort` 函数构建 `$sort` 片段。
```go
// bson.D{bson.E{Key:"$sort", Value:-1}}
sort := update.Sort(-1)
```

## 方法构建（构建器）
`$sort` 通常需要和 `$each` 放在同一个 `bson.D` 中，再作为 `$push` 的值传入。
```go
// bson.D{bson.E{Key:"$push", Value:bson.D{bson.E{Key:"scores", Value:bsonx.NewD().Add("$each", []int{90, 95}).Add("$sort", -1).Build()}}}}
update.NewBuilder().
    Push("scores", bsonx.NewD().
        Add("$each", []int{90, 95}).
        Add("$sort", -1).
        Build()).
    Build()
```
