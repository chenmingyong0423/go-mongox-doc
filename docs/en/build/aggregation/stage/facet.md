# Aggregation Pipeline Stage - $facet
Build the `$facet` stage through the aggregation pipeline stage builder `aggregation.NewStageBuilder` using the method `Facet`.

Suppose we want to perform the following operations based on the `User` collection:

1. Calculate the total number of users.
2. Group by age and count the number of users in each age group.
3. Find the names of all users older than 18.

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

// mongo.Pipeline{bson.D{bson.E{Key:"$facet", Value:bson.D{bson.E{Key:"totalUsers", Value:mongo.Pipeline{bson.D{bson.E{Key:"$count", Value:"totalUsers"}}}}, bson.E{Key:"ageGroups", Value:mongo.Pipeline{bson.D{bson.E{Key:"$group", Value:bson.D{bson.E{Key:"_id", Value:"$age"}, bson.E{Key:"count", Value:bson.D{bson.E{Key:"$sum", Value:1}}}}}}, bson.D{bson.E{Key:"$sort", Value:bson.D{bson.E{Key:"_id", Value:1}}}}}}, bson.E{Key:"over18", Value:mongo.Pipeline{bson.D{bson.E{Key:"$match", Value:bson.D{bson.E{Key:"age", Value:bson.D{bson.E{Key:"$gt", Value:[]interface {}{18}}}}}}}, bson.D{bson.E{Key:"$project", Value:bson.D{bson.E{Key:"name", Value:1}, bson.E{Key:"age", Value:1}}}}}}}}}}
// [
//  {
//    "$facet": {
//      "totalUsers": [
//     	  { "$count": "totalUsers" }
//    	],
//      "ageGroups": [
//     	  { "$group": { "_id": "$age", "count": { "$sum": 1 } } },
//        { "$sort": { "_id": 1 } }
//       ],
//      "over18": [
//        { "$match": { "age": { "$gt": 18 } } },
//        { "$project": { "name": 1, "age": 1 } }
//      ]
//    }
//  }
// ]
aggregation.NewStageBuilder().Facet(
    bsonx.NewD().
        Add("totalUsers", aggregation.NewStageBuilder().Count("totalUsers").Build()).
        Add(
            "ageGroups",
            aggregation.NewStageBuilder().
                Group("$age", aggregation.Sum("count", 1)...).
                Sort(bsonx.D("_id", 1)).Build(),
        ).
        Add(
            "over18",
            aggregation.NewStageBuilder().
                Match(aggregation.Gt("age", 18)).
                Project(bsonx.NewD().Add("name", 1).Add("age", 1).Build()).Build()).
        Build(),
).Build()
```