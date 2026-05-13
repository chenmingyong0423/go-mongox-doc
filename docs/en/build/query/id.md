# Query Condition - _id
`Id` is a helper provided by the `query` package for building `_id` query conditions directly.

## Function Build
Build an `_id` query condition with the `Id` function from the `query` package.

```go
id := bson.NewObjectID()

// bson.D{bson.E{Key:"_id", Value:id}}
idCond := query.Id(id)
```

`Id` is equivalent to building the `_id` field directly:

```go
// bson.D{bson.E{Key:"_id", Value:id}}
idCond := bson.D{bson.E{Key: "_id", Value: id}}
```

## Method Build (Builder)
Build an `_id` query condition with the `Builder` builder provided by the `query` package.

```go
id := bson.NewObjectID()

// bson.D{bson.E{Key:"_id", Value:id}}
idCond := query.NewBuilder().Id(id).Build()
```

Queries by `_id` are usually used to locate a single document precisely, so using `Id` directly is enough.
