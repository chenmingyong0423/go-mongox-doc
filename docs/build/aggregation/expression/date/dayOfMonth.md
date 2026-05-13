# 聚合表达式 - $dayOfMonth
## 函数构建
使用 `aggregation` 包提供的 `DayOfMonth` 函数构建 `$dayOfMonth`。
```go
// bson.D{bson.E{Key:"day", Value:bson.D{bson.E{Key:"$dayOfMonth", Value:time.Now()}}}}
result := aggregation.DayOfMonth("day", time.Now())
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `DayOfMonthWithTimezone` 方法构建 `$dayOfMonth`。
```go
// bson.D{bson.E{Key:"day", Value:bson.D{bson.E{Key:"$dayOfMonth", Value:time.Now()}}}}
result := aggregation.NewBuilder().
    DayOfMonthWithTimezone("day", time.Now(), "Asia/Shanghai").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### DayOfMonthWithoutKey
函数构建：

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfMonth", Value:now}}
expr := aggregation.DayOfMonthWithoutKey(now)
```

方法构建（构建器）：

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfMonth", Value:now}}
expr := aggregation.NewBuilder().
    DayOfMonthWithoutKey(now).
    Build()
```

### DayOfMonthWithTimezoneWithoutKey
函数构建：

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfMonth", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.DayOfMonthWithTimezoneWithoutKey(now, "Asia/Shanghai")
```

方法构建（构建器）：

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfMonth", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.NewBuilder().
    DayOfMonthWithTimezoneWithoutKey(now, "Asia/Shanghai").
    Build()
```

