# 聚合管道阶段 - $bucket
通过聚合管道阶段构建器 `aggregation.StageBsonBuilder` 的方法 `Bucket` 构建 `$bucket` 阶段。

假设我们想要根据年龄将用户分为几个不同的年龄组：
- 18岁及以下
- 19到30岁
- 31到45岁
- 46岁及以上

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// mongo.Pipeline{bson.D{bson.E{Key:"$bucket", Value:bson.D{bson.E{Key:"groupBy", Value:"$age"}, bson.E{Key:"boundaries", Value:[]interface {}{0, 19, 31, 46, +Inf}}, bson.E{Key:"default", Value:"Other"}, bson.E{Key:"output", Value:bson.D{bson.E{Key:"count", Value:bson.D{bson.E{Key:"$sum", Value:1}}}, bson.E{Key:"names", Value:bson.D{bson.E{Key:"$push", Value:"$name"}}}}}}}}}
// [
//  {
//    $bucket: {
//      groupBy: "$age",  // 指定分组的依据字段
//      boundaries: [0, 19, 31, 46, Infinity],  // 定义年龄分组的边界
//      default: "Other",  // 对于不满足任何边界条件的文档，将其分配到一个默认的桶
//      output: {
//        "count": { $sum: 1 },  // 计算每个桶中的文档数
//        "names": { $push: "$name" }  // 收集每个桶中所有用户的名字
//      }
//    }
//  }
//]
aggregation.StageBsonBuilder().Bucket(
    "$age",
    []any{0, 19, 31, 46, math.Inf(1)},
    &types.BucketOptions{
        DefaultKey: "Other",
        Output:     aggregation.BsonBuilder().Sum("count", 1).Push("names", "$name").Build(),
    },
).Build()
```

`Bucket` 方法有三个参数，分别是 `groupBy any`, `boundaries []any`, `opt *types.BucketOptions`。如果需要保留不符合边界条件的文档，可以传递 `opt` 参数，设置 `default` 和 `output` 的参数，将这些文档归入到 `default` 指定的桶中，并通过 `output` 参数定义输出文档的格式。