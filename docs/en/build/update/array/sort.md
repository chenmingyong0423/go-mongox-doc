# Update Document - $sort
`$sort` is a `$push` modifier.

## Function Build
Build a `$sort` fragment with the `Sort` function from the `update` package.
```go
// bson.D{bson.E{Key:"$sort", Value:-1}}
sort := update.Sort(-1)
```

## Method Build (Builder)
`$sort` is usually placed in the same `bson.D` as `$each`, then passed as the value of `$push`.
```go
// bson.D{bson.E{Key:"$push", Value:bson.D{bson.E{Key:"scores", Value:bsonx.NewD().Add("$each", []int{90, 95}).Add("$sort", -1).Build()}}}}
update.NewBuilder().
    Push("scores", bsonx.NewD().
        Add("$each", []int{90, 95}).
        Add("$sort", -1).
        Build()).
    Build()
```
