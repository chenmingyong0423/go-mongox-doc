# Aggregation Pipeline Stage - $project
Build the `$project` stage through the aggregation pipeline stage builder `aggregation.NewStageBuilder` using the method `Project`.

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
//      "_id": 0, // Do not display the _id field
//      "name": 1, // Display the name field
//      "isAdult": {
//        "$gte": ["$age", 18] // Calculate the isAdult field, true if age is greater than or equal to 18
//      }
//    }
//  }
//]
aggregation.NewStageBuilder().Project(
    aggregation.NewBuilder().AddKeyValues("_id", 0).
        AddKeyValues("name", 1).
        Gte("isAdult", "$age", 18).Build(),
).Build()
```