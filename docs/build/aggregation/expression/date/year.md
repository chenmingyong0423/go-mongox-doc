# 聚合表达式 - $year
## 函数构建
使用 `aggregation` 包提供的 `Year` 函数构建 `$year`。
```go
// bson.D{bson.E{Key:"year", Value:bson.D{bson.E{Key:"$year", Value:time.Now()}}}}
result := aggregation.Year("year", time.Now())
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `YearWithTimezone` 方法构建 `$year`。
```go
// bson.D{bson.E{Key:"year", Value:bson.D{bson.E{Key:"$year", Value:time.Now()}}}}
result := aggregation.NewBuilder().
    YearWithTimezone("year", time.Now(), "Asia/Shanghai").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### YearWithoutKey
函数构建：

```go
now := time.Now()

// bson.D{bson.E{Key:"$year", Value:now}}
expr := aggregation.YearWithoutKey(now)
```

方法构建（构建器）：

```go
now := time.Now()

// bson.D{bson.E{Key:"$year", Value:now}}
expr := aggregation.NewBuilder().
    YearWithoutKey(now).
    Build()
```

### YearWithTimezoneWithoutKey
函数构建：

```go
now := time.Now()

// bson.D{bson.E{Key:"$year", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.YearWithTimezoneWithoutKey(now, "Asia/Shanghai")
```

方法构建（构建器）：

```go
now := time.Now()

// bson.D{bson.E{Key:"$year", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.NewBuilder().
    YearWithTimezoneWithoutKey(now, "Asia/Shanghai").
    Build()
```

