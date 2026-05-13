# Update Document - $position
`$position` is a `$push` modifier.

## Function Build
Build a `$position` fragment with the `Position` function from the `update` package.
```go
// bson.D{bson.E{Key:"$position", Value:0}}
position := update.Position(0)
```

## Method Build (Builder)
`$position` is usually placed in the same `bson.D` as `$each`, then passed as the value of `$push`.
```go
// bson.D{bson.E{Key:"$push", Value:bson.D{bson.E{Key:"tags", Value:bsonx.NewD().Add("$each", []string{"go", "mongodb"}).Add("$position", 0).Build()}}}}
update.NewBuilder().
    Push("tags", bsonx.NewD().
        Add("$each", []string{"go", "mongodb"}).
        Add("$position", 0).
        Build()).
    Build()
```
