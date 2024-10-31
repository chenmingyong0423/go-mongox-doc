# Generic Collection

`mongox` provides a generic `Collection` object, which supports chainable calls to operate on `MongoDB` collections, making data operations more convenient.
## Create a Collection
```go
type User struct {
  mongox.Model `bson:"inline"`
  Name         string `bson:"name"`
  Age          int    `bson:"age"`
}
  
// Sample code, not the best way to create it
func newCollection() *mongo.Collection {
  // v1
  //client, err := mongo.Connect(context.Background(), options.Client().ApplyURI("mongodb://localhost:27017").SetAuth(options.Credential{
  //	Username:   "test",
  //	Password:   "test",
  //	AuthSource: "db-test",
  //}))

  // v2
  client, err := mongo.Connect(options.Client().ApplyURI("mongodb://localhost:27017").SetAuth(options.Credential{
      Username:   "test",
      Password:   "test",
      AuthSource: "db-test",
  }))
  if err != nil {
      panic(err)
  }
  err = client.Ping(context.Background(), readpref.Primary())
  if err != nil {
      panic(err)
  }
  collection := client.Database("db-test").Collection("test_post")
  return collection
}

// You need to create a *mongo.Collection object in advance
mongoColl := newCollection()
// Create a collection using the User struct as a generic parameter
userColl := mongox.NewCollection[User](mongoColl)
```
With the `mongox.NewCollection` function, we can specify generic parameters and create a generic `Collection` object. This way we can use the `userColl` object to manipulate the document of type `User`.