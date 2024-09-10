# 模型钩子（Model Hooks）
你可以针对模型（结构体）设置钩子函数，这些钩子函数会在 `MongoDB` 的集合操作前后被调用。例如，你可以在插入文档前后对文档进行处理，或者在查询文档后对文档进行处理。

目前支持的钩子函数有：

**插入钩子（`Insert Hook`）**
- 插入前的钩子（`BeforeInsert`）
- 插入后的钩子（`AfterInsert`）

**删除钩子（`Delete Hook`）**
- 删除前的钩子（`BeforeDelete`）
- 删除后的钩子（`AfterDelete`）

**更新钩子（`Update Hook`）**
- 更新前的钩子（`BeforeUpdate`）
- 更新后的钩子（`AfterUpdate`）

**保存钩子（`Upsert Hook`）**
- 保存前的钩子（`BeforeUpsert`）
- 保存后的钩子（`AfterUpsert`）

**查询钩子（`Find Hook`）**
- 查询前的钩子（`BeforeFind`）
- 查询后的钩子（`AfterFind`）


**注意**：只有在初始化插件时将 `EnableModelHook` 设置为 `true`（详情请参考 [启用内置插件-钩子](../plugins/plugins#启用内置插件-钩子) ）时，模型钩子才会生效。
## 插入钩子（`Insert Hook`）
如果你想在插入文档的前后对文档进行处理，你可以实现以下特定的钩子方法：
```go
BeforeInsert(ctx context.Context) error // 插入前的钩子
AfterInsert(ctx context.Context) error  // 插入后的钩子
```

代码示例：

```go
type User struct {
	mongox.Model `bson:",inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

func (u *User) BeforeInsert(ctx context.Context) error {
	fmt.Println("BeforeInsert called")
	return nil
}

func (u *User) AfterInsert(ctx context.Context) error {
	fmt.Println("AfterInsert called")
	return nil
}

mongox.InitPlugin(&mongox.PluginConfig{
    EnableModelHook:        true,
})

user := &User{Name: "Mingyong Chen", Age: 18}
insertOneResult, err := userColl.Creator().InsertOne(context.Background(), user)

users := []*User{
    {Name: "Mingyong Chen", Age: 18},
    {Name: "chenmingyong", Age: 18},
}
insertManyResult, err := userColl.Creator().InsertMany(context.Background(), users)

// 你也可以使用 ModelHook 方法传递一个实现了 BeforeInsert 和 AfterInsert 方法的对象。
// 注意：通过 ModelHook 传递的对象优先级高于 InsertOne 方法中传递的参数。
// userColl.Creator().ModelHook(user).InsertOne(context.Background(), user)

```

通过 `ModelHook` 方法传递一个实现了 `BeforeInsert` 和 `AfterInsert` 方法的对象也能触发 `BeforeInsert` 和 `AfterInsert` 方法。

**注意：** 通过 `ModelHook` 传递的对象优先级高于 `InsertOne` 或 `InsertMany` 方法中传递的参数，且会覆盖掉这两个方法中传递的参数。

## 查询钩子（`Find Hook`）
如果你想在查询文档前执行一些操作，或在查询文档后对文档进行处理，你可以实现以下特定的钩子方法：
```go
BeforeFind(ctx context.Context) error // 查询前的钩子
AfterFind(ctx context.Context) error // 查询后的钩子
```

代码示例：

```go
type User struct {
	mongox.Model `bson:",inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

func (u *User) AfterFind(ctx context.Context) error {
	fmt.Println("AfterFind called")
	return nil
}

type findHook struct{}

func (b *findHook) BeforeFind(ctx context.Context) error {
	fmt.Println("BeforeFind called")
	return nil
}

func (b *findHook) AfterFind(ctx context.Context) error {
	fmt.Println("AfterFind called")
	return nil
}

mongox.InitPlugin(&mongox.PluginConfig{
    EnableModelHook:        true,
})

user, err := userColl.Finder().ModelHook(new(findHook)).Filter(query.Eq("name", "Mingyong Chen")).FindOne(context.Background())

users, err := userColl.Finder().Filter(query.In("name", "Mingyong Chen", "chenmingyong")).Find(context.Background())

```

正常情况下，启用 `EnableModelHook` 只会触发 `AfterFind` 方法，而不会触发 `BeforeFind` 方法。

如果你需要执行 `BeforeFind` 方法，请将实现了 `BeforeFind` 的对象传递给 `ModelHook` 方法。

**注意：** 通过 `ModelHook` 传递的对象优先级高于查询结果中的 `User` 对象，且会覆盖查询到的 `User` 对象。

## 删除钩子（`Delete Hook`）
如果你想在删除文档的前后执行一些操作，你可以实现以下特定的钩子方法：
```go
BeforeDelete(ctx context.Context) error // 删除前的钩子
AfterDelete(ctx context.Context) error  // 删除后的钩子
```

代码示例：

```go
type deleteHook struct{}

func (d *deleteHook) BeforeDelete(ctx context.Context) error {
	fmt.Println("BeforeDelete called")
	return nil
}

func (d *deleteHook) AfterDelete(ctx context.Context) error {
	fmt.Println("AfterDelete called")
	return nil
}

mongox.InitPlugin(&mongox.PluginConfig{
    EnableModelHook: true,
})

deleteOneResult, err := userColl.Deleter().ModelHook(new(deleteHook)).Filter(query.Eq("name", "Mingyong Chen")).DeleteOne(context.Background())

deleteManyResult, err := userColl.Deleter().ModelHook(new(deleteHook)).Filter(query.Eq("name", "Mingyong Chen")).DeleteMany(context.Background())

```

通过 `ModelHook` 方法传递一个实现了 `BeforeDelete` 和 `AfterDelete` 方法的对象，可以触发 `BeforeDelete` 和 `AfterDelete` 方法。

## 更新钩子（`Update Hook`）
如果你想在更新文档的前后执行一些操作，你可以实现以下特定的钩子方法：
```go
BeforeUpdate(ctx context.Context) error // 更新前的钩子
AfterUpdate(ctx context.Context) error  // 更新后的钩子
```

代码示例：

```go
type updateHook struct{}

func (u *updateHook) BeforeUpdate(ctx context.Context) error {
	fmt.Println("BeforeUpdate called")
	return nil
}

func (u *updateHook) AfterUpdate(ctx context.Context) error {
	fmt.Println("AfterUpdate called")
	return nil
}

mongox.InitPlugin(&mongox.PluginConfig{
    EnableModelHook: true,
})

updateOneResult, err := userColl.Updater().ModelHook(new(updateHook)).Filter(query.Eq("name", "Mingyong Chen")).Updates(update.Set("age", 6)).UpdateOne(context.Background())

updateManyResult, err := userColl.Updater().ModelHook(new(updateHook)).Filter(query.In("name", "Mingyong Chen", "chenmingyong")).Updates(update.Set("age", 6)).UpdateMany(context.Background())

```
正常情况下，`mongox` 会根据 `Updates` 方法中的 `updates` 参数来决定是否触发 `BeforeUpdate` 和 `AfterUpdate` 方法。 

由于通常 `updates` 参数不实现 `BeforeUpdate` 和 `AfterUpdate` 方法，因此这些方法一般不会被触发。

如需触发 `BeforeUpdate` 和 `AfterUpdate`，请将实现了相应方法的对象传递给 `ModelHook`。


## 保存钩子（`Upsert Hook`）
如果你想在保存文档的前后对文档进行处理，你可以实现以下特定的钩子方法：
```go
BeforeUpsert(ctx context.Context) error // 保存前的钩子
AfterUpsert(ctx context.Context) error  // 保存后的钩子
```

代码示例：

```go
type upsertHook struct{}

func (u *upsertHook) BeforeUpsert(ctx context.Context) error {
	fmt.Println("BeforeUpsert called")
	return nil
}

func (u *upsertHook) AfterUpsert(ctx context.Context) error {
	fmt.Println("AfterUpsert called")
	return nil
}

mongox.InitPlugin(&mongox.PluginConfig{
    EnableModelHook: true,
})

updateResult, err := userColl.Updater().ModelHook(new(upsertHook)).Filter(query.Eq("name", "Mingyong Chen")).Updates(update.Set("age", 6)).Upsert(context.Background())
```

`Upsert` 方法触发 `BeforeUpsert` 和 `AfterUpsert` 方法的时机与 `UpdateOne` 或 `UpdateMany` 方法一致，即 `updates` 参数不实现 `BeforeUpsert` 和 `AfterUpsert` 方法时，这些方法不会被触发。

如需触发 `BeforeUpsert` 和 `AfterUpsert`，请将实现了相应方法的对象传递给 `ModelHook`。