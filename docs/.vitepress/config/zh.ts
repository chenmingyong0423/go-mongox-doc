import { defineConfig } from 'vitepress'

export const zh =  defineConfig({
    title: "go-mongox",
    description: "The documentation for go-mongox",
    themeConfig: {
        nav: [
            { text: '指南', link: '/introduction/getting-started' },
        ],

        sidebar: [
            {
                text: '简介',
                collapsed: true,
                items: [
                    { text: '什么是 go-mongox？', link: '/introduction/what-is-go-mongox' },
                    { text: '快速开始', link: '/introduction/getting-started' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/chenmingyong0423/go-mongox-doc' }
        ]
    },
})
