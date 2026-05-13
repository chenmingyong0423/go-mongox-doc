# Query Condition - $slice
## Function Build
The `query` package provides two functions: `Slice` and `SliceRanger`.

Use `Slice` to specify the number of array elements to return:

```go
// bson.D{bson.E{Key:"comments", Value:bson.D{bson.E{Key:"$slice", Value:5}}}}
slice := query.Slice("comments", 5)
```

Use `SliceRanger` to specify the starting position and the number of elements to return:

```go
// bson.D{bson.E{Key:"comments", Value:bson.D{bson.E{Key:"$slice", Value:[]int{10, 5}}}}}
slice := query.SliceRanger("comments", 10, 5)
```

## Method Build (Builder)
The builder provides methods with the same names. Use them when composing `$slice` with other projection conditions.

Using `Slice`:

```go
// bson.D{bson.E{Key:"comments", Value:bson.D{bson.E{Key:"$slice", Value:5}}}}
slice := query.NewBuilder().
    Slice("comments", 5).
    Build()
```

Using `SliceRanger`:

```go
// bson.D{bson.E{Key:"comments", Value:bson.D{bson.E{Key:"$slice", Value:[]int{10, 5}}}}, bson.E{Key:"logs", Value:bson.D{bson.E{Key:"$slice", Value:3}}}}
slice := query.NewBuilder().
    SliceRanger("comments", 10, 5).
    Slice("logs", 3).
    Build()
```
