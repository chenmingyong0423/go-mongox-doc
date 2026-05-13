# Aggregation Expression - $week
## Function Build
Build `$week` with the `Week` function from the `aggregation` package.
```go
// bson.D{bson.E{Key:"week", Value:bson.D{bson.E{Key:"$week", Value:time.Now()}}}}
result := aggregation.Week("week", time.Now())
```
## Method Build (Builder)
Build `$week` with the `WeekWithTimezone` method from `aggregation.NewBuilder()`.
```go
// bson.D{bson.E{Key:"week", Value:bson.D{bson.E{Key:"$week", Value:time.Now()}}}}
result := aggregation.NewBuilder().
    WeekWithTimezone("week", time.Now(), "Asia/Shanghai").
    Build()
```
## Build Without Key
When an expression needs to be passed as an argument to another expression, use a `WithoutKey` variant to build an expression fragment without an output field name.

### WeekWithoutKey
Function build:

```go
now := time.Now()

// bson.D{bson.E{Key:"$week", Value:now}}
expr := aggregation.WeekWithoutKey(now)
```

Method build (Builder):

```go
now := time.Now()

// bson.D{bson.E{Key:"$week", Value:now}}
expr := aggregation.NewBuilder().
    WeekWithoutKey(now).
    Build()
```

### WeekWithTimezoneWithoutKey
Function build:

```go
now := time.Now()

// bson.D{bson.E{Key:"$week", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.WeekWithTimezoneWithoutKey(now, "Asia/Shanghai")
```

Method build (Builder):

```go
now := time.Now()

// bson.D{bson.E{Key:"$week", Value:bson.D{bson.E{Key:"date", Value:now}, bson.E{Key:"timezone", Value:"Asia/Shanghai"}}}}
expr := aggregation.NewBuilder().
    WeekWithTimezoneWithoutKey(now, "Asia/Shanghai").
    Build()
```

