# 聚合管道阶段 - $addFields
通过聚合管道阶段构建器 `aggregation.StageBsonBuilder` 的方法 `AddFields` 构建 `$addFields` 阶段。
```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// mongo.Pipeline{bson.D{bson.E{Key:"$addFields", Value:bson.D{bson.E{Key:"isAdult", Value:bson.D{bson.E{Key:"$gte", Value:[]interface {}{18}}}}, bson.E{Key:"birthYear", Value:bson.D{bson.E{Key:"$subtract", Value:[]interface {}{2024, "$age"}}}}}}}}
// [
//  {
//    "$addFields": {
//      "isAdult": {
//        "$gte": ["$age", 18]
//      },
//      "birthYear": {
//        "$subtract": [2024, "$age"]
//      }
//    }
//  }
//]
aggregation.StageBsonBuilder().AddFields(
    aggregation.BsonBuilder().
        // 如果年龄大于或等于 18，isAdult 为 true
        Gte("isAdult", 18).
        // 计算出生年份
        Subtract("birthYear", 2024, "$age").Build(),
).Build()
```