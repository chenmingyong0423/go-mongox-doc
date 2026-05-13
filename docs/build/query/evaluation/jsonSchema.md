# 查询条件 - $jsonSchema
## 函数构建
使用 `query` 包提供的 `JsonSchema` 函数构建 `$jsonSchema`。
```go
// bson.D{bson.E{Key:"$jsonSchema", Value:schema}}
result := query.JsonSchema(schema)
```
## 方法构建（构建器）
使用 `query.NewBuilder()` 的 `JsonSchema` 方法构建 `$jsonSchema`。
```go
// bson.D{bson.E{Key:"$jsonSchema", Value:schema}}
result := query.NewBuilder().
    JsonSchema(schema).
    Build()
```