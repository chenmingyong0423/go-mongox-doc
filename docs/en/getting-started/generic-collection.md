# Generic Collection

`mongox` provides a generic `Collection` object, which allows you to interact with MongoDB collections using method chaining, making data operations more convenient.

## Creating a Generic Collection

```go
type User struct {
  mongox.Model `bson:"inline"`
  Name         string `bson:"name"`
  Age          int    `bson:"age"`
}

// Example code for reference
func newMongoClient() (*mongo.Client, error) {
  client, err := mongo.Connect(options.Client().ApplyURI("mongodb://localhost:27017").SetAuth(options.Credential{
      Username:   "test",
      Password:   "test",
      AuthSource: "db-test",
  }))
  if err != nil {
      return nil, err
  }
  err = client.Ping(context.Background(), readpref.Primary())
  if err != nil {
      panic(err)
  }
  return client, nil
}

mongoClient, err := newMongoClient()
if err != nil {
  panic(err)
}
client := mongox.NewClient(mongoClient, &mongox.Config{})
database := client.NewDatabase("db-test")

userColl := mongox.NewCollection[User](database, "users")
```

Using the `mongox.NewCollection` function, we can specify the generic type and create a generic `Collection` object. This allows us to perform operations on documents of type `User` using the `userColl` object.

Global plugins registered via the `database` object are automatically passed to the `userColl` object, so the global plugins will apply to operations on `userColl`.