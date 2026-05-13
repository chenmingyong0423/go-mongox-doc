# Query Condition - $text
## Function Build
Build `$text` with the `Text` function from the `query` package.
```go
// bson.D{bson.E{Key:"$text", Value:bson.D{bson.E{Key:"$search", Value:"mongodb"}, bson.E{Key:"$language", Value:"english"}}}}
result := query.Text("mongodb", &query.TextOptions{Language: "english"})
```
## Method Build (Builder)
Build `$text` with the `Text` method from `query.NewBuilder()`.
```go
// bson.D{bson.E{Key:"$text", Value:bson.D{bson.E{Key:"$search", Value:"mongodb"}, bson.E{Key:"$language", Value:"english"}}}}
result := query.NewBuilder().
    Text("mongodb", "english", false, false).
    Build()
```