# 聚合管道阶段 - $match
通过聚合管道阶段构建器 `aggregation.NewStageBuilder` 的方法 `Match` 构建 `$match` 阶段。

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
aggregation.NewStageBuilder().Match(aggregation.Gt("age", 18)).Build()
```