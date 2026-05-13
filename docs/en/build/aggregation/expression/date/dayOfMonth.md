# Aggregation Expression - $dayOfMonth
## Function Build
Build `$dayOfMonth` with the `DayOfMonth` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"day", Value:bson.D{bson.E{Key:"$dayOfMonth", Value:time.Now()}}}}
result := aggregation.DayOfMonth("day", time.Now())
```
## Method Build (Builder)
Build `$dayOfMonth` with the `DayOfMonthWithTimezone` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"day", Value:bson.D{bson.E{Key:"$dayOfMonth", Value:time.Now()}}}}
result := aggregation.NewBuilder().
    DayOfMonthWithTimezone("day", time.Now(), "Asia/Shanghai").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### DayOfMonthWithoutKey
Function build:

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfMonth", Value:now}}
expr := aggregation.DayOfMonthWithoutKey(now)
```

Method build (Builder):

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfMonth", Value:now}}
expr := aggregation.NewBuilder().
    DayOfMonthWithoutKey(now).
    Build()
```

### DayOfMonthWithTimezoneWithoutKey
Function build:

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfMonth", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.DayOfMonthWithTimezoneWithoutKey(now, "Asia/Shanghai")
```

Method build (Builder):

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfMonth", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.NewBuilder().
    DayOfMonthWithTimezoneWithoutKey(now, "Asia/Shanghai").
    Build()
```

