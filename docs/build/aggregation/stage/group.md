# 聚合管道阶段 - $group
通过聚合管道阶段构建器 `aggregation.NewStageBuilder` 的方法 `Group` 构建 `$group` 阶段。

假设我们想根据年龄来分组，并计算每个年龄组有多少用户，同时获取每个年龄组中用户的名称列表

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// mongo.Pipeline{bson.D{bson.E{Key:"$group", Value:bson.D{bson.E{Key:"_id", Value:"$age"}, bson.E{Key:"count", Value:bson.D{bson.E{Key:"$sum", Value:1}}}, bson.E{Key:"names", Value:bson.D{bson.E{Key:"$push", Value:"$name"}}}}}}}
//[
//  {
//    "$group": {
//      "_id": "$age",
//      "count": { "$sum": 1 },
//      "names": { "$push": "$name" }
//    }
//  }
//]
aggregation.NewStageBuilder().Group("$age",
    aggregation.NewBuilder().Sum("count", 1).Push("names", "$name").Build()...,
).Build()
```

`Group` 方法有两个参数，分别是 `id any`, `accumulators ...bson.E`，`id` 用于指定分组的字段，`accumulators` 用于指定聚合操作符，如 `$sum`、`$push` 等。