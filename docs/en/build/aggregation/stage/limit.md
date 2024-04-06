# Aggregation Pipeline Stage - $limit
Build the `$limit` stage through the aggregation pipeline stage builder `aggregation.StageBsonBuilder` using the method `Limit`.

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// mongo.Pipeline{bson.D{bson.E{Key:"$limit", Value:5}}}
//[
//  {
//    "$limit": 5
//  }
//]
aggregation.StageBsonBuilder().Limit(5).Build()
```