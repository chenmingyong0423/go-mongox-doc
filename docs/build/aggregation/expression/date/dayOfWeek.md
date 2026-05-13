# 聚合表达式 - $dayOfWeek
## 函数构建
使用 `aggregation` 包提供的 `DayOfWeek` 函数构建 `$dayOfWeek`。
```go
// bson.D{bson.E{Key:"weekday", Value:bson.D{bson.E{Key:"$dayOfWeek", Value:time.Now()}}}}
result := aggregation.DayOfWeek("weekday", time.Now())
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `DayOfWeekWithTimezone` 方法构建 `$dayOfWeek`。
```go
// bson.D{bson.E{Key:"weekday", Value:bson.D{bson.E{Key:"$dayOfWeek", Value:time.Now()}}}}
result := aggregation.NewBuilder().
    DayOfWeekWithTimezone("weekday", time.Now(), "Asia/Shanghai").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### DayOfWeekWithoutKey
函数构建：

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfWeek", Value:now}}
expr := aggregation.DayOfWeekWithoutKey(now)
```

方法构建（构建器）：

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfWeek", Value:now}}
expr := aggregation.NewBuilder().
    DayOfWeekWithoutKey(now).
    Build()
```

### DayOfWeekWithTimezoneWithoutKey
函数构建：

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfWeek", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.DayOfWeekWithTimezoneWithoutKey(now, "Asia/Shanghai")
```

方法构建（构建器）：

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfWeek", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.NewBuilder().
    DayOfWeekWithTimezoneWithoutKey(now, "Asia/Shanghai").
    Build()
```

