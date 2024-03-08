# 模型钩子（Model Hooks）
你可以针对模型（结构体）设置钩子函数，这些钩子函数会在 `MongoDB` 的集合操作前后被调用。例如，你可以在插入文档前后对文档进行处理，或者在查询文档后对文档进行处理。

目前支持的钩子函数有：

**插入钩子（`Insert Hook`）**
- 插入前的钩子（`BeforeInsert`）
- 插入后的钩子（`AfterInsert`）

**查询钩子（`Find Hook`）**
- 查询后的钩子（`AfterFind`）

**保存钩子（`Upsert Hook`）**
- 保存前的钩子（`BeforeUpsert`）
- 保存后的钩子（`AfterUpsert`）

鉴于 `MongoDB` 的文档型数据库特性，以及某些操作不直接映射到结构体上，`go-mongox` 不为删除和更新操作提供钩子函数。如果你有这方面的需求，你可以使用 `go-mongox` 提供的 [一次性钩子](./one-time-hooks) 或 [插件](../plugins/plugins) 功能来实现它们。
## 插入钩子（`Insert Hook`）
如果你想在插入文档的前后对文档进行处理，你可以实现以下特定的钩子方法：
```go
BeforeInsert(ctx context.Context) error // 插入前的钩子
AfterInsert(ctx context.Context) error  // 插入后的钩子
```

代码示例：

```go
type User struct {
	mongox.Model `bson:"inline"`
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

_, err := userColl.Creator().InsertOne(context.Background(), u)

_, err = userColl.Creator().InsertMany(context.Background(), []*User{
    {Name: "Burt", Age: 18},
    {Name: "chenmingyong", Age: 18},
})

```

## 查询钩子（`Find Hook`）
如果你想在查询文档后对文档进行处理，你可以实现以下特定的钩子方法：
```go
AfterFind(ctx context.Context) error // 查询后的钩子
```

代码示例：

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

func (u *User) AfterFind(ctx context.Context) error {
	fmt.Println("AfterFind called")
	return nil
}
_, err := userColl.Finder().Filter(query.Eq("name", "Mingyong Chen")).FindOne(context.Background())

_, err = userColl.Finder().Filter(query.In("name", "Mingyong Chen", "Burt")).Find(context.Background())

```

## 保存钩子（`Upsert Hook`）
如果你想在保存文档的前后对文档进行处理，你可以实现以下特定的钩子方法：
```go
BeforeUpsert(ctx context.Context) error // 保存前的钩子
AfterUpsert(ctx context.Context) error  // 保存后的钩子
```

代码示例：

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

func (u *User) BeforeUpsert(ctx context.Context) error {
	fmt.Println("BeforeUpsert called")
	return nil
}

func (u *User) AfterUpsert(ctx context.Context) error {
	fmt.Println("AfterUpsert called")
	return nil
}

_, err := userColl.Updater().
		Filter(query.Eq("name", "Gopher")).
		Replacement(&User{Name: "Gopher", Age: 20}).
		Upsert(context.Background())
```