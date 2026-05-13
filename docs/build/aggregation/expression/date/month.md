# 聚合表达式 - $month
## 函数构建
使用 `aggregation` 包提供的 `Month` 函数构建 `$month`。
```go
// bson.D{bson.E{Key:"month", Value:bson.D{bson.E{Key:"$month", Value:time.Now()}}}}
result := aggregation.Month("month", time.Now())
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `MonthWithTimezone` 方法构建 `$month`。
```go
// bson.D{bson.E{Key:"month", Value:bson.D{bson.E{Key:"$month", Value:time.Now()}}}}
result := aggregation.NewBuilder().
    MonthWithTimezone("month", time.Now(), "Asia/Shanghai").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### MonthWithoutKey
函数构建：

```go
now := time.Now()

// bson.D{bson.E{Key:"$month", Value:now}}
expr := aggregation.MonthWithoutKey(now)
```

方法构建（构建器）：

```go
now := time.Now()

// bson.D{bson.E{Key:"$month", Value:now}}
expr := aggregation.NewBuilder().
    MonthWithoutKey(now).
    Build()
```

### MonthWithTimezoneWithoutKey
函数构建：

```go
now := time.Now()

// bson.D{bson.E{Key:"$month", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.MonthWithTimezoneWithoutKey(now, "Asia/Shanghai")
```

方法构建（构建器）：

```go
now := time.Now()

// bson.D{bson.E{Key:"$month", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.NewBuilder().
    MonthWithTimezoneWithoutKey(now, "Asia/Shanghai").
    Build()
```

