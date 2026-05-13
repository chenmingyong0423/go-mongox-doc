# 查询条件 - $nin

## 函数构建

使用 `query` 包提供的泛型函数 `NIn` 构建 `$nin` 查询条件。

```go
// bson.D{bson.E{Key:"status", Value:bson.D{bson.E{Key:"$nin", Value:[]string{"deleted", "archived"}}}}}
result := query.NIn("status", "deleted", "archived")
```

`NIn` 的签名支持泛型参数，因此也可以直接传入同一类型的候选值：

```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$nin", Value:[]int{18, 20, 30}}}}}
result := query.NIn("age", 18, 20, 30)
result = query.NIn("score", 0.0, 59.5)
```

## 方法构建（构建器）

使用 `query.NewBuilder()` 构建 `$nin` 时，除了通用的 `Nin` 方法，还提供了多组类型化方法。类型化方法可以让候选值列表保持明确的 `Go` 类型，适合数值类型比较、避免 `any` 列表带来的类型不清晰。

当前 Builder 支持：

| 方法 | 值类型 |
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

字符串列表：

```go
// bson.D{bson.E{Key:"status", Value:bson.D{bson.E{Key:"$nin", Value:[]string{"deleted", "archived"}}}}}
result := query.NewBuilder().
    NinString("status", "deleted", "archived").
    Build()
```

整数列表：

```go
// bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$nin", Value:[]int{18, 20, 30}}}}}
result := query.NewBuilder().
    NinInt("age", 18, 20, 30).
    Build()
```

浮点数列表：

```go
// bson.D{bson.E{Key:"score", Value:bson.D{bson.E{Key:"$nin", Value:[]float64{0.0, 59.5}}}}}
result := query.NewBuilder().
    NinFloat64("score", 0.0, 59.5).
    Build()
```

如果值列表已经是 `[]any`，或者需要传入类型化方法没有覆盖的 `BSON` 值，可以使用通用 `Nin`。实际查询时仍建议让候选值与被查询字段保持一致的数据类型，避免因为 `BSON` 类型比较规则或 `null` 的匹配语义带来非预期结果。

```go
// bson.D{bson.E{Key:"status", Value:bson.D{bson.E{Key:"$nin", Value:[]any{"deleted", "archived"}}}}}
values := []any{"deleted", "archived"}

result := query.NewBuilder().
    Nin("status", values...).
    Build()
```
