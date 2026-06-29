# 文档模型
`mongox` 支持对结构体（`Collection` 的泛型参数）进行标签化，以便在插入和更新文档时自动填充字段值。这样可以减少重复的代码，提高开发效率。

## mongox.Model

`go mongox`内置了一个`Model`结构体，它包含了 `ID`、`CreatedAt`、`UpdatedAt` 和 `DeletedAt` 四个字段。
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

### ID 字段填充
如果定义的结构体中包含类型为 `bson.ObjectID` 的 `ID` 字段并且包含 `mongox:"autoID"` 标签，`mongox`会自动设置 `ID` 字段的值。

```go
type User struct {
    ID bson.ObjectID `bson:"_id,omitempty" mongox:"autoID"`
    Name string `bson:"name"`
    Age int `bson:"age"`
}
```

### 创建和更新时间字段填充
如果所定义的结构体中包含 `CreatedAt` 和 `UpdatedAt` 字段，`mongox`会自动更新这些字段的值。它们支持 `time.Time`、`int` 和 `int64` 类型。

如果需要使用非 `CreatedAt` 和 `UpdatedAt` 字段名，可以配置 `autoCreateTime` 和 `autoUpdateTime` 标签。

自动时间字段的填充规则如下：

| 字段类型        | 无精度标签（如 `autoCreateTime`） | 精度标签（如 `autoCreateTime:milli`） |
|-------------|---------------------------|--------------------------------|
| `time.Time` | 填充当前时间                    | 不支持，字段不会被自动填充                  |
| `int`       | 填充秒级时间戳                   | 填充指定精度的时间戳                     |
| `int64`     | 填充秒级时间戳                   | 填充指定精度的时间戳                     |

`second`、`milli` 和 `nano` 只用于 `int` 或 `int64` 时间戳字段，不用于 `time.Time` 字段。

```go
type User struct {
	CreatedAt        time.Time // 在插入文档时，如果该字段的值为零值，则会自动设置为当前时间
	UpdatedAt        int       // 在插入文档时，如果该字段的值为零值或更新文档时，会自动设置为当前时间戳秒数
	CustomCreatedAt  time.Time `mongox:"autoCreateTime"`        // 使用当前时间填充字段
	CreateSecondTime int64     `mongox:"autoCreateTime"`        // 使用秒级时间戳填充字段
	UpdateSecondTime int64     `mongox:"autoUpdateTime:second"` // 使用秒级时间戳填充字段
	CreateMilliTime  int64     `mongox:"autoCreateTime:milli"`  // 使用毫秒级时间戳填充字段
	UpdateMilliTime  int64     `mongox:"autoUpdateTime:milli"`  // 使用毫秒级时间戳填充字段
	CreateNanoTime   int64     `mongox:"autoCreateTime:nano"`   // 使用纳秒级时间戳填充字段
	UpdateNanoTime   int64     `mongox:"autoUpdateTime:nano"`   // 使用纳秒级时间戳填充字段
}
```

### 字段标签

`mongox`支持以下字段标签：

| 标签名              | 说明                                                                                                                                |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| `autoID`         | 在插入文档时，如果该字段的值为零值，则会自动设置为 `ObjectID` 类型的值                                                                                         |
| `autoCreateTime` | 在插入文档时，如果该字段的值为零值，则会自动设置创建时间。字段为 `time.Time` 时填充当前时间；字段为 `int` 或 `int64` 时默认填充秒级时间戳，也可以使用 `second`、`milli` 和 `nano` 指定时间戳精度       |
| `autoUpdateTime` | 在插入文档时，如果该字段的值为零值，或更新文档时，会自动设置更新时间。字段为 `time.Time` 时填充当前时间；字段为 `int` 或 `int64` 时默认填充秒级时间戳，也可以使用 `second`、`milli` 和 `nano` 指定时间戳精度 |
