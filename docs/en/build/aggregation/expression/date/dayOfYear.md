# Aggregation Expression - $dayOfYear
## Function Build
Build `$dayOfYear` with the `DayOfYear` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"dayOfYear", Value:bson.D{bson.E{Key:"$dayOfYear", Value:time.Now()}}}}
result := aggregation.DayOfYear("dayOfYear", time.Now())
```
## Method Build (Builder)
Build `$dayOfYear` with the `DayOfYearWithTimezone` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"dayOfYear", Value:bson.D{bson.E{Key:"$dayOfYear", Value:time.Now()}}}}
result := aggregation.NewBuilder().
    DayOfYearWithTimezone("dayOfYear", time.Now(), "Asia/Shanghai").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### DayOfYearWithoutKey
Function build:

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfYear", Value:now}}
expr := aggregation.DayOfYearWithoutKey(now)
```

Method build (Builder):

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfYear", Value:now}}
expr := aggregation.NewBuilder().
    DayOfYearWithoutKey(now).
    Build()
```

### DayOfYearWithTimezoneWithoutKey
Function build:

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfYear", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.DayOfYearWithTimezoneWithoutKey(now, "Asia/Shanghai")
```

Method build (Builder):

```go
now := time.Now()

// bson.D{bson.E{Key:"$dayOfYear", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.NewBuilder().
    DayOfYearWithTimezoneWithoutKey(now, "Asia/Shanghai").
    Build()
```

