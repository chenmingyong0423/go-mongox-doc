import { defineConfig } from 'vitepress'

export const shared = defineConfig({
    title: 'go mongox',
    sitemap: {
        hostname: 'https://go-mongox.dev'
    },
    /* prettier-ignore */
    head: [
        ['link', { rel: 'icon', type: 'image/png', href: '/go-mongox-logo.png' }],
        [ 'meta', { name: 'google-site-verification', content: 'e5RBACChMwOXmopO_t2NOOv6GWbHv5NdQw-eCxILdtc' } ],
        [ 'meta', { name: 'baidu-site-verification', content: 'codeva-sIm3HwlyYX' } ],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'zh' }],
        ['meta', { property: 'og:title', content: 'go mongox 指南' }],
        ['meta', { property: 'og:site_name', content: 'go mongox' }],
        ['meta', { property: 'og:image', content: 'https://go-mongox.dev/go-mongox-logo.png' }],
        ['meta', { property: 'og:url', content: 'https://go-mongox.dev/' }],
    ],

    themeConfig: {
        search: {
            provider: 'local',
        },
    }
})