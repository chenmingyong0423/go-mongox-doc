# 聚合表达式 - $dayOfYear
## 函数构建
使用 `aggregation` 包提供的 `DayOfYear` 函数构建 `$dayOfYear`。
```go
// bson.D{bson.E{Key:"dayOfYear", Value:bson.D{bson.E{Key:"$dayOfYear", Value:time.Now()}}}}
result := aggregation.DayOfYear("dayOfYear", time.Now())
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `DayOfYearWithTimezone` 方法构建 `$dayOfYear`。
```go
// bson.D{bson.E{Key:"dayOfYear", Value:bson.D{bson.E{Key:"$dayOfYear", Value:time.Now()}}}}
result := aggregation.NewBuilder().
    DayOfYearWithTimezone("dayOfYear", time.Now(), "Asia/Shanghai").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### DayOfYearWithoutKey
函数构建：

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfYear", Value:now}}
expr := aggregation.DayOfYearWithoutKey(now)
```

方法构建（构建器）：

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfYear", Value:now}}
expr := aggregation.NewBuilder().
    DayOfYearWithoutKey(now).
    Build()
```

### DayOfYearWithTimezoneWithoutKey
函数构建：

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfYear", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.DayOfYearWithTimezoneWithoutKey(now, "Asia/Shanghai")
```

方法构建（构建器）：

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfYear", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.NewBuilder().
    DayOfYearWithTimezoneWithoutKey(now, "Asia/Shanghai").
    Build()
```

