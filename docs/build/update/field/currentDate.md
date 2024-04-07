# 更新文档 - $currentDate
## 函数构建
使用 `update` 包提供的 `CurrentDate` 函数构建 `$currentDate` 更新文档。
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

## 方法构建（构建器）
使用 `update` 包提供的构建器 `Builder` 构建 `$currentDate` 更新文档。
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
update.BsonBuilder().
    CurrentDate("last_modified", true).
    CurrentDate("created_at", bsonx.D("$type", "timestamp")).
    Build()
```