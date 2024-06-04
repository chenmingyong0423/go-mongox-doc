# Aggregation Pipeline Stage - $unwind
Build the `$unwind` stage through the aggregation pipeline stage builder `aggregation.NewStageBuilder` using the method `Unwind`.

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
	Hobbies      []string `bson:"hobbies"`
}

// mongo.Pipeline{bson.D{bson.E{Key:"$unwind", Value:"$hobbies"}}}
//[
//  {
//    "$unwind": "$hobbies"
//  }
//]
aggregation.NewStageBuilder().Unwind("$hobbies", nil).Build()
```

The `Unwind` method has two parameters: `path string` and `opt *types.UnWindOptions`. The `opt` parameter is optional and can be `nil`. It is used to specify the `includeArrayIndex` and `preserveNullAndEmptyArrays` options.