# Aggregation Pipeline Stage - $sortByCount
Build the `$sortByCount` stage through the aggregation pipeline stage builder `aggregation.StageBsonBuilder` using the method `SortByCount`.

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// mongo.Pipeline{bson.D{bson.E{Key:"$sortByCount", Value:"$age"}}}
//[
//  {
//    "$sortByCount": "$age"
//  }
//]
aggregation.StageBsonBuilder().SortByCount("$age").Build()
```