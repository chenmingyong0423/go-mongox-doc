# Query Condition - $nin

## Function Build

Build `$nin` with the generic `NIn` function from the `query` package.

```go
// bson.D{bson.E{Key:"status", Value:bson.D{bson.E{Key:"$nin", Value:[]string{"deleted", "archived"}}}}}
result := query.NIn("status", "deleted", "archived")
```

`NIn` accepts a generic value list, so values with the same concrete type can be passed directly:

```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$nin", Value:[]int{18, 20, 30}}}}}
result := query.NIn("age", 18, 20, 30)
result = query.NIn("score", 0.0, 59.5)
```

## Method Build (Builder)

When building `$nin` with `query.NewBuilder()`, the builder provides the general `Nin` method and several typed variants. Typed methods keep the candidate list as a clear `Go` type, which is useful for numeric comparisons and avoids unclear `any` lists.

The Builder currently supports:

| Method | Value type |
| --- | --- |
| `Nin` | `any` |
| `NinFloat32` | `float32` |
| `NinFloat64` | `float64` |
| `NinInt` | `int` |
| `NinInt8` | `int8` |
| `NinInt16` | `int16` |
| `NinInt32` | `int32` |
| `NinInt64` | `int64` |
| `NinString` | `string` |
| `NinUint` | `uint` |
| `NinUint8` | `uint8` |
| `NinUint16` | `uint16` |
| `NinUint32` | `uint32` |
| `NinUint64` | `uint64` |

String values:

```go
// bson.D{bson.E{Key:"status", Value:bson.D{bson.E{Key:"$nin", Value:[]string{"deleted", "archived"}}}}}
result := query.NewBuilder().
    NinString("status", "deleted", "archived").
    Build()
```

Integer values:

```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$nin", Value:[]int{18, 20, 30}}}}}
result := query.NewBuilder().
    NinInt("age", 18, 20, 30).
    Build()
```

Floating-point values:

```go
// bson.D{bson.E{Key:"score", Value:bson.D{bson.E{Key:"$nin", Value:[]float64{0.0, 59.5}}}}}
result := query.NewBuilder().
    NinFloat64("score", 0.0, 59.5).
    Build()
```

Use the general `Nin` method when the value list is already `[]any`, or when you need `BSON` values that are not covered by the typed helpers. In real queries, keep candidate values aligned with the queried field type to avoid surprises from `BSON` type comparison rules or `null` matching semantics.

```go
// bson.D{bson.E{Key:"status", Value:bson.D{bson.E{Key:"$nin", Value:[]any{"deleted", "archived"}}}}}
values := []any{"deleted", "archived"}

result := query.NewBuilder().
    Nin("status", values...).
    Build()
```
