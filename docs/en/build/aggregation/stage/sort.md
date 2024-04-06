# Aggregation Pipeline Stage - $sort
Build the `$sort` stage through the aggregation pipeline stage builder `aggregation.StageBsonBuilder` using the method `Sort`.

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// mongo.Pipeline{bson.D{bson.E{Key:"$sort", Value:bson.D{bson.E{Key:"age", Value:1}, bson.E{Key:"name", Value:1}}}}}
//[
//  {
//    "$sort": {
//      "age": 1,
//      "name": 1
//    }
//  }
//]
aggregation.StageBsonBuilder().Sort(bsonx.NewD().Add("age", 1).Add("name", 1).Build()).Build()
```