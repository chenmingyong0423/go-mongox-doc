# Aggregation Pipeline Stage - $count
Build the `$count` stage through the aggregation pipeline stage builder `aggregation.StageBsonBuilder` using the method `Count`.

Suppose we want to know how many total user records there are in the collection:

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// mongo.Pipeline{bson.D{bson.E{Key:"$count", Value:"totalUsers"}}}
// [
//  {
//    "$count": "totalUsers"
//  }
// ]
aggregation.StageBsonBuilder().Count("totalUsers").Build()
```