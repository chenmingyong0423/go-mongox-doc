# 聚合表达式 - $week
## 函数构建
使用 `aggregation` 包提供的 `Week` 函数构建 `$week`。
```go
// bson.D{bson.E{Key:"week", Value:bson.D{bson.E{Key:"$week", Value:time.Now()}}}}
result := aggregation.Week("week", time.Now())
```
## 方法构建（构建器）
使用 `aggregation.NewBuilder()` 的 `WeekWithTimezone` 方法构建 `$week`。
```go
// bson.D{bson.E{Key:"week", Value:bson.D{bson.E{Key:"$week", Value:time.Now()}}}}
result := aggregation.NewBuilder().
    WeekWithTimezone("week", time.Now(), "Asia/Shanghai").
    Build()
```
## 无字段名构建
当表达式需要作为另一个表达式的参数时，可以使用 `WithoutKey` 变体构建不带输出字段名的表达式片段。

### WeekWithoutKey
函数构建：

```go
now := time.Now()

// bson.D{bson.E{Key:"$week", Value:now}}
expr := aggregation.WeekWithoutKey(now)
```

方法构建（构建器）：

```go
now := time.Now()

// bson.D{bson.E{Key:"$week", Value:now}}
expr := aggregation.NewBuilder().
    WeekWithoutKey(now).
    Build()
```

### WeekWithTimezoneWithoutKey
函数构建：

```go
now := time.Now()

// bson.D{bson.E{Key:"$week", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.WeekWithTimezoneWithoutKey(now, "Asia/Shanghai")
```

方法构建（构建器）：

```go
now := time.Now()

// bson.D{bson.E{Key:"$week", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.NewBuilder().
    WeekWithTimezoneWithoutKey(now, "Asia/Shanghai").
    Build()
```

