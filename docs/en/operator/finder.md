# Finder
The `Finder()` method is used to obtain a new generic query object, namely `Finder[T]`. With the methods of `Finder[T]`, we can execute relevant query operations.

## Find a single document
```go
user, err := userColl.Finder().Filter(query.Id("60e96214a21b1b0001c3d69e")).FindOne(context.Background())
```
- The `FindOne` method is used to query a single document. `user` is a pointer object of the specified generic type, i.e., `*User`.

- The `Filter` method allows us to specify search criteria. It accepts parameters of type `any`, meaning any type of argument can be passed in, provided they are valid query conditions. In the example above, `query.Id("60e96214a21b1b0001c3d69e")` is used to specify the search condition where `_id` equals `60e96214a21b1b0001c3d69e`. For more on building query conditions, refer to the `query` package.

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