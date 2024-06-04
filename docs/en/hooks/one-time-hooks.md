# One Time Hooks
`go mongox` supports one-time hooks that allow you to do things before and after querying, inserting, deleting, updating, and saving documents.

## Insert Operations
After you create a creator using the `Creator()` method, you can register hooks to be called before and after inserting documents by calling the `RegisterBeforeHooks` and `RegisterAfterHooks` methods.

### Insert Single Document
```go
_, err := userColl.Creator().
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
You can get the document being inserted `Doc` and the `*mongo.Collection` object `Col` through the `opContext` parameter.

### Insert Multiple Documents
```go
_, err := userColl.Creator().
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
You can get the collection of documents being inserted `Docs` and the `*mongo.Collection` object `Col` through the `opContext` parameter.

## Query Operations
After you create a finder using the `Finder()` method, you can register hooks to be called before and after querying documents by calling the `RegisterBeforeHooks` and `RegisterAfterHooks` methods.
### Find Single Document
```go
_, err := userColl.Finder().
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
    Filter(query.Eq("name", "Mingyong Chen")).FindOne(context.Background())
```
In the `RegisterBeforeHooks` method, you can get the filter condition `Filter` and the `*mongo.Collection` object `Col` through the `opContext` parameter.

In the `RegisterAfterHooks` method, you can get the filter condition `Filter`, the document being queried `Doc`, and the `*mongo.Collection` object `Col` through the `opContext` parameter.

### Find Multiple Documents
```go
_, err := userColl.Finder().
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
    Filter(query.In("name", "Mingyong Chen", "Burt")).Find(context.Background())
```
In the `RegisterBeforeHooks` method, you can get the filter condition `Filter` and the `*mongo.Collection` object `Col` through the `opContext` parameter.

In the `RegisterAfterHooks` method, you can get the filter condition `Filter`, the documents being queried `Docs`, and the `*mongo.Collection` object `Col` through the `opContext` parameter.

## Update Operations
After you create an updater using the `Updater()` method, you can register hooks to be called before and after updating documents by calling the `RegisterBeforeHooks` and `RegisterAfterHooks` methods.
### Update Single Document
```go
_, err := userColl.Updater().
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
In the `RegisterBeforeHooks` and `RegisterAfterHooks` methods, you can get the filter condition `Filter`, the document being updated `Updates`, and the `*mongo.Collection` object `Col` through the `opContext` parameter.

### Update Multiple Documents
```go
_, err := userColl.Updater().
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
    Filter(query.In("name", "Mingyong Chen", "Burt")).
    Updates(update.Set("age", 6)).
    UpdateMany(context.Background())
```
In the `RegisterBeforeHooks` and `RegisterAfterHooks` methods, you can get the filter condition `Filter`, the document being updated `Updates`, and the `*mongo.Collection` object `Col` through the `opContext` parameter.

### Save Document
```go
objectID := primitive.NewObjectID()
_, err := userColl.Updater().
    RegisterBeforeHooks(func(ctx context.Context, opContext *updater.BeforeOpContext, opts ...any) error {
        fmt.Println("BeforeHook called")
        fmt.Println(opContext.Filter)
        fmt.Println(opContext.Replacement)
        fmt.Println(opContext.Col != nil)
        return nil
    }).
    RegisterAfterHooks(func(ctx context.Context, opContext *updater.AfterOpContext, opts ...any) error {
        fmt.Println("AfterHook called")
        fmt.Println(opContext.Filter)
        fmt.Println(opContext.Replacement)
        fmt.Println(opContext.Col != nil)
        return nil
    }).
    Filter(query.Id(objectID)).
    Replacement(bsonx.NewD().Add("_id", objectID).Add("name", "Gopher").Add("age", 18).Build()).
    Upsert(context.Background())
```
In the `RegisterBeforeHooks` and `RegisterAfterHooks` methods, you can get the filter condition `Filter`, the document being saved `Replacement`, and the `*mongo.Collection` object `Col` through the `opContext` parameter.

## Delete Operations
After you create a deleter using the `Deleter()` method, you can register hooks to be called before and after deleting documents by calling the `RegisterBeforeHooks` and `RegisterAfterHooks` methods.

### Delete Single Document
```go
_, err := userColl.Deleter().
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
    Filter(query.Eq("name", "Mingyong Chen")).
    DeleteOne(context.Background())
```
In the `RegisterBeforeHooks` and `RegisterAfterHooks` methods, you can get the filter condition `Filter` and the `*mongo.Collection` object `Col` through the `opContext` parameter.

### Delete Multiple Documents
```go
_, err := userColl.Deleter().
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
In the `RegisterBeforeHooks` and `RegisterAfterHooks` methods, you can get the filter condition `Filter` and the `*mongo.Collection` object `Col` through the `opContext` parameter.