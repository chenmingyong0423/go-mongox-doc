# 一次性钩子
`go-mongox` 支持一次性钩子，你可以在查询、插入、删除、更新和保存文档的前后执行一些操作。

## 插入操作
使用 `Creator()` 方法创建一个插入器之后，通过调用 `RegisterBeforeHooks` 和 `RegisterAfterHooks` 方法注册插入前和插入后的钩子函数。
### 插入单个文档
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
通过 `opContext` 参数可以获取到插入的文档 `Doc` 和 `*mongo.Collection` 对象 `Col`。
### 插入多个文档
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
在`RegisterBeforeHooks` 和 `RegisterAfterHooks` 方法中，通过 `opContext` 参数可以获取到插入的文档集合 `Docs` 和 `*mongo.Collection` 对象 `Col`。

## 查询操作
使用 `Finder()` 方法创建一个查询器之后，通过调用 `RegisterBeforeHooks` 和 `RegisterAfterHooks` 方法注册查询前和查询后的钩子函数。
### 查询单个文档
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
在 `RegisterBeforeHooks` 方法中，通过 `opContext` 参数可以获取到查询的过滤条件 `Filter` 和 `*mongo.Collection` 对象 `Col`。

在 `RegisterAfterHooks` 方法中，通过 `opContext` 参数可以获取到查询的过滤条件 `Filter`和查询的文档 `Doc` 以及 `*mongo.Collection` 对象 `Col`。
### 查询多个文档
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
在 `RegisterBeforeHooks` 方法中，通过 `opContext` 参数可以获取到查询的过滤条件 `Filter` 和 `*mongo.Collection` 对象 `Col`。

在 `RegisterAfterHooks` 方法中，通过 `opContext` 参数可以获取到查询的过滤条件 `Filter`和查询的文档 `Docs` 以及 `*mongo.Collection` 对象 `Col`。

## 更新操作
使用 `Updater()` 方法创建一个更新器之后，通过调用 `RegisterBeforeHooks` 和 `RegisterAfterHooks` 方法注册更新前和更新后的钩子函数。
### 更新单个文档
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
在 `RegisterBeforeHooks` 和 `RegisterAfterHooks` 方法中，通过 `opContext` 参数可以获取到更新的过滤条件 `Filter` 和更新的文档 `Updates` 以及 `*mongo.Collection` 对象 `Col`。

### 更新多个文档
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
在 `RegisterBeforeHooks` 和 `RegisterAfterHooks` 方法中，通过 `opContext` 参数可以获取到更新的过滤条件 `Filter` 和更新的文档 `Updates` 以及 `*mongo.Collection` 对象 `Col`。

### 保存文档
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
在 `RegisterBeforeHooks` 和 `RegisterAfterHooks` 方法中，通过 `opContext` 参数可以获取到更新的过滤条件 `Filter` 和保存的文档 `Replacement` 以及 `*mongo.Collection` 对象 `Col`。

## 删除操作
使用 `Deleter()` 方法创建一个删除器之后，通过调用 `RegisterBeforeHooks` 和 `RegisterAfterHooks` 方法注册删除前和删除后的钩子函数。
### 删除单个文档
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
在 `RegisterBeforeHooks` 和 `RegisterAfterHooks` 方法中，通过 `opContext` 参数可以获取到删除的过滤条件 `Filter` 和 `*mongo.Collection` 对象 `Col`。

### 删除多个文档
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
在 `RegisterBeforeHooks` 和 `RegisterAfterHooks` 方法中，通过 `opContext` 参数可以获取到删除的过滤条件 `Filter` 和 `*mongo.Collection` 对象 `Col`。