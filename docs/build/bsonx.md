# bsonx 包
`bsonx` 提供提供了一系列便捷的函数和构建器去构建 `BSON` 数据，旨在简化 `BSON` 数据的构建过程。
## 构建器
目前 `bsonx` 包只提供了 `bson.D` 数据的构建器 `DBuilder`。
```go
d := bsonx.NewD().Add("name", "Mingyong Chen").Add("name", "Burt")
```
## 函数
通过函数简化 `BSON` 数据的构建过程。
```go
m := bsonx.M("name", "陈明勇")
e := bsonx.E("name", "陈明勇")
d := bsonx.D("name", "陈明勇")
a := bsonx.A("Mingyong Chen", "陈明勇")
```