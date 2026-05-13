# Aggregation Expression - $concat
The source also provides `Contact` and `ContactWithoutKey`; they generate `$concat` as well.
## Function Build
Build `$concat` with the `Concat` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"fullName", Value:bson.D{bson.E{Key:"$concat", Value:[]interface {}{"$firstName", " ", "$lastName"}}}}}
result := aggregation.Concat("fullName", "$firstName", " ", "$lastName")
```
## Method Build (Builder)
Build `$concat` with the `Concat` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"fullName", Value:bson.D{bson.E{Key:"$concat", Value:[]interface {}{"$firstName", " ", "$lastName"}}}}}
result := aggregation.NewBuilder().
    Concat("fullName", "$firstName", " ", "$lastName").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### ConcatWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$concat", Value:[]any{"$firstName", " ", "$lastName"}}}
expr := aggregation.ConcatWithoutKey("$firstName", " ", "$lastName")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$concat", Value:[]any{"$firstName", " ", "$lastName"}}}
expr := aggregation.NewBuilder().
    ConcatWithoutKey("$firstName", " ", "$lastName").
    Build()
```

### ContactWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$concat", Value:[]any{"$firstName", " ", "$lastName"}}}
expr := aggregation.ContactWithoutKey("$firstName", " ", "$lastName")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$concat", Value:[]any{"$firstName", " ", "$lastName"}}}
expr := aggregation.NewBuilder().
    ContactWithoutKey("$firstName", " ", "$lastName").
    Build()
```

