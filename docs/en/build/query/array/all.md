# Query Condition - $all
`query.All` returns an `$all` fragment. Use the builder method for top-level field filters.

## Function Build
Build an `$all` fragment with the generic `All` function from the `query` package.
```go
// bson.D{bson.E{Key:"$all", Value:[]string{"go", "mongodb"}}}
all := query.All("go", "mongodb")
```

`All` accepts a generic value list, so values with the same concrete type can be passed directly:

```go
// bson.D{bson.E{Key:"$all", Value:[]int{18, 20, 30}}}
all := query.All(18, 20, 30)
all = query.All(89.5, 92.0, 99.0)
```

## Method Build (Builder)
Build a field-level `$all` query condition using the `Builder` builder provided by the `query` package.
```go
// bson.D{bson.E{Key:"tags", Value:bson.D{bson.E{Key:"$all", Value:[]interface {}{"go", "mongodb"}}}}}
all := query.NewBuilder().All("tags", "go", "mongodb").Build()
```

In addition to the general `All` method, the builder also provides specialized build methods for different data types. These methods follow the `All{Type}` naming convention and are useful when the candidate value type is explicit.

| Method | Value type |
| --- | --- |
| `All` | `any` |
| `AllFloat32` | `float32` |
| `AllFloat64` | `float64` |
| `AllInt` | `int` |
| `AllInt8` | `int8` |
| `AllInt16` | `int16` |
| `AllInt32` | `int32` |
| `AllInt64` | `int64` |
| `AllString` | `string` |
| `AllUint` | `uint` |
| `AllUint8` | `uint8` |
| `AllUint16` | `uint16` |
| `AllUint32` | `uint32` |
| `AllUint64` | `uint64` |

String values:

```go
// bson.D{bson.E{Key:"tags", Value:bson.D{bson.E{Key:"$all", Value:[]string{"go", "mongodb"}}}}}
all := query.NewBuilder().
    AllString("tags", "go", "mongodb").
    Build()
```

Integer values:

```go
// bson.D{bson.E{Key:"scores", Value:bson.D{bson.E{Key:"$all", Value:[]int{90, 95, 100}}}}}
all := query.NewBuilder().
    AllInt("scores", 90, 95, 100).
    Build()
```

Floating-point values:

```go
// bson.D{bson.E{Key:"scores", Value:bson.D{bson.E{Key:"$all", Value:[]float64{89.5, 92.0, 99.0}}}}}
all := query.NewBuilder().
    AllFloat64("scores", 89.5, 92.0, 99.0).
    Build()
```

Use the general `All` method when the value list is already `[]any`, or when you need `BSON` values that are not covered by the typed helpers. In real queries, keep candidate values aligned with the array field element type.

```go
// bson.D{bson.E{Key:"tags", Value:bson.D{bson.E{Key:"$all", Value:[]any{"go", "mongodb"}}}}}
values := []any{"go", "mongodb"}

all := query.NewBuilder().
    All("tags", values...).
    Build()
```
