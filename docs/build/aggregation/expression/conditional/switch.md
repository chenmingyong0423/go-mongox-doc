# 聚合表达式 - $switch
## 函数构建
使用 `aggregation` 包提供的 `Switch` 函数构建 `$switch`。
```go
// bson.D{bson.E{Key:"grade", Value:bson.D{bson.E{Key:"$switch", Value:bson.D{bson.E{Key:"branches", Value:bson.A{...}}, bson.E{Key:"default", Value:"B"}}}}}}
result := aggregation.Switch("grade", []aggregation.CaseThen{{Case: aggregation.GteWithoutKey("$score", 90), Then: "A"}}, "B")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Switch` 方法构建 `$switch`。
```go
// bson.D{bson.E{Key:"grade", Value:bson.D{bson.E{Key:"$switch", Value:bson.D{bson.E{Key:"branches", Value:bson.A{...}}, bson.E{Key:"default", Value:"B"}}}}}}
result := aggregation.NewBuilder().
    Switch("grade", []aggregation.CaseThen{{Case: aggregation.GteWithoutKey("$score", 90), Then: "A"}}, "B").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### SwitchWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$switch", Value:bson.D{bson.E{Key:"branches", Value:bson.A{...}}, bson.E{Key:"default", Value:"B"}}}}
expr := aggregation.SwitchWithoutKey([]aggregation.CaseThen{{Case: aggregation.GteWithoutKey("$score", 90), Then: "A"}}, "B")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$switch", Value:bson.D{bson.E{Key:"branches", Value:bson.A{...}}, bson.E{Key:"default", Value:"B"}}}}
expr := aggregation.NewBuilder().
    SwitchWithoutKey([]aggregation.CaseThen{{Case: aggregation.GteWithoutKey("$score", 90), Then: "A"}}, "B").
    Build()
```

