# Update Document - $currentDate
## Function Build
Build the `$currentDate` update document using the `CurrentDate` function provided by the `update` package.

```go
// bson.D{bson.E{Key:"$currentDate", Value:bson.D{bson.E{Key:"last_modified", Value:true}}}}
/*
    {
      "$currentDate": {
        "last_modified": true
      }
    }
*/
update.CurrentDate("last_modified", true)
```

## Method Build (Builder)
Build the `$currentDate` update document using the `Builder` builder provided by the `update` package.

```go
// bson.D{bson.E{Key:"$currentDate", Value:bson.D{bson.E{Key:"last_modified", Value:true}, bson.E{Key:"created_at", Value:bson.D{bson.E{Key:"$type", Value:"timestamp"}}}}}}
/*
    {
      "$currentDate": {
        "last_modified": true,
        "created_at": {
          "$type": "timestamp"
        }
      }
    }
*/
update.NewBuilder().
    CurrentDate("last_modified", true).
    CurrentDate("created_at", bsonx.D("$type", "timestamp")).
    Build()
```