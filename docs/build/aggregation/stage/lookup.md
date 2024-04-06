# 聚合管道阶段 - $lookup
通过聚合管道阶段构建器 `aggregation.StageBsonBuilder` 的方法 `Lookup` 构建 `$lookup` 阶段。

## 基础用法
假设我们要在 `orders` 集合中查找与 `users` 集合中每个用户相对应的订单，并将查找到的订单以数组形式添加到每个用户文档中。

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// mongo.Pipeline{bson.D{bson.E{Key:"$lookup", Value:bson.D{bson.E{Key:"from", Value:"orders"}, bson.E{Key:"localField", Value:"_id"}, bson.E{Key:"foreignField", Value:"userId"}, bson.E{Key:"as", Value:"userOrders"}}}}}
//[
//  {
//    "$lookup": {
//      "from": "orders",
//      "localField": "_id",
//      "foreignField": "userId",
//      "as": "userOrders"
//    }
//  }
//]
aggregation.StageBsonBuilder().Lookup("orders", "userOrders", &aggregation.LookUpOptions{
    LocalField:   "_id",
    ForeignField: "userId",
}).Build()
```

`Lookup` 方法有三个参数，分别是 `from string`, `as string`, `opt *LookUpOptions`，`from` 用于指定要连接的集合，`as` 用于指定连接后的字段名，`opt` 用于指定连接的选项，如 `LocalField`、`ForeignField`、`Let` 和 `Pipeline`。

## 高级用法
假设我们只想添加那些总金额大于100的订单到用户文档中。

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

type Order struct {
	ID         primitive.ObjectID `bson:"_id,omitempty"` // 订单的唯一标识符
	UserID     primitive.ObjectID `bson:"userId"`        // 关联的用户ID，对应 User 集合中的 _id
	TotalAmount float64           `bson:"totalAmount"`   // 订单的总金额
	OrderDate  time.Time          `bson:"orderDate"`     // 订单日期
}

// mongo.Pipeline{bson.D{bson.E{Key:"$lookup", Value:bson.D{bson.E{Key:"from", Value:"orders"}, bson.E{Key:"let", Value:bson.D{bson.E{Key:"userId", Value:"$_id"}}}, bson.E{Key:"pipeline", Value:mongo.Pipeline{bson.D{bson.E{Key:"$match", Value:bson.D{bson.E{Key:"$expr", Value:bson.D{bson.E{Key:"$and", Value:[]interface {}{bson.D{bson.E{Key:"$eq", Value:[]interface {}{"$userId", "$$userId"}}}, bson.D{bson.E{Key:"$gt", Value:[]interface {}{"$totalAmount", 100}}}}}}}}}}}}, bson.E{Key:"as", Value:"largeOrders"}}}}}
//[
//  {
//    "$lookup": {
//      "from": "orders",
//      "let": { "userId": "$_id" },
//      "pipeline": [
//        {
//          "$match": {
//            "$expr": {
//              "$and": [ { "$eq": ["$userId", "$$userId"] }, { "$gt": ["$totalAmount", 100] } ]
//            }
//          }
//        }
//      ],
//      "as": "largeOrders"
//    }
//  }
//]
aggregation.StageBsonBuilder().Lookup("orders", "largeOrders", &aggregation.LookUpOptions{
    Let: bsonx.D("userId", "$_id"),
    Pipeline: aggregation.StageBsonBuilder().Match(
        aggregation.And("$expr", aggregation.EqWithoutKey("$userId", "$$userId"), aggregation.GtWithoutKey("$totalAmount", 100)),
    ).Build(),
}).Build()
```