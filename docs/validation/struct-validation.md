# 结构体校验
`go mongox` 支持利用结构体的标签（`tag`）去对字段值进行校验，这一校验功能基于 [playground/validator](https://github.com/go-playground/validator) 库提供的所有结构体校验规则。

```go
type User struct {
	mongox.Model   `bson:"inline"`
	Name           string `bson:"name"`
	Age            uint8  `validate:"gte=0,lte=130"`                // 确保年龄在 0 到 130 岁之间
	Email          string `json:"e-mail" validate:"required,email"` // 表示这个字段在数据验证时是必需的，并且必须符合电子邮箱的格式。
	FavouriteColor string `validate:"hexcolor|rgb|rgba"`            // 确保提供的颜色值要么是十六进制颜色码，要么是RGB或RGBA格式。
}
```

此校验功能目前适用于以下 `API` 操作：：
- `InsertOne`：插入一个文档
- `InsertMany`：插入多个文档
- `Upsert`：保存文档

通过整合 `playground/validator` 库，`go mongox` 能够提供强大且灵活的数据校验功能，确保数据的准确性和一致性。

**注意**：只有在初始化插件时将 `EnableValidationHook` 设置为 `true`（详情请参考 [启用内置插件-钩子](../plugins/plugins#启用内置插件-钩子) ）时，校验功能才会生效。