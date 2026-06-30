# 更新日志

## v2.10.0
`v2.10.0` 版本于北京时间 `2026-06-30` 发布。该版本主要修复了自动时间字段在不兼容类型和精度标签组合下的处理逻辑，并将 `MongoDB Go Driver` 升级至 `v2.7.0`。

### 修复
- **自动时间字段类型兼容性**：修复了 `mongox:"autoCreateTime"` 和 `mongox:"autoUpdateTime"` 在 `time.Time`、`int`、`int64` 等字段类型上的解析和赋值逻辑，避免为字段写入不兼容的时间值。
- **精度标签处理**：当 `time.Time` 字段错误使用 `:second`、`:milli`、`:nano` 等时间戳精度标签时，现在会忽略该自动时间配置，避免将 `Unix` 时间戳写入 `time.Time` 字段。
- **自定义整数类型赋值**：自动时间字段在写入 `Unix` 时间戳时，支持将生成的时间值转换为可兼容的目标整数类型。
- **批量文档字段钩子**：补充了批量执行字段钩子时的错误返回测试，确保执行过程中出现错误时可以正确透传。

### 依赖更新
- **`MongoDB Go Driver`**：将 `go.mongodb.org/mongo-driver/v2` 从 `v2.5.0` 升级至 `v2.7.0`。

### 相关文档
- [文档模型](getting-started/model) 已同步更新自动时间字段的使用说明。

## v2.2.0
`v2.2.0` 版本于北京时间 `2025-02-08` 发布。该版本做了非常多的改动，主要包括：

### 新增
- **Aggregator 操作器**"：支持注册 `Hook`，可以在聚合操作的前后插入自定义的逻辑。
- **Hook/Plugin 类型**：添加了 `前*` 和 `后*` 的钩子类型。
- **mongox.model**：为 `ID` 字段添加了 `mongox:autoID` 标签，用于自动生成 `ID`。

### 重构
- **mongox.Client 结构体**：添加了 `mongox.Client` 结构体，目前该结构体只用于创建 `Database` 对象。后续会增加更多的功能，例如事务的封装等。
- **mongox.Database 结构体**：添加了 `mongox.Database` 结构体，可用于支持注册插件，提供了一种灵活的方式在数据库操作的前后插入自定义的逻辑，从而增强应用的可扩展性和可维护性。
- **mongox.NewCollection**：更新了 `mongox.NewCollection` 方法的签名，现在另需要传入 `mongox.Database` 对象。
- **Model Field Hook 重构**：将 `model field hook` 移动至 `internal` 包，并重构以支持标签化，从而在插入和更新文档时自动填充字段值。这样可以减少重复的代码，提升代码的可维护性和可读性。

### 删除
- **全局插件**：删除了全局注册插件的使用方式，现在只能在 `mongox.Database` 上注册插件。
- **Validation Hooks**：删除了 `validation` 校验结构体的 `hook`。
- **插件初始化函数**：删除了 `mongox.InitPlugin`。

### 函数和方法用法的变化
- `mongox.NewCollection`

  ```go
  // 以前
  userColl := mongox.NewCollection[User](mongoColl)
  
  // 现在
  client := mongox.NewClient(mongoClient, &mongox.Config{})
  database := client.NewDatabase("db-test")
  
  userColl := mongox.NewCollection[User](database, "users")
  ```

- 插件注册与删除

  ```go
  // 以前
  mongox.RegisterPlugin()
  mongox.RemovePlugin()
  
  // 现在
  client := mongox.NewClient(mongoClient, &mongox.Config{})
  database := client.NewDatabase("db-test")
  
  database.RegisterPlugin()
  database.RemovePlugin()
  ```
