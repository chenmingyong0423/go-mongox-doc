# 内置 Model
`go mongox`内置了一个`Model`结构体，它包含了`ID`、`CreatedAt`和`UpdatedAt`三个字段。
```go
type Model struct {
	ID        primitive.ObjectID `bson:"_id"`
	CreatedAt time.Time          `bson:"created_at"`
	UpdatedAt time.Time          `bson:"updated_at"`
}

func (m *Model) DefaultId() {
	if m.ID.IsZero() {
		m.ID = primitive.NewObjectID()
	}
}

func (m *Model) DefaultCreatedAt() {
	if m.CreatedAt.IsZero() {
		m.CreatedAt = time.Now().Local()
	}
}

func (m *Model) DefaultUpdatedAt() {
	m.UpdatedAt = time.Now().Local()
}
```

这个结构体通过实现`DefaultModelHook`接口，自动化地处理文档的创建、更新操作中的 `ID` 和时间的赋值。

具体来说，创建文档（`InsertOne`、`InsertMany`）时会调用`DefaultId()`和`DefaultCreatedAt()`方法来初始化`ID`和`CreatedAt`字段；更新文档（`UpdateOne`、`UpdateMany`、`UpdatesWithOperator`）时，会调用`DefaultUpdatedAt()`方法来更新`UpdatedAt`字段的值；而在执行保存（`Upsert`）操作时，会同时调用这三个方法来确保所有相关字段都被正确初始化或更新。

你可以把它嵌入到自己定义的结构体中，如下所示：
```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}
```