# 累加器表达式 - $add
## 函数构建
使用 `aggregation` 包提供的 `Add` 或 `AddWithoutKey` 函数构建 `$add` 表达式。
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

## 方法构建（构建器）
使用 `aggregation` 包提供的构建器 `Builder` 构建 `$add` 表达式。
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