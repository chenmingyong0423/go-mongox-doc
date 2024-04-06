# 聚合管道阶段 - $replaceWith
通过聚合管道阶段构建器 `aggregation.StageBsonBuilder` 的方法 `ReplaceWith` 构建 `$replaceWith` 阶段。

假设我们想要将每个 `User` 文档替换为一个新的文档，这个文档只包含用户的 `name` 和一个新字段 `isAdult`，其中 `isAdult` 字段标识用户是否成年。

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// mongo.Pipeline{bson.D{bson.E{Key:"$addFields", Value:bson.D{bson.E{Key:"isAdult", Value:bson.D{bson.E{Key:"$gte", Value:[]interface {}{"$age", 18}}}}}}}, bson.D{bson.E{Key:"$replaceWith", Value:bson.D{bson.E{Key:"name", Value:"$name"}, bson.E{Key:"isAdult", Value:"$isAdult"}}}}}
//[
//  {
//    "$addFields": {
//      "isAdult": {
//        "$gte": ["$age", 18]
//      }
//    }
//  },
//  {
//    "$replaceWith": {
//      "name": "$name",
//      "isAdult": "$isAdult"
//    }
//  }
//]
aggregation.StageBsonBuilder().
    AddFields(aggregation.Gte("isAdult", "$age", 18)).
    ReplaceWith(bsonx.NewD().Add("name", "$name").Add("isAdult", "$isAdult").Build()).Build()
```