# Update Document - $slice
`$slice` is a `$push` modifier here, not the query projection helper.

## Function Build
Build a `$slice` fragment with the `Slice` function from the `update` package.
```go
// bson.D{bson.E{Key:"$slice", Value:5}}
slice := update.Slice(5)
```

## Method Build (Builder)
`$slice` is usually placed in the same `bson.D` as `$each`, then passed as the value of `$push`.
```go
// bson.D{bson.E{Key:"$push", Value:bson.D{bson.E{Key:"scores", Value:bsonx.NewD().Add("$each", []int{90, 95}).Add("$slice", 5).Build()}}}}
update.NewBuilder().
    Push("scores", bsonx.NewD().
        Add("$each", []int{90, 95}).
        Add("$slice", 5).
        Build()).
    Build()
```
