# 聚合管道阶段 - $project
通过聚合管道阶段构建器 `aggregation.StageBsonBuilder` 的方法 `Project` 构建 `$project` 阶段。

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// mongo.Pipeline{bson.D{bson.E{Key:"$project", Value:bson.D{bson.E{Key:"_id", Value:0}, bson.E{Key:"name", Value:1}, bson.E{Key:"isAdult", Value:bson.D{bson.E{Key:"$gte", Value:[]interface {}{"$age", 18}}}}}}}}
//[
//  {
//    "$project": {
//      "_id": 0, // 不显示 _id 字段
//      "name": 1, // 显示 name 字段
//      "isAdult": {
//        "$gte": ["$age", 18] // 计算 isAdult 字段，如果年龄大于等于 18，则为 true
//      }
//    }
//  }
//]
aggregation.StageBsonBuilder().Project(
    aggregation.BsonBuilder().AddKeyValues("_id", 0).
        AddKeyValues("name", 1).
        Gte("isAdult", "$age", 18).Build(),
).Build()
```