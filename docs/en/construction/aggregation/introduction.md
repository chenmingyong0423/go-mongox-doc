# Aggregation Package
The `aggregation` package provides convenient methods for constructing MongoDB aggregation pipeline structures. It includes multiple functions and constructors, simplifying the pipeline construction process. For complex scenarios, constructors support chain calling, making the construction process more flexible; for basic needs, functions can be used directly for quick construction.

The `aggregation` package offers two types of constructors:
- `aggregation.StageBsonBuilder`: Specifically designed for constructing operators for pipeline stages.
- `aggregation.Builder`: Used to construct operators for pipeline expressions.