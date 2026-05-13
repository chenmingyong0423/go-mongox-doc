# 查询条件 - $slice
## 函数构建
`query` 包提供 `Slice` 和 `SliceRanger` 两个函数。

使用 `Slice` 指定返回数组中的元素数量：

```go
// bson.D{bson.E{Key:"comments", Value:bson.D{bson.E{Key:"$slice", Value:5}}}}
slice := query.Slice("comments", 5)
```

使用 `SliceRanger` 指定起始位置和返回数量：

```go
// bson.D{bson.E{Key:"comments", Value:bson.D{bson.E{Key:"$slice", Value:[]int{10, 5}}}}}
slice := query.SliceRanger("comments", 10, 5)
```

## 方法构建（构建器）
构建器提供同名方法，适用于和其他投影条件组合。

使用 `Slice`：

```go
// bson.D{bson.E{Key:"comments", Value:bson.D{bson.E{Key:"$slice", Value:5}}}}
slice := query.NewBuilder().
    Slice("comments", 5).
    Build()
```

使用 `SliceRanger`：

```go
// bson.D{bson.E{Key:"comments", Value:bson.D{bson.E{Key:"$slice", Value:[]int{10, 5}}}}, bson.E{Key:"logs", Value:bson.D{bson.E{Key:"$slice", Value:3}}}}
slice := query.NewBuilder().
    SliceRanger("comments", 10, 5).
    Slice("logs", 3).
    Build()
```
