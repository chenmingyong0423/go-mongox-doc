# Aggregation Pipeline Stage - $group
Build the `$group` stage through the aggregation pipeline stage builder `aggregation.NewStageBuilder` using the method `Group`.

Suppose we want to group by age, and for each age group, we want to count how many users there are and also gather a list of names of users in each age group:

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

 The `Group` method takes two parameters: `id any` for specifying the field to group by, and `accumulators ...bson.E` for specifying the aggregation operators, such as `$sum`, `$push`, etc.
