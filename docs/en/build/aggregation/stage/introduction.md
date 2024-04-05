# Aggregation Stage Builder
The aggregation stage builder is used to easily build the various stages of the aggregation pipeline, such as `$group`, `$match`, and others.

Create a new builder instance with `aggregation.StageBsonBuilder()`, then use the corresponding methods to build the stages.