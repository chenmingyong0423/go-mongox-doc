# Deleter
The `Deleter()` method allows us to obtain a new generic deleter object, namely `Deleter[T]`. With the methods of `Deleter[T]`, we can execute relevant deletion operations.

# Delete a single document
```go
deleteResult, err := userColl.Deleter().Filter(query.Id("60e96214a21b1b0001c3d69e")).DeleteOne(context.Background())
```
The `DeleteOne` method is used to delete a single document. The `deleteResult` is of type `*mongo.DeleteResult`.

# Delete multiple documents
```go
deleteResult, err := userColl.Deleter().Filter(query.In("_id", "60e96214a21b1b0001c3d69e", "80e96214a21b1b0001c3d70e")).DeleteMany(context.Background())
```
The `DeleteMany` method is used to delete multiple documents. The `deleteResult` is of type `*mongo.DeleteResult`.