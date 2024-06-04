# Creator 创造器
通过 `Creator()` 方法获取一个新的泛型的创建器对象，即 `Creator[T]`，通过 `Creator[T]` 的方法，我们能够执行相关的创建操作。
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
