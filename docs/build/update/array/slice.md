# 更新文档 - $slice
`$slice` 是 `$push` 的修饰符，和查询投影里的 `$slice` 不是同一类接口。

## 函数构建
使用 `update` 包提供的 `Slice` 函数构建 `$slice` 片段。
```go
// bson.D{bson.E{Key:"$slice", Value:5}}
slice := update.Slice(5)
```

## 方法构建（构建器）
`$slice` 通常需要和 `$each` 放在同一个 `bson.D` 中，再作为 `$push` 的值传入。
```go
// bson.D{bson.E{Key:"$push", Value:bson.D{bson.E{Key:"scores", Value:bsonx.NewD().Add("$each", []int{90, 95}).Add("$slice", 5).Build()}}}}
update.NewBuilder().
    Push("scores", bsonx.NewD().
        Add("$each", []int{90, 95}).
        Add("$slice", 5).
        Build()).
    Build()
```
