# 更新文档 - $position
`$position` 是 `$push` 的修饰符。

## 函数构建
使用 `update` 包提供的 `Position` 函数构建 `$position` 片段。
```go
// bson.D{bson.E{Key:"$position", Value:0}}
position := update.Position(0)
```

## 方法构建（构建器）
`$position` 通常需要和 `$each` 放在同一个 `bson.D` 中，再作为 `$push` 的值传入。
```go
// bson.D{bson.E{Key:"$push", Value:bson.D{bson.E{Key:"tags", Value:bsonx.NewD().Add("$each", []string{"go", "mongodb"}).Add("$position", 0).Build()}}}}
update.NewBuilder().
    Push("tags", bsonx.NewD().
        Add("$each", []string{"go", "mongodb"}).
        Add("$position", 0).
        Build()).
    Build()
```
