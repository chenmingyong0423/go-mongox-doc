# Introduction to go mongox

`go mongox` is a generic-based library that extends the official MongoDB framework. By using generics, it binds structs to MongoDB collections, aiming to provide type safety and simplified data operations. `go mongox` also introduces method chaining for smoother document operations and offers a rich set of BSON builders and built-in functions to simplify the construction of BSON data. Additionally, it supports plugin-based programming and provides various built-in hook functions, offering flexibility for custom logic before and after database operations, thus enhancing the scalability and maintainability of applications.

## Features
- Generic MongoDB Collections
- CRUD operations for documents
- Aggregation operations
- Built-in basic `Model` struct with automatic updates to default `field` values
- BSON data construction support
- Built-in Hooks
- Plugin-based programming support