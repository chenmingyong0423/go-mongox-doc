# Query Condition - $in
## Function Build
Build the `in` query condition using the `In` function provided by the `query` package.
```go
// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$in", Value:[]string{"Mingyong Chen", "Burt"}}}}}
query.In("name", "Mingyong Chen", "Burt")
```

## Method Build (Builder)
Build the `in` query condition using the `Builder` builder provided by the `query` package.
```go
// bson.D{bson.E{Key:"enabled", Value:bson.D{bson.E{Key:"$eq", Value:true}}}, bson.E{Key:"name", Value:bson.D{bson.E{Key :"$in", Value:[]interface {}{"Mingyong Chen", "Burt"}}}}}
query.BsonBuilder().Eq("enabled", true).In("name", "Mingyong Chen", "Burt").Build()
```
The builder provided by the `query` package is suitable for building composite query conditions.

In addition to the `In` method, the builder also provides specialized build methods for different data types. These methods follow the `In{Type}` naming convention, such as `InUnit()`, `InInt()`, `InString()`, etc.