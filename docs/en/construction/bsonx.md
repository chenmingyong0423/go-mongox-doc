# bsonx Package
The `bsonx` package provides a range of convenient functions and constructors for constructing BSON data, aimed at simplifying the process of building BSON data.

## Constructor
Currently, the `bsonx` package only provides a constructor for `bson.D` data called `DBuilder`.
```go
d := bsonx.NewD().Add("name", "Mingyong Chen").Add("name", "Burt")
```

## Functions
Functions simplify the process of constructing BSON data.
```go
m := bsonx.M("name", "Mingyong Chen")
e := bsonx.E("name", "Mingyong Chen")
d := bsonx.D(bsonx.E("name", "Mingyong Chen"), bsonx.E("name", "Burt"))
a := bsonx.A("Mingyong Chen", "Burt")
```