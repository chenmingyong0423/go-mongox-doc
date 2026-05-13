# 查询条件 - _id
`Id` 是 `query` 包提供的快捷方法，用来直接构建 `_id` 查询条件。

## 函数构建
使用 `query` 包提供的 `Id` 函数构建 `_id` 查询条件。

```go
id := bson.NewObjectID()

// bson.D{bson.E{Key:"_id", Value:id}}
idCond := query.Id(id)
```

`Id` 等价于直接构建 `_id` 字段：

```go
// bson.D{bson.E{Key:"_id", Value:id}}
idCond := bson.D{bson.E{Key: "_id", Value: id}}
```

## 方法构建（构建器）
使用 `query` 包提供的构建器 `Builder` 构建 `_id` 查询条件。

```go
id := bson.NewObjectID()

// bson.D{bson.E{Key:"_id", Value:id}}
idCond := query.NewBuilder().Id(id).Build()
```

按 `_id` 查询通常用于精准定位单条文档，直接使用 `Id` 即可。
