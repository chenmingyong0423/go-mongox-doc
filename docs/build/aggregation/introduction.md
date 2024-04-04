# Aggregation 包
`aggregation` 包提供了方便的方法来构建`MongoDB`聚合管道（**pipeline**）结构。它包括多个函数和构建器，简化了管道构建过程。对于复杂场景，构建器支持链式调用，使得构建过程更加灵活；而对于基础需求，可以直接使用函数快速完成构建。

`aggregation` 包提供了两种构建器：
- `aggregation.StageBsonBuilder`：用于轻松构建聚合管道的各个阶段（`Pipeline Stages`），如`$group`、`$match`等。
- `aggregation.Builder`：用于构建管道阶段内部使用的复杂表达式（`Pipeline Expressions`），例如条件逻辑、数学运算等。
