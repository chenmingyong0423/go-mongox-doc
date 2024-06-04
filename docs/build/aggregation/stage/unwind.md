# 聚合管道阶段 - $unwind
通过聚合管道阶段构建器 `aggregation.NewStageBuilder` 的方法 `Unwind` 构建 `$unwind` 阶段。

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

`Unwind` 方法有两个参数，分别是 `path string` 和 `opt *types.UnWindOptions`。`opt` 参数是可选的，可以为 `nil`。它用于指定 `includeArrayIndex` 和 `preserveNullAndEmptyArrays` 选项。