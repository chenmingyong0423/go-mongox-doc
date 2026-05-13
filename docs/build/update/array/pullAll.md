# 更新文档 - $pullAll
## 函数构建
使用 `update` 包提供的 `PullAll` 泛型函数构建 `$pullAll` 更新文档。
```go
// bson.D{bson.E{Key:"$pullAll", Value:bson.D{bson.E{Key:"tags", Value:[]string{"old", "legacy"}}}}}
pullAll := update.PullAll("tags", "old", "legacy")
```

`PullAll` 的签名支持泛型参数，因此也可以直接传入同一类型的候选值：

```go
// bson.D{bson.E{Key:"$pullAll", Value:bson.D{bson.E{Key:"scores", Value:[]int{60, 70, 80}}}}}
pullAll := update.PullAll("scores", 60, 70, 80)
pullAll = update.PullAll("rates", 1.1, 1.2, 1.3)
```

## 方法构建（构建器）
使用 `update` 包提供的构建器 `Builder` 构建 `$pullAll` 更新文档。
```go
// bson.D{bson.E{Key:"$pullAll", Value:bson.D{bson.E{Key:"tags", Value:[]interface {}{"old", "legacy"}}}}}
pullAll := update.NewBuilder().PullAll("tags", "old", "legacy").Build()
```

除了通用的 `PullAll` 方法之外，构建器还为不同的数据类型提供了专门的构建方法。这些方法遵循 `PullAll{Type}` 的命名约定，适合在候选值类型明确时使用。

| 方法 | 值类型 |
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

字符串列表：

```go
// bson.D{bson.E{Key:"$pullAll", Value:bson.D{bson.E{Key:"tags", Value:[]string{"old", "legacy"}}}}}
pullAll := update.NewBuilder().
    PullAllString("tags", "old", "legacy").
    Build()
```

整数列表：

```go
// bson.D{bson.E{Key:"$pullAll", Value:bson.D{bson.E{Key:"scores", Value:[]int{60, 70, 80}}}}}
pullAll := update.NewBuilder().
    PullAllInt("scores", 60, 70, 80).
    Build()
```

浮点数列表：

```go
// bson.D{bson.E{Key:"$pullAll", Value:bson.D{bson.E{Key:"rates", Value:[]float64{1.1, 1.2, 1.3}}}}}
pullAll := update.NewBuilder().
    PullAllFloat64("rates", 1.1, 1.2, 1.3).
    Build()
```

如果值列表已经是 `[]any`，或者需要传入类型化方法没有覆盖的 `BSON` 值，可以使用通用 `PullAll`。实际更新时仍建议让候选值与数组字段元素保持一致的数据类型。

```go
// bson.D{bson.E{Key:"$pullAll", Value:bson.D{bson.E{Key:"tags", Value:[]any{"old", "legacy"}}}}}
values := []any{"old", "legacy"}

pullAll := update.NewBuilder().
    PullAll("tags", values...).
    Build()
```
