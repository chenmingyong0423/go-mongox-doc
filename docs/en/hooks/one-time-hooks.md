# One-time Hooks
`go mongox` supports one-time hooks, allowing you to perform actions before and after querying, inserting, deleting, updating, and saving documents.

## Insert Operations
After creating an inserter using the `Creator()` method, you can register before and after insert hooks by calling the `RegisterBeforeHooks` and `RegisterAfterHooks` methods.

### Inserting a Single Document
```go
insertOneResult, err := userColl.Creator().
    RegisterBeforeHooks(func(ctx context.Context, opContext *creator.OpContext[User], opts ...any) error {
        fmt.Println("BeforeHook called")
        fmt.Println(opContext.Doc)
        fmt.Println(opContext.Col != nil)
        return nil
    }).
    RegisterAfterHooks(func(ctx context.Context, opContext *creator.OpContext[User], opts ...any) error {
        fmt.Println("AfterHook called")
        fmt.Println(opContext.Doc)
        fmt.Println(opContext.Col != nil)
        return nil
    }).
    InsertOne(context.Background(), &User{Name: "Mingyong Chen", Age: 18})
```
You can access the document to be inserted (`Doc`) and the `*mongo.Collection` object (`Col`) via the `opContext` parameter.

### Inserting Multiple Documents
```go
insertManyResult, err := userColl.Creator().
    RegisterBeforeHooks(func(ctx context.Context, opContext *creator.OpContext[User], opts ...any) error {
        fmt.Println("BeforeHook called")
        fmt.Println(opContext.Docs)
        fmt.Println(opContext.Col != nil)
        return nil
    }).
    RegisterAfterHooks(func(ctx context.Context, opContext *creator.OpContext[User], opts ...any) error {
        fmt.Println("AfterHook called")
        fmt.Println(opContext.Docs)
        fmt.Println(opContext.Col != nil)
        return nil
    }).
    InsertMany(context.Background(), []*User{
        {Name: "Mingyong Chen", Age: 18},
        {Name: "Burt", Age: 18},
    })
```
In the `RegisterBeforeHooks` and `RegisterAfterHooks` methods, you can access the document collection to be inserted (`Docs`) and the `*mongo.Collection` object (`Col`) via the `opContext` parameter.

## Query Operations
After creating a finder using the `Finder()` method, you can register before and after query hooks by calling the `RegisterBeforeHooks` and `RegisterAfterHooks` methods.

### Querying a Single Document
```go
user, err := userColl.Finder().
    RegisterBeforeHooks(func(ctx context.Context, opContext *finder.OpContext, opts ...any) error {
        fmt.Println("BeforeHook called")
        fmt.Println(opContext.Filter)
        return nil
    }).
    RegisterAfterHooks(func(ctx context.Context, opContext *finder.AfterOpContext[User], opts ...any) error {
        fmt.Println("AfterHook called")
        fmt.Println(opContext.Filter)
        fmt.Println(opContext.Doc)
        return nil
    }).
    Filter(query.Eq("name", "Mingyong Chen")).
    FindOne(context.Background())
```
In the `RegisterBeforeHooks` method, you can access the query filter (`Filter`) and the `*mongo.Collection` object (`Col`) via the `opContext` parameter.

In the `RegisterAfterHooks` method, you can access the query filter (`Filter`), the query result (`Doc`), and the `*mongo.Collection` object (`Col`) via the `opContext` parameter.

### Querying Multiple Documents
```go
users, err := userColl.Finder().
    RegisterBeforeHooks(func(ctx context.Context, opContext *finder.OpContext, opts ...any) error {
        fmt.Println("BeforeHook called")
        fmt.Println(opContext.Filter)
        fmt.Println(opContext.Col != nil)
        return nil
    }).
    RegisterAfterHooks(func(ctx context.Context, opContext *finder.AfterOpContext[User], opts ...any) error {
        fmt.Println("AfterHook called")
        fmt.Println(opContext.Filter)
        fmt.Println(opContext.Docs)
        fmt.Println(opContext.Col != nil)
        return nil
    }).
    Filter(query.In("name", "Mingyong Chen", "chenmingyong")).
    Find(context.Background())
```
In the `RegisterBeforeHooks` method, you can access the query filter (`Filter`) and the `*mongo.Collection` object (`Col`) via the `opContext` parameter.

In the `RegisterAfterHooks` method, you can access the query filter (`Filter`), the query result (`Doc`), and the `*mongo.Collection` object (`Col`) via the `opContext` parameter.

## Update Operations
After creating an updater using the `Updater()` method, you can register before and after update hooks by calling the `RegisterBeforeHooks` and `RegisterAfterHooks` methods.

### Updating a Single Document
```go
updateResult, err := userColl.Updater().
    RegisterBeforeHooks(func(ctx context.Context, opContext *updater.BeforeOpContext, opts ...any) error {
        fmt.Println("BeforeHook called")
        fmt.Println(opContext.Filter)
        fmt.Println(opContext.Updates)
        fmt.Println(opContext.Col != nil)
        return nil
    }).
    RegisterAfterHooks(func(ctx context.Context, opContext *updater.AfterOpContext, opts ...any) error {
        fmt.Println("AfterHook called")
        fmt.Println(opContext.Filter)
        fmt.Println(opContext.Updates)
        fmt.Println(opContext.Col != nil)
        return nil
    }).
    Filter(query.Eq("name", "Mingyong Chen")).
    Updates(update.Set("age", 6)).
    UpdateOne(context.Background())
```
In the `RegisterBeforeHooks` and `RegisterAfterHooks` methods, you can access the update filter (`Filter`), updated document (`Updates`), and the `*mongo.Collection` object (`Col`) via the `opContext` parameter.

### Updating Multiple Documents
```go
updateResult, err := userColl.Updater().
    RegisterBeforeHooks(func(ctx context.Context, opContext *updater.BeforeOpContext, opts ...any) error {
        fmt.Println("BeforeHook called")
        fmt.Println(opContext.Filter)
        fmt.Println(opContext.Updates)
        fmt.Println(opContext.Col != nil)
        return nil
    }).
    RegisterAfterHooks(func(ctx context.Context, opContext *updater.AfterOpContext, opts ...any) error {
        fmt.Println("AfterHook called")
        fmt.Println(opContext.Filter)
        fmt.Println(opContext.Updates)
        fmt.Println(opContext.Col != nil)
        return nil
    }).
    Filter(query.In("name", "Mingyong Chen", "chenmingyong")).
    Updates(update.Set("age", 6)).
    UpdateMany(context.Background())
```

## Saving a Document
```go
updateResult, err := userColl.Updater().
    RegisterBeforeHooks(func(ctx context.Context, opContext *updater.BeforeOpContext, opts ...any) error {
        fmt.Println("BeforeHook called")
        fmt.Println(opContext.Filter)
        fmt.Println(opContext.Updates)
        fmt.Println(opContext.Col != nil)
        return nil
    }).
    RegisterAfterHooks(func(ctx context.Context, opContext *updater.AfterOpContext, opts ...any) error {
        fmt.Println("AfterHook called")
        fmt.Println(opContext.Filter)
        fmt.Println(opContext.Updates)
        fmt.Println(opContext.Col != nil)
        return nil
    }).
    Filter(query.Eq("name", "Mingyong Chen")).
    Updates(update.Set("age", 18)).
    Upsert(context.Background())
```
In the `RegisterBeforeHooks` and `RegisterAfterHooks` methods, you can access the update filter (`Filter`), updated document (`Updates`), and the `*mongo.Collection` object (`Col`) via the `opContext` parameter.

## Delete Operations
After creating a deleter using the `Deleter()` method, you can register before and after delete hooks by calling the `RegisterBeforeHooks` and `RegisterAfterHooks` methods.

### Deleting a Single Document

```go
deleteResult, err := userColl.Deleter().
    RegisterBeforeHooks(func(ctx context.Context, opContext *deleter.OpContext, opts ...any) error {
        fmt.Println("BeforeHook called")
        fmt.Println(opContext.Filter)
        fmt.Println(opContext.Col != nil)
        return nil
    }).
    RegisterAfterHooks(func(ctx context.Context, opContext *deleter.OpContext, opts ...any) error {
        fmt.Println("AfterHook called")
        fmt.Println(opContext.Filter)
        fmt.Println(opContext.Col != nil)
        return nil
    }).
    Filter(query.Eq("name", "Mingyong Chen")).
    DeleteOne(context.Background())
```

In the `RegisterBeforeHooks` and `RegisterAfterHooks` methods, you can access the delete filter (`Filter`) and the `*mongo.Collection` object (`Col`) via the `opContext` parameter.

### Deleting Multiple Documents

```go
deleteResult, err := userColl.Deleter().
    RegisterBeforeHooks(func(ctx context.Context, opContext *deleter.BeforeOpContext, opts ...any) error {
        fmt.Println("BeforeHook called")
        fmt.Println(opContext.Filter)
        fmt.Println(opContext.Col != nil)
        return nil
    }).
    RegisterAfterHooks(func(ctx context.Context, opContext *deleter.AfterOpContext, opts ...any) error {
        fmt.Println("AfterHook called")
        fmt.Println(opContext.Filter)
        fmt.Println(opContext.Col != nil)
        return nil
    }).
    Filter(query.In("name", "Mingyong Chen", "Burt")).
    DeleteMany(context.Background())
```

In the `RegisterBeforeHooks` and `RegisterAfterHooks` methods, you can access the delete filter (`Filter`) and the `*mongo.Collection` object (`Col`) via the `opContext` parameter.