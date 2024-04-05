# 聚合管道阶段 - $facet
通过聚合管道阶段构建器 `aggregation.StageBsonBuilder` 的方法 `Facet` 构建 `$facet` 阶段。

假设我们想基于 `User` 集合执行以下操作：

1. 计算总用户数。
2. 按年龄分组，统计每个年龄段的用户数。
3. 找出所有年龄大于18的用户的名字。

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// mongo.Pipeline{bson.D{bson.E{Key:"$facet", Value:bson.D{bson.E{Key:"totalUsers", Value:mongo.Pipeline{bson.D{bson.E{Key:"$count", Value:"totalUsers"}}}}, bson.E{Key:"ageGroups", Value:mongo.Pipeline{bson.D{bson.E{Key:"$group", Value:bson.D{bson.E{Key:"_id", Value:"$age"}, bson.E{Key:"count", Value:bson.D{bson.E{Key:"$sum", Value:1}}}}}}, bson.D{bson.E{Key:"$sort", Value:bson.D{bson.E{Key:"_id", Value:1}}}}}}, bson.E{Key:"over18", Value:mongo.Pipeline{bson.D{bson.E{Key:"$match", Value:bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gt", Value:[]interface {}{18}}}}}}}, bson.D{bson.E{Key:"$project", Value:bson.D{bson.E{Key:"name", Value:1}, bson.E{Key:"age", Value:1}}}}}}}}}}
// [
//  {
//    "$facet": {
//      "totalUsers": [
//     	  { "$count": "totalUsers" }
//    	],
//      "ageGroups": [
//     	  { "$group": { "_id": "$age", "count": { "$sum": 1 } } },
//        { "$sort": { "_id": 1 } }
//       ],
//      "over18": [
//        { "$match": { "age": { "$gt": 18 } } },
//        { "$project": { "name": 1, "age": 1 } }
//      ]
//    }
//  }
// ]
aggregation.StageBsonBuilder().Facet(
    bsonx.NewD().
        Add("totalUsers", aggregation.StageBsonBuilder().Count("totalUsers").Build()).
        Add(
            "ageGroups",
            aggregation.StageBsonBuilder().
                Group("$age", aggregation.Sum("count", 1)...).
                Sort(bsonx.D("_id", 1)).Build(),
        ).
        Add(
            "over18",
            aggregation.StageBsonBuilder().
                Match(aggregation.Gt("age", 18)).
                Project(bsonx.NewD().Add("name", 1).Add("age", 1).Build()).Build()).
        Build(),
).Build()
```