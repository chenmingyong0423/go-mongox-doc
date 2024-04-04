# Aggregation Package
The `aggregation` package provides convenient methods for building MongoDB aggregation pipeline structures. It includes multiple functions and builders, simplifying the pipeline build process. For complex scenarios, builders support chain calling, making the build process more flexible; for basic needs, functions can be used directly for quick build.

The `aggregation` package offers two types of builders:
- `aggregation.StageBsonBuilder`: Specifically designed for building operators for pipeline stages.
- `aggregation.Builder`: Used to build operators for pipeline expressions.