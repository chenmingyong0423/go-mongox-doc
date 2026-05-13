# Query Condition - $jsonSchema
## Function Build
Build `$jsonSchema` with the `JsonSchema` function from the `query` package.
```go
// bson.D{bson.E{Key:"$jsonSchema", Value:schema}}
result := query.JsonSchema(schema)
```
## Method Build (Builder)
Build `$jsonSchema` with the `JsonSchema` method from `query.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$jsonSchema", Value:schema}}
result := query.NewBuilder().
    JsonSchema(schema).
    Build()
```