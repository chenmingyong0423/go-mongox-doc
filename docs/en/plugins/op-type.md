# OpType Plugin Types

The `OpType` plugin type is used to specify the type of the plugin when registering it. It is defined as follows:

```go
type OpType string
```

The `OpType` plugin type defines the following constants:

| Type                             | Description                            |
|----------------------------------|----------------------------------------|
| `operation.OpTypeBeforeInsert`   | Executes before inserting a document   |
| `operation.OpTypeAfterInsert`    | Executes after inserting a document    |
| `operation.OpTypeBeforeUpdate`   | Executes before updating a document    |
| `operation.OpTypeAfterUpdate`    | Executes after updating a document     |
| `operation.OpTypeBeforeDelete`   | Executes before deleting a document    |
| `operation.OpTypeAfterDelete`    | Executes after deleting a document     |
| `operation.OpTypeBeforeUpsert`   | Executes before saving a document      |
| `operation.OpTypeAfterUpsert`    | Executes after saving a document       |
| `operation.OpTypeBeforeFind`     | Executes before querying a document    |
| `operation.OpTypeAfterFind`      | Executes after querying a document     |
| `operation.OpTypeBeforeAny`      | Executes before any operation          |
| `operation.OpTypeAfterAny`       | Executes after any operation           |

Each of these operation types corresponds to a specific phase in the lifecycle of database operations, allowing you to hook into different stages for custom logic processing.