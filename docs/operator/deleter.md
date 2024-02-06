# Deleter 删除器
通过 `Deleter()` 方法获取一个新的泛型的删除器对象，即 `Deleter[T]`。通过 `Deleter[T]` 的方法，我们能够执行相关的删除操作。

# 删除单个文档
```go
deleteResult, err := userColl.Deleter().Filter(query.Id("60e96214a21b1b0001c3d69e")).DeleteOne(context.Background())
```
`DeleteOne` 方法用于删除单个文档。`deleteResult` 为 `*mongo.DeleteResult` 类型。

# 删除多个文档
```go
deleteResult, err := userColl.Deleter().Filter(query.In("_id", "60e96214a21b1b0001c3d69e", "80e96214a21b1b0001c3d70e")).DeleteMany(context.Background())
```
`DeleteMany` 方法用于删除多个文档。`deleteResult` 为 `*mongo.DeleteResult` 类型。