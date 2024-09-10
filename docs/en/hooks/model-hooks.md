# Model Hooks

You can set up hook functions for models (structs), and these hook functions will be called before and after MongoDB collection operations. For example, you can process a document before and after inserting it, or handle a document after querying it.

The currently supported hooks are:

**Insert Hook**
- `BeforeInsert`: Called before inserting
- `AfterInsert`: Called after inserting

**Delete Hook**
- `BeforeDelete`: Called before deleting
- `AfterDelete`: Called after deleting

**Update Hook**
- `BeforeUpdate`: Called before updating
- `AfterUpdate`: Called after updating

**Upsert Hook**
- `BeforeUpsert`: Called before upserting
- `AfterUpsert`: Called after upserting

**Find Hook**
- `BeforeFind`: Called before querying
- `AfterFind`: Called after querying

**Note**: Model hooks will only be enabled if `EnableModelHook` is set to `true` during plugin initialization (for details, refer to [Enabling Built-in Plugins - Hooks](../plugins/plugins#enabling-built-in-plugins-hooks)).

## Insert Hook

If you want to process a document before and after inserting it, you can implement the following specific hook methods:

```go
BeforeInsert(ctx context.Context) error // Hook before insertion
AfterInsert(ctx context.Context) error  // Hook after insertion
```

Code example:

```go
type User struct {
	mongox.Model `bson:",inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

func (u *User) BeforeInsert(ctx context.Context) error {
	fmt.Println("BeforeInsert called")
	return nil
}

func (u *User) AfterInsert(ctx context.Context) error {
	fmt.Println("AfterInsert called")
	return nil
}

mongox.InitPlugin(&mongox.PluginConfig{
    EnableModelHook:        true,
})

user := &User{Name: "Mingyong Chen", Age: 18}
insertOneResult, err := userColl.Creator().InsertOne(context.Background(), user)

users := []*User{
    {Name: "Mingyong Chen", Age: 18},
    {Name: "chenmingyong", Age: 18},
}
insertManyResult, err := userColl.Creator().InsertMany(context.Background(), users)

// You can also use the ModelHook method to pass an object that implements the BeforeInsert and AfterInsert methods.
// Note: The object passed via ModelHook takes precedence over the parameters passed in the InsertOne method.
// userColl.Creator().ModelHook(user).InsertOne(context.Background(), user)
```

By passing an object that implements the `BeforeInsert` and `AfterInsert` methods via the `ModelHook` method, you can trigger these hook methods.

**Note:** The object passed via `ModelHook` takes precedence over the parameters passed in the `InsertOne` or `InsertMany` methods and will override those parameters.

## Find Hook

If you want to perform some actions before querying a document or process the document after querying it, you can implement the following specific hook methods:

```go
BeforeFind(ctx context.Context) error // Hook before querying
AfterFind(ctx context.Context) error  // Hook after querying
```

Code example:

```go
type User struct {
	mongox.Model `bson:",inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

func (u *User) AfterFind(ctx context.Context) error {
	fmt.Println("AfterFind called")
	return nil
}

type findHook struct{}

func (b *findHook) BeforeFind(ctx context.Context) error {
	fmt.Println("BeforeFind called")
	return nil
}

func (b *findHook) AfterFind(ctx context.Context) error {
	fmt.Println("AfterFind called")
	return nil
}

mongox.InitPlugin(&mongox.PluginConfig{
    EnableModelHook:        true,
})

user, err := userColl.Finder().ModelHook(new(findHook)).Filter(query.Eq("name", "Mingyong Chen")).FindOne(context.Background())

users, err := userColl.Finder().Filter(query.In("name", "Mingyong Chen", "chenmingyong")).Find(context.Background())

```

By default, enabling `EnableModelHook` will only trigger the `AfterFind` method and not the `BeforeFind` method.

To trigger the `BeforeFind` method, pass an object that implements `BeforeFind` to the `ModelHook` method.

**Note:** The object passed via `ModelHook` takes precedence over the queried `User` object and will override the queried `User` object.

## Delete Hook

If you want to perform some actions before and after deleting a document, you can implement the following specific hook methods:

```go
BeforeDelete(ctx context.Context) error // Hook before deletion
AfterDelete(ctx context.Context) error  // Hook after deletion
```

Code example:

```go
type deleteHook struct{}

func (d *deleteHook) BeforeDelete(ctx context.Context) error {
	fmt.Println("BeforeDelete called")
	return nil
}

func (d *deleteHook) AfterDelete(ctx context.Context) error {
	fmt.Println("AfterDelete called")
	return nil
}

mongox.InitPlugin(&mongox.PluginConfig{
    EnableModelHook: true,
})

deleteOneResult, err := userColl.Deleter().ModelHook(new(deleteHook)).Filter(query.Eq("name", "Mingyong Chen")).DeleteOne(context.Background())

deleteManyResult, err := userColl.Deleter().ModelHook(new(deleteHook)).Filter(query.Eq("name", "Mingyong Chen")).DeleteMany(context.Background())

```

By passing an object that implements the `BeforeDelete` and `AfterDelete` methods via the `ModelHook` method, you can trigger these hook methods.

## Update Hook

If you want to perform some actions before and after updating a document, you can implement the following specific hook methods:

```go
BeforeUpdate(ctx context.Context) error // Hook before updating
AfterUpdate(ctx context.Context) error  // Hook after updating
```

Code example:

```go
type updateHook struct{}

func (u *updateHook) BeforeUpdate(ctx context.Context) error {
	fmt.Println("BeforeUpdate called")
	return nil
}

func (u *updateHook) AfterUpdate(ctx context.Context) error {
	fmt.Println("AfterUpdate called")
	return nil
}

mongox.InitPlugin(&mongox.PluginConfig{
    EnableModelHook: true,
})

updateOneResult, err := userColl.Updater().ModelHook(new(updateHook)).Filter(query.Eq("name", "Mingyong Chen")).Updates(update.Set("age", 6)).UpdateOne(context.Background())

updateManyResult, err := userColl.Updater().ModelHook(new(updateHook)).Filter(query.In("name", "Mingyong Chen", "chenmingyong")).Updates(update.Set("age", 6)).UpdateMany(context.Background())

```

By default, `mongox` will decide whether to trigger the `BeforeUpdate` and `AfterUpdate` methods based on the `updates` parameter in the `Updates` method.

Since the `updates` parameter generally does not implement `BeforeUpdate` and `AfterUpdate` methods, these methods are usually not triggered.

To trigger `BeforeUpdate` and `AfterUpdate`, pass an object that implements the corresponding methods to the `ModelHook`.

## Upsert Hook

If you want to process a document before and after saving it, you can implement the following specific hook methods:

```go
BeforeUpsert(ctx context.Context) error // Hook before upserting
AfterUpsert(ctx context.Context) error  // Hook after upserting
```

Code example:

```go
type upsertHook struct{}

func (u *upsertHook) BeforeUpsert(ctx context.Context) error {
	fmt.Println("BeforeUpsert called")
	return nil
}

func (u *upsertHook) AfterUpsert(ctx context.Context) error {
	fmt.Println("AfterUpsert called")
	return nil
}

mongox.InitPlugin(&mongox.PluginConfig{
    EnableModelHook: true,
})

updateResult, err := userColl.Updater().ModelHook(new(upsertHook)).Filter(query.Eq("name", "Mingyong Chen")).Updates(update.Set("age", 6)).Upsert(context.Background())
```

The timing for triggering `BeforeUpsert` and `AfterUpsert` is the same as with the `UpdateOne` or `UpdateMany` methods, meaning that if the `updates` parameter does not implement the `BeforeUpsert` and `AfterUpsert` methods, these methods will not be triggered.

To trigger `BeforeUpsert` and `AfterUpsert`, pass an object that implements the corresponding methods to the `ModelHook`.