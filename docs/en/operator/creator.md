# Creator
The `Creator()` method allows us to obtain a new generic creator object, namely `Creator[T]`. With the methods of `Creator[T]`, we can execute relevant creation operations.

## Insert a single document
```go
insertOneResult, err := userColl.Creator().InsertOne(context.Background(), &User{Name: "Mingyong Chen", Age: 18})
```
The `InsertOne` method is used to insert a single document. The `insertOneResult` is of the type `*mongo.InsertOneResult`. The second argument of the `InsertOne` method is a pointer object of the specified generic type, i.e., `*User`.


## Insert multiple documents
```go
users := []*User{
		{Name: "Mingyong Chen", Age: 18},
		{Name: "Burt", Age: 18},
	}
insertManyResult, err := userColl.Creator().InsertMany(context.Background(), users)
```
The `InsertMany` method is used to insert multiple documents. The `insertManyResult` is of the type `*mongo.InsertManyResult`. The second argument of the `InsertMany` method is a slice object of the specified generic type, with the elements of the slice being pointer types, i.e., `[]*User`.