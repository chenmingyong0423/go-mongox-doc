# 更新文档 - $each
`$each` 是数组更新修饰符，通常嵌套在 `$push` 或 `$addToSet` 中使用。

## 函数构建
使用 `update` 包提供的 `Each` 泛型函数构建 `$each` 片段。
```go
// bson.D{bson.E{Key:"$each", Value:[]string{"go", "mongodb"}}}
each := update.Each("go", "mongodb")
```

`Each` 的签名支持泛型参数，因此也可以直接传入同一类型的候选值：

```go
// bson.D{bson.E{Key:"$each", Value:[]int{90, 95, 100}}}
each := update.Each(90, 95, 100)
each = update.Each(89.5, 92.0, 99.0)
```

## 方法构建（构建器）
`$each` 本身是修饰符，通常作为 `$push` 或 `$addToSet` 的值传入。
```go
// bson.D{bson.E{Key:"$push", Value:bson.D{bson.E{Key:"tags", Value:bson.D{bson.E{Key:"$each", Value:[]string{"go", "mongodb"}}}}}}}
update.NewBuilder().
    Push("tags", update.EachString("go", "mongodb")).
    Build()
```

除了通用的 `Each` 方法之外，构建器还为不同的数据类型提供了专门的构建方法。这些方法遵循 `Each{Type}` 的命名约定，适合在候选值类型明确时使用。

| 方法 | 值类型 |
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

字符串列表：

```go
// bson.D{bson.E{Key:"$push", Value:bson.D{bson.E{Key:"tags", Value:update.EachString("go", "mongodb")}}}}
update.NewBuilder().
    Push("tags", update.EachString("go", "mongodb")).
    Build()
```

整数列表：

```go
// bson.D{bson.E{Key:"$push", Value:bson.D{bson.E{Key:"scores", Value:update.EachInt(90, 95, 100)}}}}
update.NewBuilder().
    Push("scores", update.EachInt(90, 95, 100)).
    Build()
```

浮点数列表：

```go
// bson.D{bson.E{Key:"$push", Value:bson.D{bson.E{Key:"rates", Value:update.EachFloat64(1.1, 1.2, 1.3)}}}}
update.NewBuilder().
    Push("rates", update.EachFloat64(1.1, 1.2, 1.3)).
    Build()
```

`$each` 也可以和 `$position`、`$slice`、`$sort` 这些 `$push` 修饰符组合使用。组合时应把多个修饰符放在同一个 `bson.D` 中，再传给一次 `Push`：

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
