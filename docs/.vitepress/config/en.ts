import {defineConfig} from 'vitepress'

export const en = defineConfig({
    lang: 'en-US',
    description: 'go mongox Guide',
    themeConfig: {
        nav: [
            {text: 'Guide', link: '/en/introduction/getting-started'},
            {text: 'Contribute', link: '/en/contribute'},
        ],

        outline: {
            level: [2, 6]
        },

        sidebar: [
            {
                text: 'Introduction',
                collapsed: true,
                items: [
                    {text: 'What is go mongox?', link: '/en/introduction/what-is-go-mongox'},
                    {text: 'Getting Started', link: '/en/introduction/getting-started'},
                ]
            },
            {
                text: 'Generic Collection',
                link: '/en/collection/generic-collection',
            },
            {
                text: 'CRUD operators',
                collapsed: true,
                items: [
                    {text: 'Creator', link: '/en/operator/creator'},
                    {text: 'Finder', link: '/en/operator/finder'},
                    {text: 'Updater', link: '/en/operator/updater'},
                    {text: 'Deleter', link: '/en/operator/deleter'},
                    {text: 'Aggregator', link: '/en/operator/aggregator'},
                ]
            },
            {
                text: "BSON build",
                collapsed: true,
                items: [
                    {text: 'Bsonx: Simplify the build of BSON data', link: '/en/build/bsonx'},
                    {
                        text: 'Query BSON Build',
                        collapsed: true,
                        items: [
                            {text: 'Query Package', link: '/en/build/query/introduction'},
                            {
                                text: 'Comparison Operators',
                                collapsed: true,
                                items: [
                                    {text: '$eq', link: '/en/build/query/comparison/eq'},
                                    {text: '$gt', link: '/en/build/query/comparison/gt'},
                                    {text: '$gte', link: '/en/build/query/comparison/gte'},
                                    {text: '$in', link: '/en/build/query/comparison/in'},
                                    {
                                        text: 'Updating...',
                                    }
                                ]
                            },
                            {
                                text: 'Updating...',
                            }
                        ]
                    },
                    {
                        text: 'Update BSON Build',
                        collapsed: true,
                        items: [
                            {text: 'Update Package', link: '/en/build/update/introduction'},
                            {
                                text: "Field Update Operators",
                                collapsed: true,
                                items: [
                                    {text: "$currentDate", link: "/en/build/update/field/currentDate"}
                                ]
                            },
                            {
                                text: 'Updating...',
                            }
                        ]
                    },
                    {
                        text: 'Aggregation BSON Build',
                        collapsed: true,
                        items: [
                            {text: 'Aggregation Package', link: '/en/build/aggregation/introduction'},
                            {
                                text: "Stage Build",
                                collapsed: true,
                                items: [
                                    {text: "Stage Builder", link: "/en/build/aggregation/stage/introduction"},
                                    {text: "$addFields",link: '/en/build/aggregation/stage/addFields'},
                                    {text: "$bucket",link: '/en/build/aggregation/stage/bucket'},
                                    {text: "$bucketAuto",link: '/en/build/aggregation/stage/bucketAuto'},
                                    {text: "$count",link: '/en/build/aggregation/stage/count'},
                                    {text: "$facet",link: '/en/build/aggregation/stage/facet'},
                                    {text: "$group",link: '/en/build/aggregation/stage/group'},
                                    {text: "$limit",link: '/en/build/aggregation/stage/limit'},
                                    {text: "$lookup",link: '/en/build/aggregation/stage/lookup'},
                                    {text: "$match",link: '/en/build/aggregation/stage/match'},
                                    {text: "$project",link: '/en/build/aggregation/stage/project'},
                                    {text: "$replaceWith",link: '/en/build/aggregation/stage/replaceWith'},
                                    {text: "$set",link: '/en/build/aggregation/stage/set'},
                                    {text: "$skip",link: '/en/build/aggregation/stage/skip'},
                                    {text: "$sort",link: '/en/build/aggregation/stage/sort'},
                                    {text: "$sortByCount",link: '/en/build/aggregation/stage/sortByCount'},
                                    {text: "$unwind",link: '/en/build/aggregation/stage/unwind'},
                                    {
                                        text: 'Updating...',
                                    }
                                ]
                            },
                            {
                                text: "Expression Build",
                                collapsed: true,
                                items: [
                                    {text: "Expression Builder", link: "/en/build/aggregation/expression/introduction"},
                                    {
                                        text: "Accumulator Expression",
                                        collapsed: true,
                                        items: [
                                            {
                                                text: "$add",
                                                link: "/en/build/aggregation/expression/accumulators/add"
                                            }
                                        ]
                                    },
                                    {
                                        text: 'Updating...',
                                    }
                                ]
                            }
                        ]
                    },
                ]
            },
            {
                text: 'Built-in Model',
                collapsed: true,
                link: '/en/model'
            },
            {
                text: 'Data Validation',
                collapsed: true,
                items: [
                    {
                        text: 'Struct Validation',
                        link: '/en/validation/struct-validation'
                    }
                ]
            },
            {
                text: 'Hooks',
                collapsed: true,
                items: [
                    {text: 'Model Hooks', link: '/en/hooks/model-hooks'},
                    {text: 'One Time hooks', link: '/en/hooks/one-time-hooks'}
                ]
            },
            {
                text: 'Plugins',
                collapsed: true,
                items: [
                    {text: 'Plugins', link: '/en/plugins/plugins'},
                ]
            },
            {
                text: 'Updating...',
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/chenmingyong0423/go-mongox'}
        ],
        footer: {
            message: 'Documentation licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0.</a>',
            copyright: `Copyright © 2024-${new Date().getFullYear()} <a href="https://github.com/chenmingyong0423" target="_blank">Mingyong Chen</a>`
        },
    },
})
