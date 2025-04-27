# Creator

The `Creator()` method allows us to obtain a new generic creator object, namely `Creator[T]`. With the methods of `Creator[T]`, we can execute relevant creation operations.

| Method Name           | Description                                   | Parameters                                                                                                   | Example                                                     |
| --------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| `NewCreator`          | Creates a new Creator instance                | `collection`: Mongo collection; `dbCallbacks`: Database operation callbacks; `fields`: Struct field metadata | `creator := NewCreator[User](collection, callback, fields)` |
| `InsertOne`           | Insert a single document into the collection  | `ctx`: Context; `doc`: The document to insert; `opts`: Insert options (optional)                             | `creator.InsertOne(ctx, &user)`                             |
| `InsertMany`          | Insert multiple documents into the collection | `ctx`: Context; `docs`: Array of documents; `opts`: Insert options (optional)                                | `creator.InsertMany(ctx, []*User{&user1, &user2})`          |
| `ModelHook`           | Register model hook (for reflection)          | `modelHook`: Any type of hook instance                                                                       | `creator.ModelHook(MyHook{})`                               |
| `RegisterBeforeHooks` | Register pre-insertion hook functions         | `hooks`: List of functions to execute before insertion                                                       | `creator.RegisterBeforeHooks(hook1, hook2)`                 |
| `RegisterAfterHooks`  | Register post-insertion hook functions        | `hooks`: List of functions to execute after insertion                                                        | `creator.RegisterAfterHooks(hook1, hook2)`                  |
| `GetCollection`       | Get the associated Mongo collection object    | No parameters                                                                                                | `coll := creator.GetCollection()`                           |

## Insert a single document

```go
insertOneResult, err := userColl.Creator().InsertOne(context.Background(), &User{Name: "Mingyong Chen", Age: 18})
```

- The `InsertOne` method is used to insert a single document. The `insertOneResult` is of the type `*mongo.InsertOneResult`. The second argument of the `InsertOne` method is a pointer object of the specified generic type, i.e., `*User`.
- If we need to set the `options` parameter, we can pass it as the third parameter of the method.

## Insert multiple documents

```go
users := []*User{
		{Name: "Mingyong Chen", Age: 18},
		{Name: "Burt", Age: 18},
	}
insertManyResult, err := userColl.Creator().InsertMany(context.Background(), users)
```

- The `InsertMany` method is used to insert multiple documents. The `insertManyResult` is of the type `*mongo.InsertManyResult`. The second argument of the `InsertMany` method is a slice object of the specified generic type, with the elements of the slice being pointer types, i.e., `[]*User`.
- If we need to set the `options` parameter, we can pass it as the third parameter of the method.
