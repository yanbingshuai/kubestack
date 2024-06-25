<template>
  <el-menu
      :default-active="defalutState.defaultActive"
      :collapse="defalutState.isCollapse"
      :ellipsis="false"
      class="topbar-menu"
      mode="horizontal"
      background-color="transparent"
      router
  >
    <template v-for="item in topmen_items">
      <el-sub-menu v-if="item.children" :index="item.title" :key="item.title">
        <template #title>
          {{ item.title }}
        </template>
        <el-menu-item
            v-for="subItem in item.children"
            :key="subItem.title"
            :index="subItem.path"
        >
          {{ subItem.title }}
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item v-else :index="item.path" :key="item.id">
        <template #title>{{ item.title }} </template>
      </el-menu-item>
    </template>

  </el-menu>

</template>
<script setup lang="ts">
import {reactive, ref} from 'vue'

const topmen_items = ref([
  {
    title: '首页',
    path: '/homepage/dashboard'
  },
  {
    title: '资源中心',
    children: [
      {
        title: '云资源池',
        path: '/path1',
      },
      {
        title: '硬件设施',
        path: '/path2',
      },
      {
        title: '网络资源',
        path: '/path3',
      },
      {
        title: '平台管理',
        path: '/path4',
      }
    ]
  },
  {
    title: '平台运维',
    children: [
      {
        title: '消息日志',
        path: '/log',
      }
    ]
  },
  {
    title: '设置',
    path: '/config'
  },
]);

// 定义激活时默认路径
const defalutState = reactive({
  defaultActive: '/homepage/dashboard',
  isCollapse: false,
});

</script>
<style >
.topbar-menu {
  height: auto;

  .el-menu-item.is-active {
    background-color: #fff !important;
    color: #fff;
    span {
      color: #fff !important;
    }
  }

  .el-sub-menu__title.el-tooltip__trigger {
    background-color: #fff !important;
  }
}
</style>

