import { defineConfig } from 'vitepress'
import { en } from './config/en'
import { zh } from './config/zh'

export default defineConfig({
    locales: {
        root: { label: '简体中文', ...zh },
        en: { label: 'English', ...en }
    }
})