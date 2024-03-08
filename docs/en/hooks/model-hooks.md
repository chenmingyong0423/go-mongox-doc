# Model Hooks
You can set up hook functions for models (structs), which will be called before and after `MongoDB` collection operations. For example, you can process documents before and after insertion, or process documents after querying them.

The currently supported hook functions include:

**Insert Hooks**
- Before insert hook (`BeforeInsert`)
- After insert hook (`AfterInsert`)

**Find Hooks**
- After find hook (`AfterFind`)

**Upsert Hooks**
- Before upsert hook (`BeforeUpsert`)
- After upsert hook (`AfterUpsert`)

Given MongoDB's document-oriented database characteristics and that some operations do not map directly to structs, `go-mongox` does not provide hook functions for delete and update operations. If you have requirements in this area, you can implement them using the [one-time hook](./one-time-hooks) or [plugin](../plugins/plugins) features provided by `go-mongox`.

## Insert Hook
If you want to process documents before and after inserting them, you can implement the following specific hook methods:
```go
BeforeInsert(ctx context.Context) error
AfterInsert(ctx context.Context) error
```

Code sample:

```go
type User struct {
	mongox.Model `bson:"inline"`
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

_, err := userColl.Creator().InsertOne(context.Background(), u)

_, err = userColl.Creator().InsertMany(context.Background(), []*User{
    {Name: "Burt", Age: 18},
    {Name: "chenmingyong", Age: 18},
})

```

## Find Hook
If you want to process documents after finding them, you can implement the following specific hook methods:

```go
AfterFind(ctx context.Context) error
```

Code sample:

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

func (u *User) AfterFind(ctx context.Context) error {
	fmt.Println("AfterFind called")
	return nil
}
_, err := userColl.Finder().Filter(query.Eq("name", "Mingyong Chen")).FindOne(context.Background())

_, err = userColl.Finder().Filter(query.In("name", "Mingyong Chen", "Burt")).Find(context.Background())

```

## Upsert Hook
If you want to process documents before and after saving them, you can implement the following specific hook methods:
```go
BeforeUpsert(ctx context.Context) error
AfterUpsert(ctx context.Context) error
```

Code sample:

```go
type User struct {
	mongox.Model `bson:"inline"`
	Name         string `bson:"name"`
	Age          int    `bson:"age"`
}

func (u *User) BeforeUpsert(ctx context.Context) error {
	fmt.Println("BeforeUpsert called")
	return nil
}

func (u *User) AfterUpsert(ctx context.Context) error {
	fmt.Println("AfterUpsert called")
	return nil
}

_, err := userColl.Updater().
		Filter(query.Eq("name", "Gopher")).
		Replacement(&User{Name: "Gopher", Age: 20}).
		Upsert(context.Background())
```