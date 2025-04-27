# Finder

The `Finder()` method is used to obtain a new generic query object, namely `Finder[T]`. With the methods of `Finder[T]`, we can execute relevant query operations.

| Method Name           | Description                                            | Parameters                                                                                                                                                                                                    | Example                                                                                               |
| --------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `Filter`              | Set the filter conditions for the query                | `filter any`: The condition used to filter documents                                                                                                                                                          | `finder.Filter(query.Eq("name", "Mingyong Chen"))`                                                    |
| `Find`                | Query multiple documents                               | `ctx context.Context`: The context <br> `opts ...options.Lister[options.FindOptions]`: Query options                                                                                                          | `finder.Filter(query.Eq("status", "active")).Find(ctx)`                                               |
| `FindOne`             | Query a single document                                | `ctx context.Context`: The context <br> `opts ...options.Lister[options.FindOneOptions]`: Query options                                                                                                       | `finder.Filter(query.Eq("_id", "1")).FindOne(ctx)`                                                    |
| `Count`               | Count the number of matching documents                 | `ctx context.Context`: The context <br> `opts ...options.Lister[options.CountOptions]`: Count options                                                                                                         | `finder.Filter(query.Eq("status", "active")).Count(ctx)`                                              |
| `Distinct`            | Get distinct values for a specified field              | `ctx context.Context`: The context <br> `fieldName string`: The field name <br> `opts ...options.Lister[options.DistinctOptions]`: Options                                                                    | `finder.Filter(query.Eq("status", "active")).Distinct(ctx, "category")`                               |
| `DistinctWithParse`   | Get and parse distinct values for a specified field    | `ctx context.Context`: The context <br> `fieldName string`: The field name <br> `result any`: The result receiving object <br> `opts ...options.Lister[options.DistinctOptions]`: Options                     | `finder.Filter(query.Eq("status", "active")).DistinctWithParse(ctx, "category", &categories)`         |
| `FindOneAndUpdate`    | Query and update a single document                     | `ctx context.Context`: The context <br> `opts ...options.Lister[options.FindOneAndUpdateOptions]`: Options                                                                                                    | `finder.Filter(query.Eq("_id", "1")).Updates(update.Set("status", "inactive")).FindOneAndUpdate(ctx)` |
| `Limit`               | Set the maximum number of query results                | `limit int64`: The limit number                                                                                                                                                                               | `finder.Filter(query.Eq("status", "active")).Limit(10).Find(ctx)`                                     |
| `Skip`                | Set the number of results to skip                      | `skip int64`: The skip number                                                                                                                                                                                 | `finder.Filter(query.Eq("status", "active")).Skip(20).Find(ctx)`                                      |
| `Sort`                | Set the sorting order for query results                | `sort any`: The sorting condition                                                                                                                                                                             | `finder.Filter(query.Eq("status", "active")).Sort(bsonx.StringSortToBsonD("-createdAt")).Find(ctx)`   |
| `Updates`             | Set the update operation (used for `FindOneAndUpdate`) | `update any`: The update operation                                                                                                                                                                            | `finder.Filter(query.Eq("_id", "1")).Updates(update.Set("status", "inactive")).FindOneAndUpdate(ctx)` |
| `ModelHook`           | Set the model hook                                     | `modelHook any`: Custom model hook                                                                                                                                                                            | `finder.Filter(query.Eq("status", "active")).ModelHook(userHook).Find(ctx)`                           |
| `RegisterBeforeHooks` | Register pre-action hook functions                     | `hooks ...BeforeHookFn[T]`: Hook functions to execute before the query operation                                                                                                                              | `finder.RegisterBeforeHooks(validateQueryHook).Find(ctx)`                                             |
| `RegisterAfterHooks`  | Register post-action hook functions                    | `hooks ...AfterHookFn[T]`: Hook functions to execute after the query operation                                                                                                                                | `finder.RegisterAfterHooks(logQueryResultHook).Find(ctx)`                                             |
| `GetCollection`       | Get the associated collection object                   | None                                                                                                                                                                                                          | `collection := finder.GetCollection()`                                                                |
| `PreActionHandler`    | Handle pre-action (internal method)                    | `ctx context.Context`: The context <br> `globalOpContext *operation.OpContext`: Global operation context <br> `opContext *OpContext[T]`: Operation context <br> `opTypes ...operation.OpType`: Operation type | For internal use, generally not called directly                                                       |
| `PostActionHandler`   | Handle post-action (internal method)                   | `ctx context.Context`: The context <br> `globalOpContext *operation.OpContext`: Global operation context <br> `opContext *OpContext[T]`: Operation context <br> `opTypes ...operation.OpType`: Operation type | For internal use, generally not called directly                                                       |

## Find a single document

```go
user, err := userColl.Finder().Filter(query.Id("60e96214a21b1b0001c3d69e")).FindOne(context.Background())
```

- The `FindOne` method is used to query a single document. `user` is a pointer object of the specified generic type, i.e., `*User`.

- The `Filter` method allows us to specify search criteria. It accepts parameters of type `any`, meaning any type of argument can be passed in, provided they are valid query conditions. In the example above, `query.Id("60e96214a21b1b0001c3d69e")` is used to specify the search condition where `_id` equals `60e96214a21b1b0001c3d69e`. For more on building query conditions, refer to the [`query` package](../build/query/introduction).

## Find multiple documents

```go
users, err := userColl.Finder().Filter(query.In("_id", "60e96214a21b1b0001c3d69e", "80e96214a21b1b0001c3d70e")).Find(context.Background())
```

- The `Find` method is used to query multiple documents. `users` is a slice of pointer objects of the specified generic type, i.e., `[]*User`.

## Count document

```go
count, err := userColl.Finder().
		Filter(query.NewBuilder().Gt("age", 18).Lt("age", 24).Build()).
		Count(context.Background())
```

- The `Count` method is used to count the number of documents. `count` is of type `int64`.

## Distinct query

```go
// v1
//result, err := userColl.Finder().Distinct(context.Background(), "age")
//
//// you can parse the result to slices using the DistinctWithParse method
//ageSlice := make([]int, 0)
//err := userColl.Finder().DistinctWithParse(context.Background(), "age", &ageSlice)

// v2
distinctResult := userColl.Finder().Distinct(context.Background(), "age")
if distinctResult.Err() != nil {
    panic(distinctResult.Err())
}

// you can parse the result to slices using the DistinctWithParse method
ageSlice := make([]int, 0)
err := userColl.Finder().DistinctWithParse(context.Background(), "age", &ageSlice)
```

- The `Distinct` method is used to query the unique value of a specified field. `mongo-driver v1` returns a result of type `[]any`, whereas `mongo-driver v2` returns a `*mongo.DistinctResult`.

- If you wish to parse the result into a slice, you can use the `DistinctWithParse` method. This method takes a pointer to a slice as a parameter for parsing the results.

## Pagination Query

```go
users, err := userColl.Finder().Skip(10).Limit(10).Find(context.Background())
```

- `Skip(n)`: Skips the first n records in the query result. Commonly used in pagination to bypass records that have already been retrieved.
- `Limit(n)`: Restricts the maximum number of records returned by the query, helping to control data load and improve performance.

This example skips 10 data and limits the number of returned data to 10, which is the data of the second page.

## Sorting Results

```go
users, err := userColl.Finder().Sort(bson.M{"age": 1, "created_at": -1}).Find(context.Background())
```

- `Sort`：Sort the query results.
- `bson.M{"age": 1, "created_at": -1}`：Sort the result by `age` in ascending order, and if `age` is the same, sort the result by `created_at` in descending order.
