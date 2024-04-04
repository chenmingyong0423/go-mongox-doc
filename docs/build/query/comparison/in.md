# 查询条件 - $in
## 函数构建
使用 `query` 包提供的 `In` 泛型函数构建 `in` 查询条件。
```go
// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$in", Value:[]string{"陈明勇", "Mingyong Chen"}}}}}
query.In("name", "陈明勇", "Mingyong Chen")
```

## 方法构建（构建器）
使用 `query` 包提供的构建器 `Builder` 构建 `in` 查询条件。
```go
// bson.D{bson.E{Key:"enabled", Value:bson.D{bson.E{Key:"$eq", Value:true}}}, bson.E{Key:"name", Value:bson.D{bson.E{Key :"$in", Value:[]interface {}{"陈明勇", "Mingyong Chen"}}}}}
query.BsonBuilder().Eq("enabled", true).In("name", "陈明勇", "Mingyong Chen").Build()
```
`query` 包提供的构建器适用于构建复合查询条件的场景。

除了 `In` 方法之外，构建器还为不同的数据类型提供了专门的构建方法，这些方法遵循 `In{Type}` 的命名约定，例如 `InUnit()`、`InInt()`、`InString()` 等。
