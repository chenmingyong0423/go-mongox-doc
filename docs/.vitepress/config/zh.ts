import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
    lang: 'zh-Hans',
    description: 'go-mongox 指南',
    themeConfig: {
        nav: [
            {text: '指南', link: '/introduction/getting-started'},
            {text: '贡献', link: '/contribute'},
        ],

        outline: {
            label: '页面导航',
            level: [2, 6]
        },

        sidebar: [

            {
                text: '简介',
                collapsed: true,
                items: [
                    {text: 'go-mongox 的介绍', link: '/introduction/what-is-go-mongox'},
                    {text: '快速开始', link: '/introduction/getting-started'}
                ]
            },
            {
                text: '泛型的 Collection',
                link: '/collection/generic-collection',
            },
            {
                text: 'CRUD 操作器',
                collapsed: true,
                items: [
                    {text: 'Creator 创建器', link: '/operator/creator'},
                    {text: 'Finder 查询器', link: '/operator/finder'},
                    {text: 'Updater 更新器', link: '/operator/updater'},
                    {text: 'Deleter 删除器', link: '/operator/deleter'},
                    {text: 'Aggregator 聚合器', link: '/operator/aggregator'},
                ]
            },
            {
                text: "BSON 构造",
                collapsed: true,
                items: [
                    {text: 'Bsonx 包：简化 BSON 数据的构造', link: '/construction/bsonx'},
                    {
                        text: 'Query BSON 构造',
                        collapsed: true,
                        items: [
                            {text: 'Query 包', link: '/construction/query/introduction'},
                            {
                                text: '比较操作符',
                                collapsed: true,
                                items: [
                                    {text: '$eq', link: '/construction/query/comparison/eq'},
                                    {text: '$gt', link: '/construction/query/comparison/gt'},
                                    {text: '$gte', link: '/construction/query/comparison/gte'},
                                    {text: '$in', link: '/construction/query/comparison/in'}
                                ]
                            },
                        ]
                    },
                    {
                        text: 'Update BSON 构造',
                        collapsed: true,
                        items: [
                            {text: 'Update 包', link: '/construction/update/introduction'},
                        ]
                    },
                    {
                        text: 'Aggregation BSON 构造',
                        collapsed: true,
                        items: [
                            {text: 'Aggregation 包', link: '/construction/aggregation/introduction'},
                        ]
                    },
                ]
            },
            {
                text: '内置的 Model',
                collapsed: true,
                link: '/model'
            },
            {
                text: '数据校验',
                collapsed: true,
                items: [
                    {
                        text: '结构体校验',
                        link: '/validation/struct-validation'
                    }
                ]
            },
            {
                text: '钩子 (Hooks)',
                collapsed: true,
                items: [
                    {text: '模型钩子（Model Hooks）', link: '/hooks/model-hooks'},
                    {text: '一次性钩子', link: '/hooks/one-time-hooks'}
                ]
            },
            {
                text: '插件（Plugins）',
                collapsed: true,
                items: [
                    {text: '插件化编程', link: '/plugins/plugins'},
                ]
            },
            {
                text: '更新中...',
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/chenmingyong0423/go-mongox'}
        ],

        footer: {
            message: '文档根据 <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0.</a> 许可证授权',
            copyright: `版权所有 © 2024-${new Date().getFullYear()} <a href="https://github.com/chenmingyong0423" target="_blank">陈明勇</a>`
        },
    },
})