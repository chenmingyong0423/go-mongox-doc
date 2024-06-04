# 聚合管道阶段 - $skip
通过聚合管道阶段构建器 `aggregation.NewStageBuilder` 的方法 `Skip` 构建 `$skip` 阶段。

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
aggregation.NewStageBuilder().Skip(10).Build()
```