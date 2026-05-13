# 更新文档 - $setOnInsert
## 函数构建
使用 `update` 包提供的 `SetOnInsert` 函数构建 `$setOnInsert`。
```go
// bson.D{bson.E{Key:"$setOnInsert", Value:bson.D{bson.E{Key:"created_at", Value:time.Now()}}}}
result := update.SetOnInsert("created_at", time.Now())
```
## 方法构建（构建器）
使用 `update.NewBuilder()` 的 `SetOnInsert` 方法构建 `$setOnInsert`。
```go
// bson.D{bson.E{Key:"$setOnInsert", Value:bson.D{bson.E{Key:"created_at", Value:time.Now()}}}}
result := update.NewBuilder().
    SetOnInsert("created_at", time.Now()).
    Build()
```