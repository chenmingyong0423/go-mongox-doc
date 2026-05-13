import { defineConfig } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  description: 'go mongox Guide',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/en/getting-started/what-is-go-mongox' },
      { text: 'Contribute', link: '/en/contribute' },
    ],
    outline: {
      level: [2, 6],
    },
    sidebar: {
      en: {
        base: "/en",
        items: [
          {
            text: "Introduction",
            collapsed: true,
            items: [
              {
                text: "What is go mongox?",
                link: "/getting-started/what-is-go-mongox"
              },
              {
                text: "Document Model",
                link: "/getting-started/model"
              },
              {
                text: "Generic Collection",
                link: "/getting-started/generic-collection"
              }
            ]
          },
          {
            text: "CRUD operators",
            collapsed: true,
            items: [
              {
                text: "Creator",
                link: "/operator/creator"
              },
              {
                text: "Finder",
                link: "/operator/finder"
              },
              {
                text: "Updater",
                link: "/operator/updater"
              },
              {
                text: "Deleter",
                link: "/operator/deleter"
              },
              {
                text: "Aggregator",
                link: "/operator/aggregator"
              }
            ]
          },
          {
            text: "BSON build",
            collapsed: true,
            items: [
              {
                text: "Bsonx: Simplify the build of BSON data",
                link: "/build/bsonx"
              },
              {
                text: "Query BSON Build",
                collapsed: true,
                items: [
                  {
                    text: "Query Package",
                    link: "/build/query/introduction"
                  },
                  {
                    text: "_id Helper",
                    link: "/build/query/id"
                  },
                  {
                    text: "Comparison Operators",
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
                    text: "Logical Operators",
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
                    text: "Array Operators",
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
                    text: "Element Operators",
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
                    text: "Evaluation Operators",
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
                    text: "Projection Operators",
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
                text: "Update BSON Build",
                collapsed: true,
                items: [
                  {
                    text: "Update Package",
                    link: "/build/update/introduction"
                  },
                  {
                    text: "Field Update Operators",
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
                    text: "Array Update Operators",
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
                text: "Aggregation BSON Build",
                collapsed: true,
                items: [
                  {
                    text: "Aggregation Package",
                    link: "/build/aggregation/introduction"
                  },
                  {
                    text: "Stage Build",
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
                    text: "Expression Build",
                    collapsed: true,
                    items: [
                      {
                        text: "Expression Builder",
                        link: "/build/aggregation/expression/introduction"
                      },
                      {
                        text: "Accumulator Expressions",
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
                        text: "Arithmetic Expressions",
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
                        text: "Array Expressions",
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
                        text: "Comparison Expressions",
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
                        text: "Conditional Expressions",
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
                        text: "Date Expressions",
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
                        text: "Boolean Expressions",
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
                        text: "String Expressions",
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
            text: "Hooks",
            collapsed: true,
            items: [
              {
                text: "Model Hooks",
                link: "/hooks/model-hooks"
              },
              {
                text: "One Time hooks",
                link: "/hooks/one-time-hooks"
              }
            ]
          },
          {
            text: "Plugins",
            collapsed: true,
            items: [
              {
                text: "Plugins",
                link: "/plugins/plugins"
              },
              {
                text: "Context Model",
                link: "/plugins/op-context"
              },
              {
                text: "Plugin Type",
                link: "/plugins/op-type"
              }
            ]
          },
          {
            text: "mongox changelog",
            link: "/changelog"
          },
          {
            text: "Updating..."
          }
        ]
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chenmingyong0423/go-mongox' },
    ],
    footer: {
      message: 'Documentation licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0.</a>',
      copyright: `Copyright © 2024-${new Date().getFullYear()} <a href="https://github.com/chenmingyong0423" target="_blank">Mingyong Chen</a>`,
    },
  },
})
