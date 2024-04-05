# 聚合阶段构建器
聚合阶段构建器用于轻松构建聚合管道的各个阶段（`Pipeline Stages`），如 `$group`、`$match` 等。

通过 `aggregation.StageBsonBuilder()` 创建一个新的构建器实例，然后调用相应的方法来构建阶段。
