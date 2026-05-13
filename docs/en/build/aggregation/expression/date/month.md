# Aggregation Expression - $month
## Function Build
Build `$month` with the `Month` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"month", Value:bson.D{bson.E{Key:"$month", Value:time.Now()}}}}
result := aggregation.Month("month", time.Now())
```
## Method Build (Builder)
Build `$month` with the `MonthWithTimezone` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"month", Value:bson.D{bson.E{Key:"$month", Value:time.Now()}}}}
result := aggregation.NewBuilder().
    MonthWithTimezone("month", time.Now(), "Asia/Shanghai").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### MonthWithoutKey
Function build:

```go
now := time.Now()

// bson.D{bson.E{Key:"$month", Value:now}}
expr := aggregation.MonthWithoutKey(now)
```

Method build (Builder):

```go
now := time.Now()

// bson.D{bson.E{Key:"$month", Value:now}}
expr := aggregation.NewBuilder().
    MonthWithoutKey(now).
    Build()
```

### MonthWithTimezoneWithoutKey
Function build:

```go
now := time.Now()

// bson.D{bson.E{Key:"$month", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.MonthWithTimezoneWithoutKey(now, "Asia/Shanghai")
```

Method build (Builder):

```go
now := time.Now()

// bson.D{bson.E{Key:"$month", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.NewBuilder().
    MonthWithTimezoneWithoutKey(now, "Asia/Shanghai").
    Build()
```

