# Creator 创造器

通过 `Creator()` 方法获取一个新的泛型的创建器对象，即 `Creator[T]`，通过 `Creator[T]` 的方法，我们能够执行相关的创建操作。

| 方法名                | 功能描述                  | 参数说明                                                                            | 示例                                                        |
| --------------------- | ------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `NewCreator`          | 创建一个新的 Creator 实例 | `collection`: Mongo 集合；`dbCallbacks`: 数据库操作回调；`fields`: 结构体字段元信息 | `creator := NewCreator[User](collection, callback, fields)` |
| `InsertOne`           | 向集合中插入一条数据      | `ctx`: 上下文；`doc`: 要插入的文档；`opts`: 插入选项（可选）                        | `creator.InsertOne(ctx, &user)`                             |
| `InsertMany`          | 向集合中插入多条数据      | `ctx`: 上下文；`docs`: 文档数组；`opts`: 插入选项（可选）                           | `creator.InsertMany(ctx, []*User{&user1, &user2})`          |
| `ModelHook`           | 注册模型钩子（反射使用）  | `modelHook`: 任意类型的钩子实例                                                     | `creator.ModelHook(MyHook{})`                               |
| `RegisterBeforeHooks` | 注册插入前的钩子函数      | `hooks`: 函数列表（插入前执行）                                                     | `creator.RegisterBeforeHooks(hook1, hook2)`                 |
| `RegisterAfterHooks`  | 注册插入后的钩子函数      | `hooks`: 函数列表（插入后执行）                                                     | `creator.RegisterAfterHooks(hook1, hook2)`                  |
| `GetCollection`       | 获取 Mongo 集合对象       | 无参数                                                                              | `coll := creator.GetCollection()`                           |

## 插入一个文档

```go
insertOneResult, err := userColl.Creator().InsertOne(context.Background(), &User{Name: "Mingyong Chen", Age: 18})
```

- `InsertOne` 方法用于插入一个文档。`insertOneResult` 为 `*mongo.InsertOneResult` 类型。`InsertOne` 方法的第二个参数为指定的泛型类型的指针对象，即 `*User`。
- 如果我们需要设置 `options` 参数，可以将其作为该方法的第三个参数传递。

## 插入多个文档

```go
users := []*User{
		{Name: "Mingyong Chen", Age: 18},
		{Name: "Burt", Age: 18},
	}
insertManyResult, err := userColl.Creator().InsertMany(context.Background(), users)
```

- `InsertMany` 方法用于插入多个文档。`insertManyResult` 为 `*mongo.InsertManyResult` 类型。`InsertMany` 方法的第二个参数是指定的泛型类型的切片对象，切片元素的类型为指针类型，即 `[]*User`。
- 如果我们需要设置 `options` 参数，可以将其作为该方法的第三个参数传递。
