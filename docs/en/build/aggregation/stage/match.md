# Aggregation Pipeline Stage - $match
Build the `$match` stage through the aggregation pipeline stage builder `aggregation.StageBsonBuilder` using the method `Match`.

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// mongo.Pipeline{bson.D{bson.E{Key:"$match", Value:bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gt", Value:[]interface {}{18}}}}}}}}
//[
//  {
//    "$match": {
//      "age": { "$gt": 18 }
//    }
//  }
//]
aggregation.StageBsonBuilder().Match(aggregation.Gt("age", 18)).Build()
```