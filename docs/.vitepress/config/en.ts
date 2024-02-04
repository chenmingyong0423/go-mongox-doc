import { defineConfig } from 'vitepress'

export const en =  defineConfig({
    title: "go-mongox",
    description: "The documentation for go-mongox",
    themeConfig: {
        nav: [
            { text: 'Guide', link: '/en/introduction/getting-started' },
        ],

        sidebar: [
            {
                text: 'Introduction',
                collapsed: true,
                items: [
                    { text: 'What is go-mongox?', link: '/en/introduction/what-is-go-mongox' },
                    { text: 'Getting Started', link: '/en/introduction/getting-started' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/chenmingyong0423/go-mongox-doc' }
        ],
        footer: {
            message: 'Documentation licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0.</a>',
            copyright: `Copyright © 2024-${new Date().getFullYear()} <a href="https://github.com/chenmingyong0423" target="_blank">Mingyong Chen</a>`
        },
    },
})
