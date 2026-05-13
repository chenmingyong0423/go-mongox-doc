# Query Condition - $in
## Function Build
Build the `$in` query condition using the generic `In` function provided by the `query` package.
```go
// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$in", Value:[]string{"Mingyong Chen", "Burt"}}}}}
query.In("name", "Mingyong Chen", "Burt")
```

`In` accepts a generic value list, so values with the same concrete type can be passed directly:

```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$in", Value:[]int{18, 20, 30}}}}}
query.In("age", 18, 20, 30)
query.In("score", 89.5, 92.0, 99.0)
```

## Method Build (Builder)
Build the `$in` query condition using the `Builder` builder provided by the `query` package.
```go
// bson.D{bson.E{Key:"enabled", Value:bson.D{bson.E{Key:"$eq", Value:true}}}, bson.E{Key:"name", Value:bson.D{bson.E{Key :"$in", Value:[]interface {}{"Mingyong Chen", "Burt"}}}}}
query.NewBuilder().Eq("enabled", true).In("name", "Mingyong Chen", "Burt").Build()
```
The builder provided by the `query` package is suitable for building composite query conditions.

In addition to the general `In` method, the builder also provides specialized build methods for different data types. These methods follow the `In{Type}` naming convention and are useful when the candidate value type is explicit.

| Method | Value type |
| --- | --- |
| `In` | `any` |
| `InFloat32` | `float32` |
| `InFloat64` | `float64` |
| `InInt` | `int` |
| `InInt8` | `int8` |
| `InInt16` | `int16` |
| `InInt32` | `int32` |
| `InInt64` | `int64` |
| `InString` | `string` |
| `InUint` | `uint` |
| `InUint8` | `uint8` |
| `InUint16` | `uint16` |
| `InUint32` | `uint32` |
| `InUint64` | `uint64` |

String values:

```go
// bson.D{bson.E{Key:"status", Value:bson.D{bson.E{Key:"$in", Value:[]string{"active", "pending"}}}}}
query.NewBuilder().
    InString("status", "active", "pending").
    Build()
```

Integer values:

```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$in", Value:[]int{18, 20, 30}}}}}
query.NewBuilder().
    InInt("age", 18, 20, 30).
    Build()
```

Floating-point values:

```go
// bson.D{bson.E{Key:"score", Value:bson.D{bson.E{Key:"$in", Value:[]float64{89.5, 92.0, 99.0}}}}}
query.NewBuilder().
    InFloat64("score", 89.5, 92.0, 99.0).
    Build()
```

Use the general `In` method when the value list is already `[]any`, or when you need `BSON` values that are not covered by the typed helpers. In real queries, keep candidate values aligned with the queried field type to avoid surprises from `BSON` type comparison rules or `null` matching semantics.

```go
// bson.D{bson.E{Key:"status", Value:bson.D{bson.E{Key:"$in", Value:[]any{"active", "pending"}}}}}
values := []any{"active", "pending"}

query.NewBuilder().
    In("status", values...).
    Build()
```
