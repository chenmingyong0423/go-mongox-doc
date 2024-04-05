# Aggregation Pipeline Stage - $bucketAuto
Build the `$bucketAuto` stage through the aggregation pipeline stage builder `aggregation.StageBsonBuilder` using the method `BucketAuto`.

Suppose we want to divide users into 4 age groups and perform some basic statistics on each group:

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
//      "groupBy": "$age", // Specifies the field for grouping
//      "buckets": 4, // Specifies the number of buckets to create
//      "output": {
//        "count": { "$sum": 1 }, // Number of documents in each bucket
//        "averageAge": { "$avg": "$age" }, // Average age in each bucket
//        "names": { "$push": "$name" } // Collects the names of all users in each bucket
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

The `BucketAuto` method takes three parameters: `groupBy any`, `buckets int`, and `opt *types.BucketAutoOptions`. For advanced settings, you can pass the `opt` parameter, setting the `output` parameters to define the format of the output documents, or set the `granularity` parameter to specify the granularity of the buckets.