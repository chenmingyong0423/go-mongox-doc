import {defineConfig} from 'vitepress'

export const en = defineConfig({
    lang: 'en-US',
    description: 'go-mongox Guide',
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
                    {text: 'What is go-mongox?', link: '/en/introduction/what-is-go-mongox'},
                    {text: 'Getting Started', link: '/en/introduction/getting-started'}
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
                text: "BSON construction",
                collapsed: true,
                items: [
                    {text: 'bsonx', link: '/en/construction/bsonx'},
                    {
                        text: 'Query BSON construction',
                        collapsed: true,
                        items: [
                            {text: 'query package', link: '/en/construction/query/introduction'},
                            {
                                text: 'comparison operators',
                                collapsed: true,
                                items: [
                                    {text: '$eq', link: '/en/construction/query/comparison/eq'},
                                    {text: '$gt', link: '/en/construction/query/comparison/gt'},
                                    {text: '$gte', link: '/en/construction/query/comparison/gte'}
                                ]
                            },
                        ]
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
