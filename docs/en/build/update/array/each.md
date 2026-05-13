# Update Document - $each
`$each` is an array update modifier and is usually nested in `$push` or `$addToSet`.

## Function Build
Build an `$each` fragment with the generic `Each` function from the `update` package.
```go
// bson.D{bson.E{Key:"$each", Value:[]string{"go", "mongodb"}}}
each := update.Each("go", "mongodb")
```

`Each` accepts a generic value list, so values with the same concrete type can be passed directly:

```go
// bson.D{bson.E{Key:"$each", Value:[]int{90, 95, 100}}}
each := update.Each(90, 95, 100)
each = update.Each(89.5, 92.0, 99.0)
```

## Method Build (Builder)
`$each` is a modifier, so it is usually passed as the value of `$push` or `$addToSet`.
```go
// bson.D{bson.E{Key:"$push", Value:bson.D{bson.E{Key:"tags", Value:bson.D{bson.E{Key:"$each", Value:[]string{"go", "mongodb"}}}}}}}
update.NewBuilder().
    Push("tags", update.EachString("go", "mongodb")).
    Build()
```

In addition to the general `Each` method, the builder also provides specialized build methods for different data types. These methods follow the `Each{Type}` naming convention and are useful when the candidate value type is explicit.

| Method | Value type |
| --- | --- |
| `Each` | `any` |
| `EachInt` | `int` |
| `EachInt8` | `int8` |
| `EachInt16` | `int16` |
| `EachInt32` | `int32` |
| `EachInt64` | `int64` |
| `EachUint` | `uint` |
| `EachUint8` | `uint8` |
| `EachUint16` | `uint16` |
| `EachUint32` | `uint32` |
| `EachUint64` | `uint64` |
| `EachFloat32` | `float32` |
| `EachFloat64` | `float64` |
| `EachString` | `string` |

String values:

```go
// bson.D{bson.E{Key:"$push", Value:bson.D{bson.E{Key:"tags", Value:update.EachString("go", "mongodb")}}}}
update.NewBuilder().
    Push("tags", update.EachString("go", "mongodb")).
    Build()
```

Integer values:

```go
// bson.D{bson.E{Key:"$push", Value:bson.D{bson.E{Key:"scores", Value:update.EachInt(90, 95, 100)}}}}
update.NewBuilder().
    Push("scores", update.EachInt(90, 95, 100)).
    Build()
```

Floating-point values:

```go
// bson.D{bson.E{Key:"$push", Value:bson.D{bson.E{Key:"rates", Value:update.EachFloat64(1.1, 1.2, 1.3)}}}}
update.NewBuilder().
    Push("rates", update.EachFloat64(1.1, 1.2, 1.3)).
    Build()
```

`$each` can also be combined with `$push` modifiers such as `$position`, `$slice`, and `$sort`. Put the modifiers in the same `bson.D`, then pass that value to one `Push` call:

```go
// bson.D{bson.E{Key:"$push", Value:bson.D{bson.E{Key:"scores", Value:bsonx.NewD().Add("$each", []int{90, 95, 100}).Add("$position", 0).Add("$slice", 10).Build()}}}}
update.NewBuilder().
    Push("scores", bsonx.NewD().
        Add("$each", []int{90, 95, 100}).
        Add("$position", 0).
        Add("$slice", 10).
        Build()).
    Build()
```
