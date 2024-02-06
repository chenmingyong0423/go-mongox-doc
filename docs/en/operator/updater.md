# Updater
The `Updater()` method is used to obtain a new generic updater object, namely `Updater[T]`. With the methods of `Updater[T]`, we can execute relevant update operations.

# Update a single document
```go
updateResult, err := userColl.Updater().
		Filter(query.Id("60e96214a21b1b0001c3d69e")).
		Updates(update.Set("name", "Mingyong Chen")).
		UpdateOne(context.Background())
```
The `UpdateOne` method is used to update a single document. The `updateResult` is of type `*mongo.UpdateResult`.

Through the `Updates` method, we can specify the operations for the update. This method accepts parameters of type `any`, allowing for any type of argument to be passed in, provided they conform to a valid update statement structure. In the example provided, `update.Set("name", "Mingyong Chen")` is used to specify that the `name` field should be updated to "Mingyong Chen". For more constructions of update statements, refer to the `update` package.

# Update multiple documents
```go
updateResult, err := userColl.Updater().
		Updates(update.Set("name", "Mingyong Chen")).
		UpdateMany(context.Background())
```
The `UpdateMany` method is used for updating multiple documents. The `updateResult` is of type `*mongo.UpdateResult`.

# Upsert operation
```go
updateResult, err := userColl.Updater().
		Filter(query.Id("60e96214a21b1b0001c3d69e")).
		Replacement(&User{Name: "Mingyong Chen", Age: 18}).
		Upsert(context.Background())
```
The `Upsert` method is used to update or insert a single document. The `updateResult` is of type `*mongo.UpdateResult`. This method should be used in conjunction with the `Replacement` method, which specifies the document for replacement.