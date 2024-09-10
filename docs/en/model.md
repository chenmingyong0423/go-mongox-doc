# Built-in Model

The `go mongox` library provides a built-in `Model` struct, which includes three fields: `ID`, `CreatedAt`, and `UpdatedAt`.

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

This struct implements the `DefaultModel` interface, and if the `EnableDefaultFieldHook` option is set to `true` during plugin initialization (for details, refer to [Enable Built-in Plugin - Hook](./plugins/plugins#enabling-built-in-plugins-hooks)), the `go mongox` library will automatically handle the assignment of the `ID` and time fields during document creation and update operations.

Specifically:
- When creating documents (`InsertOne`, `InsertMany`), the `DefaultId()` and `DefaultCreatedAt()` methods are called to initialize the `ID` and `CreatedAt` fields.
- When updating documents (`UpdateOne`, `UpdateMany`), the `DefaultUpdatedAt()` method is called to set and retrieve the `UpdatedAt` value, updating the `updated_at` field accordingly.
- During the `Upsert` operation, all three methods are called to ensure all relevant fields are properly initialized or updated.

You can embed it into your own custom struct as shown below:

```go
type User struct {
	mongox.Model `bson:",inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}
```

## CustomModel Interface

The `go mongox` library provides the `CustomModel` interface, allowing developers to customize the names and values of the `ID`, `CreatedAt`, and `UpdatedAt` fields. This is particularly useful when handling custom field names or formats.

The `CustomModel` interface is defined as follows:

```go
type CustomModel interface {
	// CustomID is used to set and retrieve the custom ID field name and value
	CustomID() (string, any)
	// CustomCreatedAt is used to set and retrieve the custom CreatedAt field name and value
	CustomCreatedAt() (string, any)
	// CustomUpdatedAt is used to set and retrieve the custom UpdatedAt field name and value
	CustomUpdatedAt() (string, any)
}
```

**Example of a Custom Implementation:**

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