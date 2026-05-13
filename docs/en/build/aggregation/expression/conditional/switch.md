# Aggregation Expression - $switch
## Function Build
Build `$switch` with the `Switch` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"grade", Value:bson.D{bson.E{Key:"$switch", Value:bson.D{bson.E{Key:"branches", Value:bson.A{...}}, bson.E{Key:"default", Value:"B"}}}}}}
result := aggregation.Switch("grade", []aggregation.CaseThen{{Case: aggregation.GteWithoutKey("$score", 90), Then: "A"}}, "B")
```
## Method Build (Builder)
Build `$switch` with the `Switch` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"grade", Value:bson.D{bson.E{Key:"$switch", Value:bson.D{bson.E{Key:"branches", Value:bson.A{...}}, bson.E{Key:"default", Value:"B"}}}}}}
result := aggregation.NewBuilder().
    Switch("grade", []aggregation.CaseThen{{Case: aggregation.GteWithoutKey("$score", 90), Then: "A"}}, "B").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### SwitchWithoutKey
Function build:

```go
// bson.D{bson.E{Key:"$switch", Value:bson.D{bson.E{Key:"branches", Value:bson.A{...}}, bson.E{Key:"default", Value:"B"}}}}
expr := aggregation.SwitchWithoutKey([]aggregation.CaseThen{{Case: aggregation.GteWithoutKey("$score", 90), Then: "A"}}, "B")
```

Method build (Builder):

```go
// bson.D{bson.E{Key:"$switch", Value:bson.D{bson.E{Key:"branches", Value:bson.A{...}}, bson.E{Key:"default", Value:"B"}}}}
expr := aggregation.NewBuilder().
    SwitchWithoutKey([]aggregation.CaseThen{{Case: aggregation.GteWithoutKey("$score", 90), Then: "A"}}, "B").
    Build()
```

