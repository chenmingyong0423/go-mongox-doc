# Built-in Model
`go mongox` incorporates a built-in `Model` struct, which comprises three fields: `ID`, `CreatedAt`, and `UpdatedAt`.
```go
type Model struct {
	ID        primitive.ObjectID `bson:"_id,omitempty"`
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

This struct implements the `DefaultModelHook` interface. If `EnableDefaultFieldHook` is set to `true` when initializing the plugin (for details, please refer to [Enabling Built-in Plugins - Hooks](./plugins/plugins#enabling-built-in-plugins-hooks)), the `go mongox` library will automatically handle the assignment of `ID` and timestamps during document creation and update operations.

Specifically, during document creation(`InsertOne, InsertMany`), the `DefaultId()` and `DefaultCreatedAt()` methods are invoked to initialize the `ID` and `CreatedAt` fields, respectively. For document updates(`UpdateOne`、`UpdateMany`、`UpdatesWithOperator`), the `DefaultUpdatedAt()` method is called to refresh the `UpdatedAt` field. When performing save (`Upsert`) operations, all three methods are executed to ensure that all pertinent fields are properly initialized or updated.

You can embed it within your defined structs, as demonstrated below:
```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}
```