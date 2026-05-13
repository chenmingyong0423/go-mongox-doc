# 查询条件 - $regex
## 函数构建
`query` 包提供 `Regex` 和 `RegexOptions` 两个函数。

使用 `Regex` 构建只有 `$regex` 的查询条件：

```go
// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$regex", Value:"^ming"}}}}
regex := query.Regex("name", "^ming")
```

使用 `RegexOptions` 同时构建 `$regex` 和 `$options`：

```go
// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$regex", Value:"^ming"}, bson.E{Key:"$options", Value:"i"}}}}
regex := query.RegexOptions("name", "^ming", "i")
```

## 方法构建（构建器）
构建器提供同名方法，适用于和其他查询条件组合。

使用 `Regex`：

```go
// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$regex", Value:"^ming"}}}}
regex := query.NewBuilder().
    Regex("name", "^ming").
    Build()
```

使用 `RegexOptions`：

```go
// bson.D{bson.E{Key:"enabled", Value:bson.D{bson.E{Key:"$eq", Value:true}}}, bson.E{Key:"name", Value:bson.D{bson.E{Key:"$regex", Value:"^ming"}, bson.E{Key:"$options", Value:"i"}}}}}
regex := query.NewBuilder().
    Eq("enabled", true).
    RegexOptions("name", "^ming", "i").
    Build()
```
