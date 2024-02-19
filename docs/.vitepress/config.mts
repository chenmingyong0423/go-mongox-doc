import { defineConfig } from 'vitepress'
import { en } from './config/en'
import { zh } from './config/zh'
import {shared} from "./config/shared";

export default defineConfig({
    ...shared,
    locales: {
        root: { label: '简体中文', ...zh },
        en: { label: 'English', ...en }
    },
})