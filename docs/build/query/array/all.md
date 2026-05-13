# 查询条件 - $all
`query.All` 返回 `$all` 片段；顶层字段查询推荐使用构建器方法。

## 函数构建
使用 `query` 包提供的 `All` 泛型函数构建 `$all` 片段。
```go
// bson.D{bson.E{Key:"$all", Value:[]string{"go", "mongodb"}}}
all := query.All("go", "mongodb")
```

`All` 的签名支持泛型参数，因此也可以直接传入同一类型的候选值：

```go
// bson.D{bson.E{Key:"$all", Value:[]int{18, 20, 30}}}
all := query.All(18, 20, 30)
all = query.All(89.5, 92.0, 99.0)
```

## 方法构建（构建器）
使用 `query` 包提供的构建器 `Builder` 构建字段级 `$all` 查询条件。
```go
// bson.D{bson.E{Key:"tags", Value:bson.D{bson.E{Key:"$all", Value:[]interface {}{"go", "mongodb"}}}}}
all := query.NewBuilder().All("tags", "go", "mongodb").Build()
```

除了通用的 `All` 方法之外，构建器还为不同的数据类型提供了专门的构建方法。这些方法遵循 `All{Type}` 的命名约定，适合在候选值类型明确时使用。

| 方法 | 值类型 |
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

字符串列表：

```go
// bson.D{bson.E{Key:"tags", Value:bson.D{bson.E{Key:"$all", Value:[]string{"go", "mongodb"}}}}}
all := query.NewBuilder().
    AllString("tags", "go", "mongodb").
    Build()
```

整数列表：

```go
// bson.D{bson.E{Key:"scores", Value:bson.D{bson.E{Key:"$all", Value:[]int{90, 95, 100}}}}}
all := query.NewBuilder().
    AllInt("scores", 90, 95, 100).
    Build()
```

浮点数列表：

```go
// bson.D{bson.E{Key:"scores", Value:bson.D{bson.E{Key:"$all", Value:[]float64{89.5, 92.0, 99.0}}}}}
all := query.NewBuilder().
    AllFloat64("scores", 89.5, 92.0, 99.0).
    Build()
```

如果值列表已经是 `[]any`，或者需要传入类型化方法没有覆盖的 `BSON` 值，可以使用通用 `All`。实际查询时仍建议让候选值与数组字段元素保持一致的数据类型。

```go
// bson.D{bson.E{Key:"tags", Value:bson.D{bson.E{Key:"$all", Value:[]any{"go", "mongodb"}}}}}
values := []any{"go", "mongodb"}

all := query.NewBuilder().
    All("tags", values...).
    Build()
```
