<template>
  <Layout/>
</template>

<script type="ts" setup>
import DefaultTheme from 'vitepress/theme'

const {Layout} = DefaultTheme
import {watch, nextTick, onMounted} from "vue";
import "gitalk/dist/gitalk.css";
import {useRouter} from "vitepress";
import createGitalk from "../gitalk";

let {route} = useRouter(); // 页面路由对象

onMounted(() => {
  watch(
      () => route.path,
      (newPath) => {
        nextTick(() => {
          if (typeof window !== 'undefined') {
            const container = document.getElementById('gitalk-container');
            if (container) {
              container.innerHTML = '';
              createGitalk(newPath);
            }
          }
        })
      }
  );
});
</script>