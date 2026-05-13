# Aggregation Expression - $dayOfWeek
## Function Build
Build `$dayOfWeek` with the `DayOfWeek` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"weekday", Value:bson.D{bson.E{Key:"$dayOfWeek", Value:time.Now()}}}}
result := aggregation.DayOfWeek("weekday", time.Now())
```
## Method Build (Builder)
Build `$dayOfWeek` with the `DayOfWeekWithTimezone` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"weekday", Value:bson.D{bson.E{Key:"$dayOfWeek", Value:time.Now()}}}}
result := aggregation.NewBuilder().
    DayOfWeekWithTimezone("weekday", time.Now(), "Asia/Shanghai").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### DayOfWeekWithoutKey
Function build:

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfWeek", Value:now}}
expr := aggregation.DayOfWeekWithoutKey(now)
```

Method build (Builder):

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfWeek", Value:now}}
expr := aggregation.NewBuilder().
    DayOfWeekWithoutKey(now).
    Build()
```

### DayOfWeekWithTimezoneWithoutKey
Function build:

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfWeek", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.DayOfWeekWithTimezoneWithoutKey(now, "Asia/Shanghai")
```

Method build (Builder):

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfWeek", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.NewBuilder().
    DayOfWeekWithTimezoneWithoutKey(now, "Asia/Shanghai").
    Build()
```

