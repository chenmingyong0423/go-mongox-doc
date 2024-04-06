# bsonx Package
The `bsonx` package provides a range of convenient functions and builders for building BSON data, aimed at simplifying the process of building BSON data.

## Builder
Currently, the `bsonx` package only provides a builder for `bson.D` data called `DBuilder`.
```go
d := bsonx.NewD().Add("name", "Mingyong Chen").Add("name", "Burt")
```

## Functions
Functions simplify the process of building BSON data.
```go
m := bsonx.M("name", "Mingyong Chen")
e := bsonx.E("name", "Mingyong Chen")
d := bsonx.D("name", "Mingyong Chen")
a := bsonx.A("Mingyong Chen", "Burt")
```