# Accumulator Expression - $add
## Function Build
Build the `$add` expression using the `Add` or `AddWithoutKey` function provided by the `aggregation` package.

```go
// bson.D{bson.E{Key:"$add", Value:[]interface {}{"$price", "$fee"}}}
/*
    {
      "$add": ["$price", "$fee"]
    }
*/
aggregation.AddWithoutKey("$price", "$fee")

// bson.D{bson.E{Key:"total", Value:bson.D{bson.E{Key:"$add", Value:[]interface {}{"$price", "$fee"}}}}}
/*
    {
      "total": {
        "$add": ["$price", "$fee"]
      }
    }
*/
aggregation.Add("total", "$price", "$fee")
```

## Method Build (Builder)
Build the `$add` expression using the `Builder` builder provided by the `aggregation` package.
```go
// bson.D{bson.E{Key:"total", Value:bson.D{bson.E{Key:"$add", Value:[]interface {}{"$price", "$fee"}}}}}
/*
   {
     "total": {
       "$add": ["$price", "$fee"]
     }
   }
*/
aggregation.BsonBuilder().Add("total", "$price", "$fee").Build()
```