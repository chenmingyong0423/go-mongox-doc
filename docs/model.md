# 内置 Model
`go mongox`内置了一个`Model`结构体，它包含了 `ID`、`CreatedAt` 和 `UpdatedAt` 三个字段。
```go
type Model struct {
	ID        primitive.ObjectID `bson:"_id,omitempty"`
	CreatedAt time.Time          `bson:"created_at"`
	UpdatedAt time.Time          `bson:"updated_at"`
}

func (m *Model) DefaultId() primitive.ObjectID {
	if m.ID.IsZero() {
		m.ID = primitive.NewObjectID()
	}
	return m.ID
}

func (m *Model) DefaultCreatedAt() time.Time {
	if m.CreatedAt.IsZero() {
		m.CreatedAt = time.Now().Local()
	}
	return m.CreatedAt
}

func (m *Model) DefaultUpdatedAt() time.Time {
	m.UpdatedAt = time.Now().Local()
	return m.UpdatedAt
}

```

这个结构体通过实现 `DefaultModel`接口，如果初始化插件时将 `EnableDefaultFieldHook` 设置为 `true`（详情请参考 [启用内置插件-钩子](./plugins/plugins#启用内置插件-钩子) ），`go mongox` 库将自动化地处理文档的创建、更新操作中的 `ID` 和时间的赋值。

具体来说：
- 创建文档（`InsertOne`、`InsertMany`）时会调用`DefaultId()`和`DefaultCreatedAt()`方法来初始化`ID`和`CreatedAt`字段；
- 更新文档（`UpdateOne`、`UpdateMany`）时，会调用`DefaultUpdatedAt()`方法设置并获取 `UpdatedAt` 的值，然后更新 `updated_at` 字段的值；
- 保存（`Upsert`）文档操作时，会同时调用这三个方法并封装 `updates` 更新文档，以确保所有相关字段都被正确初始化或更新。

你可以把它嵌入到自己定义的结构体中，如下所示：
```go
type User struct {
	mongox.Model `bson:",inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}
```

## CustomModel 接口
`go mongox` 提供了 `CustomModel` 接口，允许开发者自定义 `ID`、`CreatedAt` 和 `UpdatedAt` 字段的名称和值。这对于处理自定义字段名称或格式需求时非常有用。

`CustomModel` 接口定义如下所示：

```go
type CustomModel interface {
	// CustomID 用于设置和获取自定义 ID 字段的名称和值
	CustomID() (string, any)
	// CustomCreatedAt 用于设置和获取自定义 CreatedAt 字段的名称和值
	CustomCreatedAt() (string, any)
	// CustomUpdatedAt 用于设置和获取自定义 UpdatedAt 字段的名称和值
	CustomUpdatedAt() (string, any)
}
```

**自定义实现示例：**

```go
type CustomModel struct {
	ID        string `bson:"_id"`
	CreatedAt int64  `bson:"createdAt"`
	UpdatedAt int64  `bson:"updatedAt"`
}

func (m *CustomModel) CustomID() (string, any) {
	if m.ID == "" {
		m.ID = primitive.NewObjectID().Hex()
	}
	return "_id", m.ID
}

func (m *CustomModel) CustomCreatedAt() (string, any) {
	if m.CreatedAt == 0 {
		m.CreatedAt = time.Now().Local().Unix()
	}
	return "createdAt", m.CreatedAt
}

func (m *CustomModel) CustomUpdatedAt() (string, any) {
	m.UpdatedAt = time.Now().Local().Unix()
	return "updatedAt", m.UpdatedAt
}
```
