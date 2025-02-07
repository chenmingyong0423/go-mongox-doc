# 文档模型
`mongox` 支持对结构体进行标签化，以便在插入和更新文档时自动填充字段值。这样可以减少重复的代码，提高开发效率。

## mongox.Model

`go mongox`内置了一个`Model`结构体，它包含了 `ID`、`CreatedAt` 和 `UpdatedAt` 三个字段。
```go
type Model struct {
	ID        bson.ObjectID `bson:"_id,omitempty" mongox:"autoID"`
	CreatedAt time.Time     `bson:"created_at"`
	UpdatedAt time.Time     `bson:"updated_at"`
	DeletedAt time.Time     `bson:"deleted_at,omitempty"`
}
```

- 字段说明：
- `ID`：文档的唯一标识，包含 `mongox:"autoID"` 标签，表示在插入文档时会自动设置为 `ObjectID` 类型的值。
- `CreatedAt`：文档的创建时间，插入文档时如果该字段的值为零值，则会自动设置为当前时间。
- `UpdatedAt`：文档的更新时间，插入文档时如果该字段的值为零值或更新文档时，会自动设置为当前时间。
- `DeletedAt`：文档的删除时间。

你可以把它嵌入到自己定义的结构体中，如下所示：
```go
type User struct {
	mongox.Model `bson:",inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}
```

## 高级用法

### ID 字段
如果定义的结构体中包含类型为 `bson.ObjectID` 的 `ID` 字段并且包含 `mongox:"autoID"` 标签，`mongox`会自动设置 `ID` 字段的值。

```go
type User struct {
    ID bson.ObjectID `bson:"_id,omitempty" mongox:"autoID"`
    Name string `bson:"name"`
    Age int `bson:"age"`
}
```

### 创建和更新时间字段
如果所定义的结构体中包含 `CreatedAt` 和 `UpdatedAt` 字段，`mongox`会自动更新这些字段的值。它们支持 `time.Time` 类型和 `int` 类型以及 `int64` 类型。

如果需要使用非 `CreatedAt` 和 `UpdatedAt` 字段名，可以配置 `autoCreateTime` 和 `autoUpdateTime` 标签。

```go
type User struct {
	CreatedAt        time.Time `bson:"created_at"`                                        // 在插入文档时，如果该字段的值为零值，则会自动设置为当前时间
	UpdatedAt        int     `bson:"updated_at"`                                        // 在插入文档时，如果该字段的值为零值或更新文档时，会自动设置为当前时间戳秒数
	CreateSecondTime int64     `bson:"create_second_time" mongox:"autoCreateTime"`        // 使用秒级时间戳填充字段
	UpdateSecondTime int64     `bson:"update_second_time" mongox:"autoUpdateTime:second"` // 使用秒级时间戳填充字段
	CreateMilliTime  int64     `bson:"create_milli_time" mongox:"autoCreateTime:milli"`   // 使用毫秒级时间戳填充字段
	UpdateMilliTime  int64     `bson:"update_milli_time" mongox:"autoUpdateTime:milli"`   // 使用毫秒级时间戳填充字段
	CreateNanoTime   int64     `bson:"create_nano_time" mongox:"autoCreateTime:nano"`     // 使用纳秒级时间戳填充字段
	UpdateNanoTime   int64     `bson:"update_nano_time" mongox:"autoUpdateTime:nano"`     // 使用纳秒级时间戳填充字段
}
```

### 字段标签

`mongox`支持以下字段标签：
| 标签名 | 说明 |
| --- | --- |
| `autoID` | 在插入文档时，如果该字段的值为零值，则会自动设置为 `ObjectID` 类型的值 |
| `autoCreateTime` | 在插入文档时，如果该字段的值为零值，则会自动设置为当前时间。除了 `time.Time` 类型，你还可以使用 `second`、`milli` 和 `nano` 三种时间戳精度 |
| `autoUpdateTime` | 在插入文档时，如果该字段的值为零值或更新文档时，会自动设置为当前时间。除了 `time.Time` 类型，你还可以使用 `second`、`milli` 和 `nano` 三种时间戳精度 |