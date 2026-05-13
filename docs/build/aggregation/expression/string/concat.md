# 聚合表达式 - $concat
源码还提供 `Contact`/`ContactWithoutKey`，它们同样生成 `$concat`。
## 函数构建
使用 `aggregation` 包提供的 `Concat` 函数构建 `$concat`。
```go
// bson.D{bson.E{Key:"fullName", Value:bson.D{bson.E{Key:"$concat", Value:[]interface {}{"$firstName", " ", "$lastName"}}}}}
result := aggregation.Concat("fullName", "$firstName", " ", "$lastName")
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `Concat` 方法构建 `$concat`。
```go
// bson.D{bson.E{Key:"fullName", Value:bson.D{bson.E{Key:"$concat", Value:[]interface {}{"$firstName", " ", "$lastName"}}}}}
result := aggregation.NewBuilder().
    Concat("fullName", "$firstName", " ", "$lastName").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### ConcatWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$concat", Value:[]any{"$firstName", " ", "$lastName"}}}
expr := aggregation.ConcatWithoutKey("$firstName", " ", "$lastName")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$concat", Value:[]any{"$firstName", " ", "$lastName"}}}
expr := aggregation.NewBuilder().
    ConcatWithoutKey("$firstName", " ", "$lastName").
    Build()
```

### ContactWithoutKey
函数构建：

```go
// bson.D{bson.E{Key:"$concat", Value:[]any{"$firstName", " ", "$lastName"}}}
expr := aggregation.ContactWithoutKey("$firstName", " ", "$lastName")
```

方法构建（构建器）：

```go
// bson.D{bson.E{Key:"$concat", Value:[]any{"$firstName", " ", "$lastName"}}}
expr := aggregation.NewBuilder().
    ContactWithoutKey("$firstName", " ", "$lastName").
    Build()
```

