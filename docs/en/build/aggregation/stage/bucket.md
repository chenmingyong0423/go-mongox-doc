# Aggregation Pipeline Stage - $bucket
Build the `$bucket` stage through the aggregation pipeline stage builder `aggregation.StageBsonBuilder` using the method `Bucket`.


Suppose we want to group users into different age groups:
- 18 and under
- 19 to 30
- 31 to 45
- 46 and over

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
//      groupBy: "$age",  // Specifies the field to group by
//      boundaries: [0, 19, 31, 46, Infinity],  // Defines the boundaries for age groups
//      default: "Other",  // Documents that do not match any boundary condition are assigned to a default bucket
//      output: {
//        "count": { $sum: 1 },  // Calculates the number of documents in each bucket
//        "names": { $push: "$name" }  // Collects the names of all users in each bucket
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

The `Bucket` method takes three parameters: `groupBy any`, `boundaries []any`, and `opt *types.BucketOptions`. To retain documents that do not meet any boundary condition, you can pass the `opt` parameter, setting the `default` and `output` parameters to include these documents in the specified default bucket. The `output` parameter defines the format of the output documents.

