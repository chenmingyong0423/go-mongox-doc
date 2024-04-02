# 查询条件 - $in
## 函数构造
Construct the `in` query condition using the `In` function provided by the `query` package.
```go
// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$in", Value:[]string{"Mingyong Chen", "Burt"}}}}}
query.In("name", "Mingyong Chen", "Burt")
```

## 方法构造（构造器）
Construct the `in` query condition using the `Builder` constructor provided by the `query` package.
```go
// bson.D{bson.E{Key:"enabled", Value:bson.D{bson.E{Key:"$eq", Value:true}}}, bson.E{Key:"name", Value:bson.D{bson.E{Key :"$in", Value:[]interface {}{"Mingyong Chen", "Burt"}}}}}
query.BsonBuilder().Eq("enabled", true).In("name", "Mingyong Chen", "Burt").Build()
```
The constructor provided by the `query` package is suitable for constructing composite query conditions.

In addition to the `In` method, the constructor also provides specialized construction methods for different data types. These methods follow the `In{Type}` naming convention, such as `InUnit()`, `InInt()`, `InString()`, etc.