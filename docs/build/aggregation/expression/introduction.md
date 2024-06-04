# 聚合表达式构建器

聚合表达式构建器用于轻松构建聚合管道的各个表达式（`Expressions`），如 `$add`, `$subtract` 等。

通过 `aggregation.NewStageBuilder()` 创建一个新的构建器实例，然后调用相应的方法来构建表达式。