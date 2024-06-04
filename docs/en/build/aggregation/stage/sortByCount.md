# Aggregation Pipeline Stage - $sortByCount
Build the `$sortByCount` stage through the aggregation pipeline stage builder `aggregation.NewStageBuilder` using the method `SortByCount`.

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
aggregation.NewStageBuilder().SortByCount("$age").Build()
```