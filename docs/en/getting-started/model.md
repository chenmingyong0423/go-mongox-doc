# Document Model

`mongox` supports tagging structs (the generic parameters of `Collection`) so that fields are automatically populated when inserting or updating documents. This reduces repetitive code and improves development efficiency.

## mongox.Model

`mongox` includes a built-in `Model` struct, which contains the fields `ID`, `CreatedAt`, `UpdatedAt`, and `DeletedAt`.

```go
type Model struct {
	ID        bson.ObjectID `bson:"_id,omitempty" mongox:"autoID"`
	CreatedAt time.Time     `bson:"created_at"`
	UpdatedAt time.Time     `bson:"updated_at"`
	DeletedAt time.Time     `bson:"deleted_at,omitempty"`
}
```

- **Field Descriptions**:
    - `ID`: The unique identifier for the document. The `mongox:"autoID"` tag indicates that the `ObjectID` value will be automatically set when the document is inserted.
    - `CreatedAt`: The creation time of the document. If the field's value is the zero value when the document is inserted, it will be automatically set to the current time.
    - `UpdatedAt`: The last update time of the document. If the field’s value is the zero value when the document is inserted or if the document is updated, it will be automatically set to the current time.
    - `DeletedAt`: The deletion time of the document.

You can embed the `Model` struct into your own defined structs like this:

```go
type User struct {
	mongox.Model `bson:",inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}
```

## Advanced Usage

### ID Field Auto-Population
If the struct contains an `ID` field of type `bson.ObjectID` and is tagged with `mongox:"autoID"`, `mongox` will automatically set the `ID` field value.

```go
type User struct {
    ID bson.ObjectID `bson:"_id,omitempty" mongox:"autoID"`
    Name string `bson:"name"`
    Age int `bson:"age"`
}
```

### Auto-Populating CreatedAt and UpdatedAt Fields
If the struct contains `CreatedAt` and `UpdatedAt` fields, `mongox` will automatically set their values. These fields support `time.Time`, `int`, and `int64` types.

If you wish to use fields other than `CreatedAt` and `UpdatedAt`, you can configure the `autoCreateTime` and `autoUpdateTime` tags.

```go
type User struct {
	CreatedAt        time.Time // Automatically set to the current time if zero value when inserting
	UpdatedAt        int       // Automatically set to the current timestamp (in seconds) if zero value when inserting or updating
	CreateSecondTime int64     `mongox:"autoCreateTime"`        // Fills with timestamp in seconds
	UpdateSecondTime int64     `mongox:"autoUpdateTime:second"` // Fills with timestamp in seconds
	CreateMilliTime  int64     `mongox:"autoCreateTime:milli"`  // Fills with timestamp in milliseconds
	UpdateMilliTime  int64     `mongox:"autoUpdateTime:milli"`  // Fills with timestamp in milliseconds
	CreateNanoTime   int64     `mongox:"autoCreateTime:nano"`   // Fills with timestamp in nanoseconds
	UpdateNanoTime   int64     `mongox:"autoUpdateTime:nano"`   // Fills with timestamp in nanoseconds
}
```

### Field Tags

`mongox` supports the following field tags:

| Tag Name         | Description                                                                                                                                                                                         |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `autoID`         | Automatically sets the field value to `ObjectID` type when the document is inserted, if the field is zero value.                                                                                    |
| `autoCreateTime` | Automatically sets the field value to the current time when the document is inserted, if the field is zero value. You can also use the `second`, `milli`, or `nano` timestamp precision.            |
| `autoUpdateTime` | Automatically sets the field value to the current time when the document is inserted or updated, if the field is zero value. You can also use the `second`, `milli`, or `nano` timestamp precision. |