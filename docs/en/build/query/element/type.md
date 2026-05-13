# Query Condition - $type
## Function Build
The `query` package provides four functions for building `$type` query conditions. They cover `bson.Type`, type aliases, multiple `bson.Type` values, and multiple type aliases.

| Function | Parameter type | Use case |
| --- | --- | --- |
| `Type` | `bson.Type` | Use `bson.Type` constants from the `MongoDB` `Go` Driver |
| `TypeAlias` | `string` | Use `MongoDB` type aliases such as `"int"` or `"string"` |
| `TypeArray` | `...bson.Type` | Match multiple `bson.Type` values |
| `TypeArrayAlias` | `...string` | Match multiple type aliases |

Using `bson.Type`:

```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$type", Value:bson.TypeInt32}}}}
typeCond := query.Type("age", bson.TypeInt32)
```

Using a type alias:

```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$type", Value:"int"}}}}
typeCond := query.TypeAlias("age", "int")
```

Matching multiple `bson.Type` values:

```go
// bson.D{bson.E{Key:"value", Value:bson.D{bson.E{Key:"$type", Value:[]bson.Type{bson.TypeInt32, bson.TypeInt64}}}}}
typeCond := query.TypeArray("value", bson.TypeInt32, bson.TypeInt64)
```

Matching multiple type aliases:

```go
// bson.D{bson.E{Key:"value", Value:bson.D{bson.E{Key:"$type", Value:[]string{"int", "long"}}}}}
typeCond := query.TypeArrayAlias("value", "int", "long")
```

## Method Build (Builder)
The builder provides methods with the same names. Use them when composing `$type` with other query conditions.

Using `bson.Type`:

```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$type", Value:bson.TypeInt32}}}}
typeCond := query.NewBuilder().
    Type("age", bson.TypeInt32).
    Build()
```

Using a type alias:

```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$type", Value:"int"}}}}
typeCond := query.NewBuilder().
    TypeAlias("age", "int").
    Build()
```

Matching multiple `bson.Type` values:

```go
// bson.D{bson.E{Key:"value", Value:bson.D{bson.E{Key:"$type", Value:[]bson.Type{bson.TypeInt32, bson.TypeInt64}}}}}
typeCond := query.NewBuilder().
    TypeArray("value", bson.TypeInt32, bson.TypeInt64).
    Build()
```

Matching multiple type aliases:

```go
// bson.D{bson.E{Key:"enabled", Value:bson.D{bson.E{Key:"$eq", Value:true}}}, bson.E{Key:"value", Value:bson.D{bson.E{Key:"$type", Value:[]string{"int", "long"}}}}}
typeCond := query.NewBuilder().
    Eq("enabled", true).
    TypeArrayAlias("value", "int", "long").
    Build()
```
