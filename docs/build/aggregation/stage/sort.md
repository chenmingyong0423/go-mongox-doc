# 聚合管道阶段 - $sort
通过聚合管道阶段构建器 `aggregation.NewStageBuilder` 的方法 `Sort` 构建 `$sort` 阶段。

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
aggregation.NewStageBuilder().Sort(bsonx.NewD().Add("age", 1).Add("name", 1).Build()).Build()
```