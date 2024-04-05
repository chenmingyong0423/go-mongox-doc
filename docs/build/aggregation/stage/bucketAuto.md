# 聚合管道阶段 - $bucketAuto
通过聚合管道阶段构建器 `aggregation.StageBsonBuilder` 的方法 `BucketAuto` 构建 `$bucketAuto` 阶段。

假设我们想将用户分成 4 个年龄组，并对每个组进行一些基本的统计。

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// mongo.Pipeline{bson.D{bson.E{Key:"$bucketAuto", Value:bson.D{bson.E{Key:"groupBy", Value:"$age"}, bson.E{Key:"buckets", Value:4}, bson.E{Key:"output", Value:bson.D{bson.E{Key:"count", Value:bson.D{bson.E{Key:"$sum", Value:1}}}, bson.E{Key:"averageAge", Value:bson.D{bson.E{Key:"$avg", Value:"$age"}}}, bson.E{Key:"names", Value:bson.D{bson.E{Key:"$push", Value:"$name"}}}}}}}}}
// [
//  {
//    "$bucketAuto": {
//      "groupBy": "$age", // 指定用于分组的字段
//      "buckets": 4, // 指定想要创建的桶的数量
//      "output": {
//        "count": { "$sum": 1 }, // 每个桶中的文档数量
//        "averageAge": { "$avg": "$age" }, // 每个桶的平均年龄
//        "names": { "$push": "$name" } // 收集每个桶中所有用户的名字
//      }
//    }
//  }
//]
aggregation.StageBsonBuilder().BucketAuto(
    "$age",
    4,
    &types.BucketAutoOptions{
        Output: aggregation.BsonBuilder().
            Sum("count", 1).
            Avg("averageAge", "$age").
            Push("names", "$name").Build(),
    },
).Build()
```

`BucketAuto` 方法有三个参数，分别是 `groupBy any`, `buckets int`, `opt *types.BucketAutoOptions`。如果需要更高级的设置，可以传递 `opt` 参数，设置 `output` 的参数，定义输出文档的格式，或者设置 `granularity` 参数，指定桶的粒度。