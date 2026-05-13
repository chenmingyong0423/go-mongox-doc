# 查询条件 - $in
## 函数构建
使用 `query` 包提供的 `In` 泛型函数构建 `$in` 查询条件。
```go
// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$in", Value:[]string{"陈明勇", "Mingyong Chen"}}}}}
query.In("name", "陈明勇", "Mingyong Chen")
```

`In` 的签名支持泛型参数，因此也可以直接传入同一类型的候选值：

```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$in", Value:[]int{18, 20, 30}}}}}
query.In("age", 18, 20, 30)
query.In("score", 89.5, 92.0, 99.0)
```

## 方法构建（构建器）
使用 `query` 包提供的构建器 `Builder` 构建 `$in` 查询条件。
```go
// bson.D{bson.E{Key:"enabled", Value:bson.D{bson.E{Key:"$eq", Value:true}}}, bson.E{Key:"name", Value:bson.D{bson.E{Key :"$in", Value:[]interface {}{"陈明勇", "Mingyong Chen"}}}}}
query.NewBuilder().Eq("enabled", true).In("name", "陈明勇", "Mingyong Chen").Build()
```
`query` 包提供的构建器适用于构建复合查询条件的场景。

除了通用的 `In` 方法之外，构建器还为不同的数据类型提供了专门的构建方法。这些方法遵循 `In{Type}` 的命名约定，适合在候选值类型明确时使用。

| 方法 | 值类型 |
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

字符串列表：

```go
// bson.D{bson.E{Key:"status", Value:bson.D{bson.E{Key:"$in", Value:[]string{"active", "pending"}}}}}
query.NewBuilder().
    InString("status", "active", "pending").
    Build()
```

整数列表：

```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$in", Value:[]int{18, 20, 30}}}}}
query.NewBuilder().
    InInt("age", 18, 20, 30).
    Build()
```

浮点数列表：

```go
// bson.D{bson.E{Key:"score", Value:bson.D{bson.E{Key:"$in", Value:[]float64{89.5, 92.0, 99.0}}}}}
query.NewBuilder().
    InFloat64("score", 89.5, 92.0, 99.0).
    Build()
```

如果值列表已经是 `[]any`，或者需要传入类型化方法没有覆盖的 `BSON` 值，可以使用通用 `In`。实际查询时仍建议让候选值与被查询字段保持一致的数据类型，避免因为 `BSON` 类型比较规则或 `null` 的匹配语义带来非预期结果。

```go
// bson.D{bson.E{Key:"status", Value:bson.D{bson.E{Key:"$in", Value:[]any{"active", "pending"}}}}}
values := []any{"active", "pending"}

query.NewBuilder().
    In("status", values...).
    Build()
```
