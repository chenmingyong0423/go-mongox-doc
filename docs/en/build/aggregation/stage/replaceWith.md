# Aggregation Pipeline Stage - $replaceWith
Build the `$replaceWith` stage through the aggregation pipeline stage builder `aggregation.StageBsonBuilder` using the method `ReplaceWith`.
Suppose we want to replace each `User` document with a new document that only contains the user's `name` and a new field `isAdult`, where the `isAdult` field indicates whether the user is an adult.

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// mongo.Pipeline{bson.D{bson.E{Key:"$addFields", Value:bson.D{bson.E{Key:"isAdult", Value:bson.D{bson.E{Key:"$gte", Value:[]interface {}{"$age", 18}}}}}}}, bson.D{bson.E{Key:"$replaceWith", Value:bson.D{bson.E{Key:"name", Value:"$name"}, bson.E{Key:"isAdult", Value:"$isAdult"}}}}}
//[
//  {
//    "$addFields": {
//      "isAdult": {
//        "$gte": ["$age", 18]
//      }
//    }
//  },
//  {
//    "$replaceWith": {
//      "name": "$name",
//      "isAdult": "$isAdult"
//    }
//  }
//]
aggregation.StageBsonBuilder().
    AddFields(aggregation.Gte("isAdult", "$age", 18)).
    ReplaceWith(bsonx.NewD().Add("name", "$name").Add("isAdult", "$isAdult").Build()).Build()
```