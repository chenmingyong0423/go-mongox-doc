# Query Condition - $regex
## Function Build
The `query` package provides two functions: `Regex` and `RegexOptions`.

Use `Regex` to build a query condition with only `$regex`:

```go
// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$regex", Value:"^ming"}}}}
regex := query.Regex("name", "^ming")
```

Use `RegexOptions` to build `$regex` and `$options` together:

```go
// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$regex", Value:"^ming"}, bson.E{Key:"$options", Value:"i"}}}}
regex := query.RegexOptions("name", "^ming", "i")
```

## Method Build (Builder)
The builder provides methods with the same names. Use them when composing `$regex` with other query conditions.

Using `Regex`:

```go
// bson.D{bson.E{Key:"name", Value:bson.D{bson.E{Key:"$regex", Value:"^ming"}}}}
regex := query.NewBuilder().
    Regex("name", "^ming").
    Build()
```

Using `RegexOptions`:

```go
// bson.D{bson.E{Key:"enabled", Value:bson.D{bson.E{Key:"$eq", Value:true}}}, bson.E{Key:"name", Value:bson.D{bson.E{Key:"$regex", Value:"^ming"}, bson.E{Key:"$options", Value:"i"}}}}}
regex := query.NewBuilder().
    Eq("enabled", true).
    RegexOptions("name", "^ming", "i").
    Build()
```
