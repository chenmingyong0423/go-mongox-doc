# 查询条件 - $text
## 函数构建
使用 `query` 包提供的 `Text` 函数构建 `$text`。
```go
// bson.D{bson.E{Key:"$text", Value:bson.D{bson.E{Key:"$search", Value:"mongodb"}, bson.E{Key:"$language", Value:"english"}}}}
result := query.Text("mongodb", &query.TextOptions{Language: "english"})
```
## 方法构建（构建器）
使用 `query.NewBuilder()` 的 `Text` 方法构建 `$text`。
```go
// bson.D{bson.E{Key:"$text", Value:bson.D{bson.E{Key:"$search", Value:"mongodb"}, bson.E{Key:"$language", Value:"english"}}}}
result := query.NewBuilder().
    Text("mongodb", "english", false, false).
    Build()
```