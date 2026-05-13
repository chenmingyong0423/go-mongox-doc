# Aggregation Expression - $cond
## Function Build
Build `$cond` with the `Cond` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"level", Value:bson.D{bson.E{Key:"$cond", Value:[]interface {}{aggregation.GteWithoutKey("$score", 60), "pass", "fail"}}}}}
result := aggregation.Cond("level", aggregation.GteWithoutKey("$score", 60), "pass", "fail")
```
## Method Build (Builder)
Build `$cond` with the `Cond` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"level", Value:bson.D{bson.E{Key:"$cond", Value:[]interface {}{aggregation.GteWithoutKey("$score", 60), "pass", "fail"}}}}}
result := aggregation.NewBuilder().
    Cond("level", aggregation.GteWithoutKey("$score", 60), "pass", "fail").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### CondWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$cond", Value:[]any{aggregation.GteWithoutKey("$score", 60), "pass", "fail"}}}
expr := aggregation.CondWithoutKey(aggregation.GteWithoutKey("$score", 60), "pass", "fail")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$cond", Value:[]any{aggregation.GteWithoutKey("$score", 60), "pass", "fail"}}}
expr := aggregation.NewBuilder().
    CondWithoutKey(aggregation.GteWithoutKey("$score", 60), "pass", "fail").
    Build()
```

