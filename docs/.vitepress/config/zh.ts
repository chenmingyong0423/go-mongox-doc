import { defineConfig } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-Hans',
  description: 'go mongox 指南',
  themeConfig: {
    nav: [
      { text: '指南', link: '/getting-started/what-is-go-mongox' },
      { text: '贡献', link: '/contribute' },
    ],
    outline: {
      label: '页面导航',
      level: [2, 6],
    },
    sidebar: [
      {
        text: "入门指南",
        collapsed: true,
        items: [
          {
            text: "简介",
            link: "/getting-started/what-is-go-mongox"
          },
          {
            text: "文档模型",
            link: "/getting-started/model"
          },
          {
            text: "泛型 Collection",
            link: "/getting-started/generic-collection"
          }
        ]
      },
      {
        text: "CRUD 操作器",
        collapsed: true,
        items: [
          {
            text: "Creator 创建器",
            link: "/operator/creator"
          },
          {
            text: "Finder 查询器",
            link: "/operator/finder"
          },
          {
            text: "Updater 更新器",
            link: "/operator/updater"
          },
          {
            text: "Deleter 删除器",
            link: "/operator/deleter"
          },
          {
            text: "Aggregator 聚合器",
            link: "/operator/aggregator"
          }
        ]
      },
      {
        text: "BSON 构建",
        collapsed: true,
        items: [
          {
            text: "Bsonx 包：简化 BSON 数据的构建",
            link: "/build/bsonx"
          },
          {
            text: "Query BSON 构建",
            collapsed: true,
            items: [
              {
                text: "Query 包",
                link: "/build/query/introduction"
              },
              {
                text: "_id 快捷条件",
                link: "/build/query/id"
              },
              {
                text: "比较操作符",
                collapsed: true,
                items: [
                  {
                    text: "$eq",
                    link: "/build/query/comparison/eq"
                  },
                  {
                    text: "$gt",
                    link: "/build/query/comparison/gt"
                  },
                  {
                    text: "$gte",
                    link: "/build/query/comparison/gte"
                  },
                  {
                    text: "$in",
                    link: "/build/query/comparison/in"
                  },
                  {
                    text: "$lt",
                    link: "/build/query/comparison/lt"
                  },
                  {
                    text: "$lte",
                    link: "/build/query/comparison/lte"
                  },
                  {
                    text: "$ne",
                    link: "/build/query/comparison/ne"
                  },
                  {
                    text: "$nin",
                    link: "/build/query/comparison/nin"
                  }
                ]
              },
              {
                text: "逻辑操作符",
                collapsed: true,
                items: [
                  {
                    text: "$and",
                    link: "/build/query/logical/and"
                  },
                  {
                    text: "$not",
                    link: "/build/query/logical/not"
                  },
                  {
                    text: "$nor",
                    link: "/build/query/logical/nor"
                  },
                  {
                    text: "$or",
                    link: "/build/query/logical/or"
                  }
                ]
              },
              {
                text: "数组操作符",
                collapsed: true,
                items: [
                  {
                    text: "$all",
                    link: "/build/query/array/all"
                  },
                  {
                    text: "$elemMatch",
                    link: "/build/query/array/elemMatch"
                  },
                  {
                    text: "$size",
                    link: "/build/query/array/size"
                  }
                ]
              },
              {
                text: "元素操作符",
                collapsed: true,
                items: [
                  {
                    text: "$exists",
                    link: "/build/query/element/exists"
                  },
                  {
                    text: "$type",
                    link: "/build/query/element/type"
                  }
                ]
              },
              {
                text: "求值操作符",
                collapsed: true,
                items: [
                  {
                    text: "$expr",
                    link: "/build/query/evaluation/expr"
                  },
                  {
                    text: "$jsonSchema",
                    link: "/build/query/evaluation/jsonSchema"
                  },
                  {
                    text: "$mod",
                    link: "/build/query/evaluation/mod"
                  },
                  {
                    text: "$regex",
                    link: "/build/query/evaluation/regex"
                  },
                  {
                    text: "$text",
                    link: "/build/query/evaluation/text"
                  },
                  {
                    text: "$where",
                    link: "/build/query/evaluation/where"
                  }
                ]
              },
              {
                text: "投影操作符",
                collapsed: true,
                items: [
                  {
                    text: "$slice",
                    link: "/build/query/projection/slice"
                  }
                ]
              }
            ]
          },
          {
            text: "Update BSON 构建",
            collapsed: true,
            items: [
              {
                text: "Update 包",
                link: "/build/update/introduction"
              },
              {
                text: "字段更新操作符",
                collapsed: true,
                items: [
                  {
                    text: "$set",
                    link: "/build/update/field/set"
                  },
                  {
                    text: "SetFields",
                    link: "/build/update/field/setFields"
                  },
                  {
                    text: "$unset",
                    link: "/build/update/field/unset"
                  },
                  {
                    text: "$setOnInsert",
                    link: "/build/update/field/setOnInsert"
                  },
                  {
                    text: "$currentDate",
                    link: "/build/update/field/currentDate"
                  },
                  {
                    text: "$inc",
                    link: "/build/update/field/inc"
                  },
                  {
                    text: "$min",
                    link: "/build/update/field/min"
                  },
                  {
                    text: "$max",
                    link: "/build/update/field/max"
                  },
                  {
                    text: "$mul",
                    link: "/build/update/field/mul"
                  },
                  {
                    text: "$rename",
                    link: "/build/update/field/rename"
                  }
                ]
              },
              {
                text: "数组更新操作符",
                collapsed: true,
                items: [
                  {
                    text: "$addToSet",
                    link: "/build/update/array/addToSet"
                  },
                  {
                    text: "$pop",
                    link: "/build/update/array/pop"
                  },
                  {
                    text: "$pull",
                    link: "/build/update/array/pull"
                  },
                  {
                    text: "$push",
                    link: "/build/update/array/push"
                  },
                  {
                    text: "$pullAll",
                    link: "/build/update/array/pullAll"
                  },
                  {
                    text: "$each",
                    link: "/build/update/array/each"
                  },
                  {
                    text: "$position",
                    link: "/build/update/array/position"
                  },
                  {
                    text: "$slice",
                    link: "/build/update/array/slice"
                  },
                  {
                    text: "$sort",
                    link: "/build/update/array/sort"
                  }
                ]
              }
            ]
          },
          {
            text: "Aggregation BSON 构建",
            collapsed: true,
            items: [
              {
                text: "Aggregation 包",
                link: "/build/aggregation/introduction"
              },
              {
                text: "Stage 阶段构建",
                collapsed: true,
                items: [
                  {
                    text: "Stage Builder",
                    link: "/build/aggregation/stage/introduction"
                  },
                  {
                    text: "$addFields",
                    link: "/build/aggregation/stage/addFields"
                  },
                  {
                    text: "$bucket",
                    link: "/build/aggregation/stage/bucket"
                  },
                  {
                    text: "$bucketAuto",
                    link: "/build/aggregation/stage/bucketAuto"
                  },
                  {
                    text: "$count",
                    link: "/build/aggregation/stage/count"
                  },
                  {
                    text: "$facet",
                    link: "/build/aggregation/stage/facet"
                  },
                  {
                    text: "$group",
                    link: "/build/aggregation/stage/group"
                  },
                  {
                    text: "$limit",
                    link: "/build/aggregation/stage/limit"
                  },
                  {
                    text: "$lookup",
                    link: "/build/aggregation/stage/lookup"
                  },
                  {
                    text: "$match",
                    link: "/build/aggregation/stage/match"
                  },
                  {
                    text: "$project",
                    link: "/build/aggregation/stage/project"
                  },
                  {
                    text: "$replaceWith",
                    link: "/build/aggregation/stage/replaceWith"
                  },
                  {
                    text: "$set",
                    link: "/build/aggregation/stage/set"
                  },
                  {
                    text: "$skip",
                    link: "/build/aggregation/stage/skip"
                  },
                  {
                    text: "$sort",
                    link: "/build/aggregation/stage/sort"
                  },
                  {
                    text: "$sortByCount",
                    link: "/build/aggregation/stage/sortByCount"
                  },
                  {
                    text: "$unwind",
                    link: "/build/aggregation/stage/unwind"
                  }
                ]
              },
              {
                text: "Expression 表达式构建",
                collapsed: true,
                items: [
                  {
                    text: "表达式构建器",
                    link: "/build/aggregation/expression/introduction"
                  },
                  {
                    text: "累加器表达式",
                    collapsed: true,
                    items: [
                      {
                        text: "$sum",
                        link: "/build/aggregation/expression/accumulators/sum"
                      },
                      {
                        text: "$push",
                        link: "/build/aggregation/expression/accumulators/push"
                      },
                      {
                        text: "$avg",
                        link: "/build/aggregation/expression/accumulators/avg"
                      },
                      {
                        text: "$first",
                        link: "/build/aggregation/expression/accumulators/first"
                      },
                      {
                        text: "$last",
                        link: "/build/aggregation/expression/accumulators/last"
                      },
                      {
                        text: "$min",
                        link: "/build/aggregation/expression/accumulators/min"
                      },
                      {
                        text: "$max",
                        link: "/build/aggregation/expression/accumulators/max"
                      }
                    ]
                  },
                  {
                    text: "算术表达式",
                    collapsed: true,
                    items: [
                      {
                        text: "$abs",
                        link: "/build/aggregation/expression/arithmetic/abs"
                      },
                      {
                        text: "$add",
                        link: "/build/aggregation/expression/arithmetic/add"
                      },
                      {
                        text: "$ceil",
                        link: "/build/aggregation/expression/arithmetic/ceil"
                      },
                      {
                        text: "$divide",
                        link: "/build/aggregation/expression/arithmetic/divide"
                      },
                      {
                        text: "$exp",
                        link: "/build/aggregation/expression/arithmetic/exp"
                      },
                      {
                        text: "$floor",
                        link: "/build/aggregation/expression/arithmetic/floor"
                      },
                      {
                        text: "$ln",
                        link: "/build/aggregation/expression/arithmetic/ln"
                      },
                      {
                        text: "$log",
                        link: "/build/aggregation/expression/arithmetic/log"
                      },
                      {
                        text: "$log10",
                        link: "/build/aggregation/expression/arithmetic/log10"
                      },
                      {
                        text: "$mod",
                        link: "/build/aggregation/expression/arithmetic/mod"
                      },
                      {
                        text: "$multiply",
                        link: "/build/aggregation/expression/arithmetic/multiply"
                      },
                      {
                        text: "$pow",
                        link: "/build/aggregation/expression/arithmetic/pow"
                      },
                      {
                        text: "$round",
                        link: "/build/aggregation/expression/arithmetic/round"
                      },
                      {
                        text: "$sqrt",
                        link: "/build/aggregation/expression/arithmetic/sqrt"
                      },
                      {
                        text: "$subtract",
                        link: "/build/aggregation/expression/arithmetic/subtract"
                      },
                      {
                        text: "$trunc",
                        link: "/build/aggregation/expression/arithmetic/trunc"
                      }
                    ]
                  },
                  {
                    text: "数组表达式",
                    collapsed: true,
                    items: [
                      {
                        text: "$arrayElemAt",
                        link: "/build/aggregation/expression/array/arrayElemAt"
                      },
                      {
                        text: "$arrayToObject",
                        link: "/build/aggregation/expression/array/arrayToObject"
                      },
                      {
                        text: "$concatArrays",
                        link: "/build/aggregation/expression/array/concatArrays"
                      },
                      {
                        text: "$filter",
                        link: "/build/aggregation/expression/array/filter"
                      },
                      {
                        text: "$map",
                        link: "/build/aggregation/expression/array/map"
                      },
                      {
                        text: "$size",
                        link: "/build/aggregation/expression/array/size"
                      },
                      {
                        text: "$slice",
                        link: "/build/aggregation/expression/array/slice"
                      }
                    ]
                  },
                  {
                    text: "比较表达式",
                    collapsed: true,
                    items: [
                      {
                        text: "$eq",
                        link: "/build/aggregation/expression/comparison/eq"
                      },
                      {
                        text: "$ne",
                        link: "/build/aggregation/expression/comparison/ne"
                      },
                      {
                        text: "$gt",
                        link: "/build/aggregation/expression/comparison/gt"
                      },
                      {
                        text: "$gte",
                        link: "/build/aggregation/expression/comparison/gte"
                      },
                      {
                        text: "$lt",
                        link: "/build/aggregation/expression/comparison/lt"
                      },
                      {
                        text: "$lte",
                        link: "/build/aggregation/expression/comparison/lte"
                      }
                    ]
                  },
                  {
                    text: "条件表达式",
                    collapsed: true,
                    items: [
                      {
                        text: "$cond",
                        link: "/build/aggregation/expression/conditional/cond"
                      },
                      {
                        text: "$ifNull",
                        link: "/build/aggregation/expression/conditional/ifNull"
                      },
                      {
                        text: "$switch",
                        link: "/build/aggregation/expression/conditional/switch"
                      }
                    ]
                  },
                  {
                    text: "日期表达式",
                    collapsed: true,
                    items: [
                      {
                        text: "$dateToString",
                        link: "/build/aggregation/expression/date/dateToString"
                      },
                      {
                        text: "$dayOfMonth",
                        link: "/build/aggregation/expression/date/dayOfMonth"
                      },
                      {
                        text: "$dayOfWeek",
                        link: "/build/aggregation/expression/date/dayOfWeek"
                      },
                      {
                        text: "$dayOfYear",
                        link: "/build/aggregation/expression/date/dayOfYear"
                      },
                      {
                        text: "$month",
                        link: "/build/aggregation/expression/date/month"
                      },
                      {
                        text: "$week",
                        link: "/build/aggregation/expression/date/week"
                      },
                      {
                        text: "$year",
                        link: "/build/aggregation/expression/date/year"
                      }
                    ]
                  },
                  {
                    text: "布尔表达式",
                    collapsed: true,
                    items: [
                      {
                        text: "$and",
                        link: "/build/aggregation/expression/logical/and"
                      },
                      {
                        text: "$not",
                        link: "/build/aggregation/expression/logical/not"
                      },
                      {
                        text: "$or",
                        link: "/build/aggregation/expression/logical/or"
                      }
                    ]
                  },
                  {
                    text: "字符串表达式",
                    collapsed: true,
                    items: [
                      {
                        text: "$concat",
                        link: "/build/aggregation/expression/string/concat"
                      },
                      {
                        text: "$substrBytes",
                        link: "/build/aggregation/expression/string/substrBytes"
                      },
                      {
                        text: "$toLower",
                        link: "/build/aggregation/expression/string/toLower"
                      },
                      {
                        text: "$toUpper",
                        link: "/build/aggregation/expression/string/toUpper"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        text: "钩子 (Hooks)",
        collapsed: true,
        items: [
          {
            text: "模型钩子（Model Hooks）",
            link: "/hooks/model-hooks"
          },
          {
            text: "一次性钩子",
            link: "/hooks/one-time-hooks"
          }
        ]
      },
      {
        text: "插件（Plugins）",
        collapsed: true,
        items: [
          {
            text: "插件化编程",
            link: "/plugins/plugins"
          },
          {
            text: "上下文对象",
            link: "/plugins/op-context"
          },
          {
            text: "插件类型",
            link: "/plugins/op-type"
          }
        ]
      },
      {
        text: "mongox 更新日志",
        link: "/changelog"
      },
      {
        text: "更新中..."
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chenmingyong0423/go-mongox' },
    ],
    footer: {
      message: '文档根据 <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0.</a> 许可证授权',
      copyright: `版权所有 © 2024-${new Date().getFullYear()} <a href="https://github.com/chenmingyong0423" target="_blank">陈明勇</a>`,
    },
  },
})
