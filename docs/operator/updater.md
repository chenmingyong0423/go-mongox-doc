# Updater 更新器
通过 `Updater()` 方法获取一个新的泛型的更新器对象，即 `Updater[T]`。通过 `Updater[T]` 的方法，我们能够执行相关的更新操作。

## 更新单个文档
```go
updateResult, err := userColl.Updater().
		Filter(query.Id("60e96214a21b1b0001c3d69e")).
		Updates(update.Set("name", "Mingyong Chen")).
		UpdateOne(context.Background())
```
`UpdateOne` 方法用于更新单个文档。`updateResult` 为 `*mongo.UpdateResult` 类型。

通过 `Updates` 方法，我们可以指定更新的操作。该方法接受的参数类型为 `any`，意味着可以传入任意类型的参数（但是必须是合法的更新语句结构）。在上面的例子中，`update.Set("name", "Mingyong Chen")` 用于指定更新字段为 `name` 等于 `Mingyong Chen`。更多的更新语句构造可以参考 `update` 包。

## 更新多个文档
```go
updateResult, err := userColl.Updater().
		Updates(update.Set("name", "Mingyong Chen")).
		UpdateMany(context.Background())
```
`UpdateMany` 方法用于更新多个文档。`updateResult` 为 `*mongo.UpdateResult` 类型。

## Upsert 操作
```go
updateResult, err := userColl.Updater().
		Filter(query.Id("60e96214a21b1b0001c3d69e")).
		Replacement(&User{Name: "Mingyong Chen", Age: 18}).
		Upsert(context.Background())
```
`Upsert` 方法用于更新或插入一个文档。`updateResult` 为 `*mongo.UpdateResult` 类型。该方法需要结合 `Replacement` 方法使用，用于指定替换的文档。
