# Finder 查询器
通过 `Finder()` 方法获取一个新的泛型的查询器对象，即 `Finder[T]`。通过 `Finder[T]` 的方法，我们能够执行相关的查询操作。

## 查询单个文档
```go
user, err := userColl.Finder().Filter(query.Id("60e96214a21b1b0001c3d69e")).FindOne(context.Background())
```
- `FindOne` 方法用于查询单个文档。`user` 为指定的泛型类型的指针对象，即 `*User`。

- 通过 `Filter` 方法，我们可以指定查询条件。该方法接受的参数类型 `any`，意味着允许传入任意类型的参数（但是必须是合法的查询条件）。在上面的例子中，`query.Id("60e96214a21b1b0001c3d69e")` 用于指定查询条件为 `_id` 等于 `60e96214a21b1b0001c3d69e`。更多的查询条件构建可以参考 [query 包](../build/query/introduction)。

## 查询多个文档
```go
users, err := userColl.Finder().Filter(query.In("_id", "60e96214a21b1b0001c3d69e", "80e96214a21b1b0001c3d70e")).Find(context.Background())
```
- `Find` 方法用于查询多个文档。`users` 为指定的泛型类型的指针对象的切片，即 `[]*User`。

## 统计文档数量
```go
count, err := userColl.Finder().
		Filter(query.NewBuilder().Gt("age", 18).Lt("age", 24).Build()).
		Count(context.Background())
```
- `Count` 方法用于统计文档数量。`count` 为 `int64` 类型。

## Distinct 查询
```go
result, err := userColl.Finder().Distinct(context.Background(), "age")

// 你可以使用 DistinctWithParse 方法来解析结果到一个切片
ageSlice := make([]int, 0)
err := userColl.Finder().DistinctWithParse(context.Background(), "age", &ageSlice)
```
- `Distinct` 方法用于查询指定字段的唯一值。`result` 为 `[]any` 类型。

- 如果你想要解析结果到一个切片，你可以使用 `DistinctWithParse` 方法。该方法接受一个指向切片的指针作为参数，用于解析结果。