# Aggregation Pipeline Stage - $skip
Build the `$skip` stage through the aggregation pipeline stage builder `aggregation.StageBsonBuilder` using the method `Skip`.

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// mongo.Pipeline{bson.D{bson.E{Key:"$skip", Value:10}}}
//[
//  {
//    "$skip": 10
//  }
//]
aggregation.StageBsonBuilder().Skip(10).Build()
```