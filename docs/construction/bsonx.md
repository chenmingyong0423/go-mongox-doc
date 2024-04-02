# bsonx 包
`bsonx` 提供提供了一系列便捷的函数和构造器去构造 `BSON` 数据，旨在简化 `BSON` 数据的构造过程。
## 构造器
目前 `bsonx` 包只提供了 `bson.D` 数据的构造器 `DBuilder`。
```go
d := bsonx.NewD().Add("name", "Mingyong Chen").Add("name", "Burt")
```
## 函数
通过函数简化 `BSON` 数据的构造过程。
```go
m := bsonx.M("name", "Mingyong Chen")
e := bsonx.E("name", "Mingyong Chen")
d := bsonx.D(bsonx.E("name", "Mingyong Chen"), bsonx.E("name", "Burt"))
a := bsonx.A("Mingyong Chen", "Burt")
```