import {defineConfig} from 'vitepress'

export const en = defineConfig({
    lang: 'en-US',
    description: 'go mongox Guide',
    themeConfig: {
        nav: [
            {text: 'Guide', link: '/en/getting-started/what-is-go-mongox'},
            {text: 'Contribute', link: '/en/contribute'},
        ],

        outline: {
            level: [2, 6]
        },

        sidebar: {
            "en": {
                base: '/en',
                items:[
                    {
                        text: 'Introduction',
                        collapsed: true,
                        items: [
                            {text: 'What is go mongox?', link: '/getting-started/what-is-go-mongox'},
                            {text: 'Document Model', link: '/getting-started/model'},
                            {text: 'Generic Collection', link: '/getting-started/generic-collection'},
                        ]
                    },
                    {
                        text: 'CRUD operators',
                        collapsed: true,
                        items: [
                            {text: 'Creator', link: '/operator/creator'},
                            {text: 'Finder', link: '/operator/finder'},
                            {text: 'Updater', link: '/operator/updater'},
                            {text: 'Deleter', link: '/operator/deleter'},
                            {text: 'Aggregator', link: '/operator/aggregator'},
                        ]
                    },
                    {
                        text: "BSON build",
                        collapsed: true,
                        items: [
                            {text: 'Bsonx: Simplify the build of BSON data', link: '/build/bsonx'},
                            {
                                text: 'Query BSON Build',
                                collapsed: true,
                                items: [
                                    {text: 'Query Package', link: '/build/query/introduction'},
                                    {
                                        text: 'Comparison Operators',
                                        collapsed: true,
                                        items: [
                                            {text: '$eq', link: '/build/query/comparison/eq'},
                                            {text: '$gt', link: '/build/query/comparison/gt'},
                                            {text: '$gte', link: '/build/query/comparison/gte'},
                                            {text: '$in', link: '/build/query/comparison/in'},
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
                                    {text: 'Update Package', link: '/build/update/introduction'},
                                    {
                                        text: "Field Update Operators",
                                        collapsed: true,
                                        items: [
                                            {text: "$currentDate", link: "/build/update/field/currentDate"}
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
                                    {text: 'Aggregation Package', link: '/build/aggregation/introduction'},
                                    {
                                        text: "Stage Build",
                                        collapsed: true,
                                        items: [
                                            {text: "Stage Builder", link: "/build/aggregation/stage/introduction"},
                                            {text: "$addFields",link: '/build/aggregation/stage/addFields'},
                                            {text: "$bucket",link: '/build/aggregation/stage/bucket'},
                                            {text: "$bucketAuto",link: '/en/build/aggregation/stage/bucketAuto'},
                                            {text: "$count",link: '/build/aggregation/stage/count'},
                                            {text: "$facet",link: '/build/aggregation/stage/facet'},
                                            {text: "$group",link: '/build/aggregation/stage/group'},
                                            {text: "$limit",link: '/build/aggregation/stage/limit'},
                                            {text: "$lookup",link: '/build/aggregation/stage/lookup'},
                                            {text: "$match",link: '/build/aggregation/stage/match'},
                                            {text: "$project",link: '/build/aggregation/stage/project'},
                                            {text: "$replaceWith",link: '/build/aggregation/stage/replaceWith'},
                                            {text: "$set",link: '/build/aggregation/stage/set'},
                                            {text: "$skip",link: '/build/aggregation/stage/skip'},
                                            {text: "$sort",link: '/build/aggregation/stage/sort'},
                                            {text: "$sortByCount",link: '/build/aggregation/stage/sortByCount'},
                                            {text: "$unwind",link: '/build/aggregation/stage/unwind'},
                                            {
                                                text: 'Updating...',
                                            }
                                        ]
                                    },
                                    {
                                        text: "Expression Build",
                                        collapsed: true,
                                        items: [
                                            {text: "Expression Builder", link: "/build/aggregation/expression/introduction"},
                                            {
                                                text: "Accumulator Expression",
                                                collapsed: true,
                                                items: [
                                                    {
                                                        text: "$add",
                                                        link: "/build/aggregation/expression/accumulators/add"
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
                        text: 'Hooks',
                        collapsed: true,
                        items: [
                            {text: 'Model Hooks', link: '/hooks/model-hooks'},
                            {text: 'One Time hooks', link: '/hooks/one-time-hooks'}
                        ]
                    },
                    {
                        text: 'Plugins',
                        collapsed: true,
                        items: [
                            {text: 'Plugins', link: '/plugins/plugins'},
                            {text: 'Context Model', link: '/plugins/op-context'},
                            {text: 'Plugin Type', link: '/plugins/op-type'},
                        ]
                    },
                    {
                        text: 'Updating...',
                    }
                ],
            }
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/chenmingyong0423/go-mongox'}
        ],
        footer: {
            message: 'Documentation licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0.</a>',
            copyright: `Copyright © 2024-${new Date().getFullYear()} <a href="https://github.com/chenmingyong0423" target="_blank">Mingyong Chen</a>`
        },
    },
})
