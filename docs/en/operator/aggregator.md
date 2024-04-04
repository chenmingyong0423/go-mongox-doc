# Aggregator
The `Aggregator()` method allows us to obtain a new generic aggregator object, namely `Creator[T]`. With the methods of `Creator[T]`, we can execute relevant aggregation operations.

The aggregator implements three methods:
- `Pipeline()` is used to set up the aggregation pipeline.
- `Aggregate()` executes the aggregation operation, returning a query result of the same type as `T`.
- `AggregateWithParse()` is also used to perform aggregation operations, but it is used in different scenarios. When the type of the aggregation result does not match `T`, the `AggregateWithParse()` method can be used to parse the result into a specified object.

This article demonstrates the usage of these three methods through two examples. However, the core of aggregation operations lies in building the aggregation pipeline. For more information on this aspect, please refer to [build of aggregation stages](../build/aggregation/stage/introduction).

## Ignoring Specific Fields
```go
// Ignoring the age field, query only by name
users, err := userColl.Aggregator().
    Pipeline(aggregation.StageBsonBuilder().Project(bsonx.M("age", 0)).Build()).
    Aggregate(context.Background())
```
The `Pipeline()` method is for setting up the **pipeline**, and the `Aggregate()` method executes the aggregation operation.

By using the `StageBsonBuilder()` builder from the `aggregation` package, we have built a `Project` stage to exclude the `age` field.

## Renaming Fields
```go
// Field renaming, aggregate query and parse the result
type RealUser struct {
    mongox.Model `bson:"inline"`
    RealName     string `bson:"real_name"`
    Age          int    `bson:"age"`
}
var results []*RealUser
err := userColl.Aggregator().
    Pipeline(aggregation.StageBsonBuilder().Project(
        bsonx.NewD().Add("real_name", "$name").Add("age", 1).Build(),
    ).Build()).
    AggregateWithParse(context.Background(), &results)
```