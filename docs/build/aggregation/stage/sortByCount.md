# 聚合管道阶段 - $sortByCount
通过聚合管道阶段构建器 `aggregation.NewStageBuilder` 的方法 `SortByCount` 构建 `$sortByCount` 阶段。

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// mongo.Pipeline{bson.D{bson.E{Key:"$sortByCount", Value:"$age"}}}
//[
//  {
//    "$sortByCount": "$age"
//  }
//]
aggregation.NewStageBuilder().SortByCount("$age").Build()
```