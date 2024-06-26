# Aggregation Pipeline Stage - $addFields
Build the `$addFields` stage through the aggregation pipeline stage builder `aggregation.NewStageBuilder` using the method `AddFields`.

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// mongo.Pipeline{bson.D{bson.E{Key:"$addFields", Value:bson.D{bson.E{Key:"isAdult", Value:bson.D{bson.E{Key:"$gte", Value:[]interface {}{"$age", 18}}}}, bson.E{Key:"birthYear", Value:bson.D{bson.E{Key:"$subtract", Value:[]interface {}{2024, "$age"}}}}}}}}
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
aggregation.NewStageBuilder().AddFields(
    aggregation.NewBuilder().
        // If age is greater than or equal to 18, isAdult is true
        Gte("isAdult", "$age", 18).
        // Calculate the birth year
        Subtract("birthYear", 2024, "$age").Build(),
).Build()
```