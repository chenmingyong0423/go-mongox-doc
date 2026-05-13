# 查询条件 - $type
## 函数构建
`query` 包提供了四个函数用于构建 `$type` 查询条件，分别覆盖 `bson.Type`、类型别名、多个 `bson.Type` 和多个类型别名。

| 函数 | 参数类型 | 适用场景 |
| --- | --- | --- |
| `Type` | `bson.Type` | 使用 `MongoDB` `Go` Driver 的 `bson.Type` 常量 |
| `TypeAlias` | `string` | 使用 `MongoDB` 类型别名，例如 `"int"`、`"string"` |
| `TypeArray` | `...bson.Type` | 同时匹配多个 `bson.Type` |
| `TypeArrayAlias` | `...string` | 同时匹配多个类型别名 |

使用 `bson.Type`：

```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$type", Value:bson.TypeInt32}}}}
typeCond := query.Type("age", bson.TypeInt32)
```

使用类型别名：

```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$type", Value:"int"}}}}
typeCond := query.TypeAlias("age", "int")
```

匹配多个 `bson.Type`：

```go
// bson.D{bson.E{Key:"value", Value:bson.D{bson.E{Key:"$type", Value:[]bson.Type{bson.TypeInt32, bson.TypeInt64}}}}}
typeCond := query.TypeArray("value", bson.TypeInt32, bson.TypeInt64)
```

匹配多个类型别名：

```go
// bson.D{bson.E{Key:"value", Value:bson.D{bson.E{Key:"$type", Value:[]string{"int", "long"}}}}}
typeCond := query.TypeArrayAlias("value", "int", "long")
```

## 方法构建（构建器）
构建器提供同名方法，适用于和其他查询条件组合。

使用 `bson.Type`：

```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$type", Value:bson.TypeInt32}}}}
typeCond := query.NewBuilder().
    Type("age", bson.TypeInt32).
    Build()
```

使用类型别名：

```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$type", Value:"int"}}}}
typeCond := query.NewBuilder().
    TypeAlias("age", "int").
    Build()
```

匹配多个 `bson.Type`：

```go
// bson.D{bson.E{Key:"value", Value:bson.D{bson.E{Key:"$type", Value:[]bson.Type{bson.TypeInt32, bson.TypeInt64}}}}}
typeCond := query.NewBuilder().
    TypeArray("value", bson.TypeInt32, bson.TypeInt64).
    Build()
```

匹配多个类型别名：

```go
// bson.D{bson.E{Key:"enabled", Value:bson.D{bson.E{Key:"$eq", Value:true}}}, bson.E{Key:"value", Value:bson.D{bson.E{Key:"$type", Value:[]string{"int", "long"}}}}}
typeCond := query.NewBuilder().
    Eq("enabled", true).
    TypeArrayAlias("value", "int", "long").
    Build()
```
