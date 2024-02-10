import {defineConfig} from 'vitepress'

export const zh = defineConfig({
    title: "go-mongox",
    description: "The documentation for go-mongox",
    themeConfig: {
        nav: [
            {text: '指南', link: '/introduction/getting-started'},
            {text: '贡献', link: '/contribute'},
        ],

        outline: {
            label: '页面导航',
            level: [1, 6]
        },

        sidebar: [

            {
                text: '简介',
                collapsed: true,
                items: [
                    {text: '什么是 go-mongox？', link: '/introduction/what-is-go-mongox'},
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
                    {text: '创建器', link: '/operator/creator'},
                    {text: '查询器', link: '/operator/finder'},
                    {text: '更新器', link: '/operator/updater'},
                    {text: '删除器', link: '/operator/deleter'}
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
