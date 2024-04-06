# 聚合管道阶段 - $limit
通过聚合管道阶段构建器 `aggregation.StageBsonBuilder` 的方法 `Limit` 构建 `$limit` 阶段。

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