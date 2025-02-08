# Changelog

## v2.2.0
The `v2.2.0` version was released on **February 8, 2025** (Beijing Time). This version introduces a number of significant changes, including:

### New Features
- **Aggregator Operator**: Now supports registering `Hooks`, allowing you to insert custom logic before and after aggregation operations.
- **Hook/Plugin Types**: Added hook types for `before*` and `after*` actions.
- **mongox.model**: The `mongox.model` now includes the `mongox:autoID` tag for the `ID` field, enabling automatic generation of `ID` values.

### Refactoring
- **mongox.Client Struct**: Added a `mongox.Client` struct, which currently only creates `Database` objects. More features, such as transaction handling, will be added in future versions.
- **mongox.Database Struct**: Introduced the `mongox.Database` struct to support registering global plugins. This allows you to insert custom logic before and after database operations, enhancing the scalability and maintainability of applications.
- **mongox.NewCollection**: Updated the signature of the `mongox.NewCollection` method, which now requires a `mongox.Database` object.
- **Model Field Hook Refactor**: Moved the model field hook to the `internal` package and refactored it to support struct tagging, automatically filling field values during document insertion and updates. This reduces redundant code and improves maintainability and readability.

### Removed Features
- **Global Plugin Registration**: Removed the ability to register plugins globally; plugins must now be registered on the `mongox.Database` object.
- **Validation Hooks**: Removed the `validation` struct validation hooks.
- **Plugin Initialization Function**: Removed the `mongox.InitPlugin` function.

### Changes to Function and Method Usage
- **mongox.NewCollection**

  ```go
  // Previously
  userColl := mongox.NewCollection[User](mongoColl)
  
  // Now
  client := mongox.NewClient(mongoClient, &mongox.Config{})
  database := client.NewDatabase("db-test")
  
  userColl := mongox.NewCollection[User](database, "users")
  ```

- **Plugin Registration and Removal**

  ```go
  // Previously
  mongox.RegisterPlugin()
  mongox.RemovePlugin()
  
  // Now
  client := mongox.NewClient(mongoClient, &mongox.Config{})
  database := client.NewDatabase("db-test")
  
  database.RegisterPlugin()
  database.RemovePlugin()
  ```