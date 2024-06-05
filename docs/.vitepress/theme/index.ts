import DefaultTheme from 'vitepress/theme';
import 'gitalk/dist/gitalk.css'
import MyLayout from './MyLayout.vue'

export default {
    ...DefaultTheme,
    Layout: MyLayout,
}
