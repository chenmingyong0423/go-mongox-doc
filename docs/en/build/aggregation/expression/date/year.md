# Aggregation Expression - $year
## Function Build
Build `$year` with the `Year` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"year", Value:bson.D{bson.E{Key:"$year", Value:time.Now()}}}}
result := aggregation.Year("year", time.Now())
```
## Method Build (Builder)
Build `$year` with the `YearWithTimezone` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"year", Value:bson.D{bson.E{Key:"$year", Value:time.Now()}}}}
result := aggregation.NewBuilder().
    YearWithTimezone("year", time.Now(), "Asia/Shanghai").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### YearWithoutKey
Function build:

```go
now := time.Now()

// bson.D{bson.E{Key:"$year", Value:now}}
expr := aggregation.YearWithoutKey(now)
```

Method build (Builder):

```go
now := time.Now()

// bson.D{bson.E{Key:"$year", Value:now}}
expr := aggregation.NewBuilder().
    YearWithoutKey(now).
    Build()
```

### YearWithTimezoneWithoutKey
Function build:

```go
now := time.Now()

// bson.D{bson.E{Key:"$year", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.YearWithTimezoneWithoutKey(now, "Asia/Shanghai")
```

Method build (Builder):

```go
now := time.Now()

// bson.D{bson.E{Key:"$year", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.NewBuilder().
    YearWithTimezoneWithoutKey(now, "Asia/Shanghai").
    Build()
```

