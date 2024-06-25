<template>
  <el-container >
    <el-header class="layout-navbars-header">基础云平台</el-header>
    <el-header class="layout-navbars-top">
      <el-space spacer="|" size="large">
        <allMenu />
        <TopMenu />
      </el-space>
    </el-header>
  </el-container>

</template>

<script setup lang="ts">
import {defineAsyncComponent} from "vue";

const allMenu = defineAsyncComponent(() => import('/@/layout/navBar/topMenu/index.vue'))
const TopMenu = defineAsyncComponent(() => import('/@/layout/navMenu/topMenu/index.vue'))
</script>
<style>
.layout-navbars-header {
  height: 50px;
  display: flex;
  align-items: center;
  background: #0043B1;
  color: #fff;
  border-bottom: 1px solid var(--next-border-color-light);
}
.layout-navbars-top {
  height: 46px;
  display: flex;
  align-items: center;
  background: var(--next-bg-topBar);
  border-bottom: 1px solid var(--next-border-color-light);
}
</style>
