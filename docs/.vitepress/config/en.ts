import {defineConfig} from 'vitepress'

export const en = defineConfig({
    title: "go-mongox",
    description: "The documentation for go-mongox",
    themeConfig: {
        nav: [
            {text: 'Guide', link: '/en/introduction/getting-started'},
            {text: 'Contribute', link: '/en/contribute'},
        ],

        outline: {
            level: [1, 6]
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
                text: 'CRUD operators',
                collapsed: true,
                items: [
                    {text: 'creator', link: '/en/operator/creator'},
                    {text: 'finder', link: '/en/operator/finder'},
                    {text: 'updater', link: '/en/operator/updater'},
                    {text: 'deleter', link: '/en/operator/deleter'}
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
