# OpType 插件类型
`OpType` 插件类型用于在注册插件时指定插件的类型，该类型定义如下所示：
```go
type OpType string
```

`OpType` 插件类型定义了以下常量：

| 类型                             | 描述        | 
      |--------------------------------|-----------|
| `operation.OpTypeBeforeInsert` | 在插入文档之前执行 |
| `operation.OpTypeAfterInsert`  | 在插入文档之后执行 |
| `operation.OpTypeBeforeUpdate` | 在更新文档之前执行 |
| `operation.OpTypeAfterUpdate`  | 在更新文档之后执行 |
| `operation.OpTypeBeforeDelete` | 在删除文档之前执行 |
| `operation.OpTypeAfterDelete`  | 在删除文档之后执行 |
| `operation.OpTypeBeforeUpsert` | 在保存文档之前执行 |
| `operation.OpTypeAfterUpsert`  | 在保存文档之后执行 |
| `operation.OpTypeBeforeFind`   | 在查询文档之后执行 |
| `operation.OpTypeAfterFind`    | 在查询文档之后执行 |
| `operation.OpTypeBeforeAny`    | 在任何操作之前执行 |
| `operation.OpTypeAfterAny`     | 在任何操作之后执行 |