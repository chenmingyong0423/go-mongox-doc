# Aggregation Pipeline Stage - $lookup
Build the `$lookup` stage through the aggregation pipeline stage builder `aggregation.NewStageBuilder` using the method `Lookup`.

## Basic Usage
Suppose we want to find orders in the `orders` collection that correspond to each user in the `users` collection and add the found orders as an array to each user document.

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
aggregation.NewStageBuilder().Lookup("orders", "userOrders", &aggregation.LookUpOptions{
    LocalField:   "_id",
    ForeignField: "userId",
}).Build()
```

The `Lookup` method has three parameters: `from string`, `as string`, and `opt *LookUpOptions`. `from` specifies the collection to join, `as` specifies the name of the field for the joined data, and `opt` specifies join options such as `LocalField`, `ForeignField`, `Let`, and `Pipeline`.

## Advanced Usage
Suppose we only want to add orders with a total amount greater than 100 to the user documents.

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

type Order struct {
    ID          primitive.ObjectID `bson:"_id,omitempty"` // Unique identifier for the order
    UserID      primitive.ObjectID `bson:"userId"`        // Associated user ID, corresponding to the _id in the User collection
    TotalAmount float64            `bson:"totalAmount"`   // Total amount of the order
    OrderDate   time.Time          `bson:"orderDate"`     // Date of the order
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
aggregation.NewStageBuilder().Lookup("orders", "largeOrders", &aggregation.LookUpOptions{
    Let: bsonx.D("userId", "$_id"),
    Pipeline: aggregation.NewStageBuilder().Match(
        aggregation.And("$expr", aggregation.EqWithoutKey("$userId", "$$userId"), aggregation.GtWithoutKey("$totalAmount", 100)),
    ).Build(),
}).Build()
```

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
aggregation.NewStageBuilder().Lookup("orders", "userOrders", &aggregation.LookUpOptions{
    LocalField:   "_id",
    ForeignField: "userId",
}).Build()
```