# 聚合管道阶段 - $count
通过聚合管道阶段构建器 `aggregation.StageBsonBuilder` 的方法 `Count` 构建 `$count` 阶段。

假设我们想知道集合中总共有多少个用户记录。

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