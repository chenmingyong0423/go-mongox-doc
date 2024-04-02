# What is go-mongox?
`go-mongox` is a generics-based library that extends the official `MongoDB` framework. Utilizing generic programming, it facilitates the binding of structs to `MongoDB` collections, aiming to provide type safety and streamlined data operations. `go-mongox` introduces chainable calls for smoother document handling and offers a rich set of `bson` builders and built-in functions to simplify the construction of `bson` data. Moreover, it supports plugin-based programming and incorporates various hooks, offering flexibility for custom logic before and after database operations, thus enhancing the application's extensibility and maintainability.
## Feature Highlights
- Generic MongoDB Collection
- `CRUD` operations on documents
- Aggregation operations
- Built-in basic `Model` structure for automated updates of default `field` fields
- Support for constructing `bson` data
- Struct tags validation
- Hooks
- Plugin programming support