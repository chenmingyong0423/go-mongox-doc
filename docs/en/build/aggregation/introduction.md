# Aggregation Package
The `aggregation` package provides convenient methods for building MongoDB aggregation pipeline structures. It includes multiple functions and builders, simplifying the pipeline build process. For complex scenarios, builders support chain calling, making the build process more flexible; for basic needs, functions can be used directly for quick build.

The `aggregation` package provides two types of builders:
- `aggregation.StageBuilder`: For easily constructing the various stages of an aggregation pipeline, such as `$group`, `$match`, etc. Create a new builder instance with `aggregation.NewStageBuilder()`, then use the corresponding methods to build the stages.
- `aggregation.Builder`: For constructing complex expressions used within pipeline stages, like conditional logic, mathematical operations, etc. Create a new builder instance with `aggregation.NewBuilder()`, then use the corresponding methods to build the expressions.