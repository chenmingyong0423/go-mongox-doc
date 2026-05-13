# Update Document - $pullAll
## Function Build
Build the `$pullAll` update document using the generic `PullAll` function provided by the `update` package.
```go
// bson.D{bson.E{Key:"$pullAll", Value:bson.D{bson.E{Key:"tags", Value:[]string{"old", "legacy"}}}}}
pullAll := update.PullAll("tags", "old", "legacy")
```

`PullAll` accepts a generic value list, so values with the same concrete type can be passed directly:

```go
// bson.D{bson.E{Key:"$pullAll", Value:bson.D{bson.E{Key:"scores", Value:[]int{60, 70, 80}}}}}
pullAll := update.PullAll("scores", 60, 70, 80)
pullAll = update.PullAll("rates", 1.1, 1.2, 1.3)
```

## Method Build (Builder)
Build the `$pullAll` update document using the `Builder` builder provided by the `update` package.
```go
// bson.D{bson.E{Key:"$pullAll", Value:bson.D{bson.E{Key:"tags", Value:[]interface {}{"old", "legacy"}}}}}
pullAll := update.NewBuilder().PullAll("tags", "old", "legacy").Build()
```

In addition to the general `PullAll` method, the builder also provides specialized build methods for different data types. These methods follow the `PullAll{Type}` naming convention and are useful when the candidate value type is explicit.

| Method | Value type |
| --- | --- |
| `PullAll` | `any` |
| `PullAllInt` | `int` |
| `PullAllInt8` | `int8` |
| `PullAllInt16` | `int16` |
| `PullAllInt32` | `int32` |
| `PullAllInt64` | `int64` |
| `PullAllUint` | `uint` |
| `PullAllUint8` | `uint8` |
| `PullAllUint16` | `uint16` |
| `PullAllUint32` | `uint32` |
| `PullAllUint64` | `uint64` |
| `PullAllFloat32` | `float32` |
| `PullAllFloat64` | `float64` |
| `PullAllString` | `string` |

String values:

```go
// bson.D{bson.E{Key:"$pullAll", Value:bson.D{bson.E{Key:"tags", Value:[]string{"old", "legacy"}}}}}
pullAll := update.NewBuilder().
    PullAllString("tags", "old", "legacy").
    Build()
```

Integer values:

```go
// bson.D{bson.E{Key:"$pullAll", Value:bson.D{bson.E{Key:"scores", Value:[]int{60, 70, 80}}}}}
pullAll := update.NewBuilder().
    PullAllInt("scores", 60, 70, 80).
    Build()
```

Floating-point values:

```go
// bson.D{bson.E{Key:"$pullAll", Value:bson.D{bson.E{Key:"rates", Value:[]float64{1.1, 1.2, 1.3}}}}}
pullAll := update.NewBuilder().
    PullAllFloat64("rates", 1.1, 1.2, 1.3).
    Build()
```

Use the general `PullAll` method when the value list is already `[]any`, or when you need `BSON` values that are not covered by the typed helpers. In real updates, keep candidate values aligned with the array field element type.

```go
// bson.D{bson.E{Key:"$pullAll", Value:bson.D{bson.E{Key:"tags", Value:[]any{"old", "legacy"}}}}}
values := []any{"old", "legacy"}

pullAll := update.NewBuilder().
    PullAll("tags", values...).
    Build()
```
