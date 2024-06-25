<template>

  <LayoutTopBar />

  <div class="grid-layout" >
    <div class="grid-layout-style">
      <el-dropdown class="grid-layout-dropdown" trigger="click">
        <span class="el-dropdown-link">当前区域<el-icon class="el-icon--right"><arrow-down /></el-icon></span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item >当前区域</el-dropdown-item>
            <el-dropdown-item >所有区域</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <el-button class="grid-layout-button" link>
        <DynamicIcon  icon="EditPen" style="width: 15px"/>
        自定义
      </el-button>
    </div>

    <div class="layout-box">
      <grid-layout
          v-model:data="layout.data"
          :isDrawGridLines="false"
          :isCollision="false"
          :remove="false"
          :resize="false"
          :gutter="20"
          @draggableStart="draggableStart"
          @draggableHandle="draggableHandle"
          @draggableEnd="draggableEnd"
          @remove="remove"
      >
        <grid-item v-for="item in layout.data" :key="item.id" :id="item.id">
          <div v-if="item.id == 'main-info'" style="width: 100%; height: 100%;background-color: #ffffff">
            <div class="maininfo-container" >
              <span style="margin-left: 20px; margin-top: 20px; margin-bottom:20px ;font-family:SimHei; font-size: 25px; font-weight: bold ">
                欢迎，{{ user }}
              </span>
              <span class="time-container">
                {{ item.message }}
              </span>
              <div class="time-container time">
                {{ currentDateTime }}
              </div>
            </div>
          </div>
          <div v-else style="width: 100%; height: 100%; background-color: #ffffff">
            <div style="padding: 20px; font-size: 14px; font-weight: bolder"> {{ item.id }} </div>
            <div style="display: flex" v-if="item.type == 'symmetry' ">
              <div class="loader">
                <div class="dashboard-icon">
                  <p class="layout-name">{{ item.count }}</p>
                  <p class="layout-info">总数量</p>
                </div>
                <div class="albumcover">
                  <DynamicIcon  :icon="item.icon" style="width: 30px"/>
                </div>

              </div>
              <div style="flex: 0.5">
                <div >
                  <div style="display: flex; margin-top: 5px; border-bottom: 1px solid #dbdde0; width: 90%; padding: 5px">
                    <div class="icon-point-green"></div>
                    <span>已运行</span>
                  </div>
                  <div style="display: flex; margin-top: 10px; border-bottom: 1px solid #dbdde0; width: 90%; padding: 5px">
                    <div class="icon-point-red"></div>
                    <span >未运行</span>
                  </div>
                  <div style="display: flex; margin-top: 10px; padding: 5px">
                    <div class="icon-point-other"></div>
                    <span>其他</span>
                  </div>
                </div>
              </div>

            </div>
            <div v-else-if="item.type == 'echart'">
              <el-progress class="dashboard-paogress" type="dashboard" :percentage="item.percent" width="60">
                <template #default="{ percentage }">
                  <span class="percentage-value">{{ percentage }}%</span>
                </template>
              </el-progress>
              <div class="echart-text" >已用</div>
              <div class="echart-text" >总量</div>
            </div>
          </div>
        </grid-item>
      </grid-layout>
    </div>
  </div>

</template>

<script setup lang="ts">
import {defineAsyncComponent, ref, onMounted} from 'vue'
import { GridLayout, GridItem } from 'vue3-draggable-grid'
import 'vue3-draggable-grid/dist/style.css'
import DynamicIcon from '/@/utils/icon.ts'

const LayoutTopBar = defineAsyncComponent(() => import('/@/layout/navBar/topBar/index.vue'))

const user = ref('admin')

const layout = ref(
    {
      data: [
        {"id": "物理机","type": "symmetry","icon": "Coin","count":"5", "x": 1, "y": 1, "h": 3, "w": 4},
        {"id": "CPU已分配率","type": "echart","percent": 0, "x": 5, "y": 1, "h": 3, "w": 2},
        {"id": "内存已分配率","type": "echart","percent": 20, "x": 7, "y": 1, "h": 3, "w": 2},
        {"id": "main-info", "message":"平台时间", "x": 9, "y": 1, "h": 3, "w": 4, static: true},

        {"id": "云主机","type": "symmetry","icon": "Files","count":"4", "x": 1, "y": 4, "h": 3, "w": 4},
        {"id": "主存储分配率","type": "echart","percent": 50, "x": 5, "y": 4, "h": 3, "w": 2},
        {"id": "镜像服务器使用率","type": "echart","percent": 10, "x": 7, "y": 4, "h": 3, "w": 2},
        {"id": "云盘","type": "symmetry","icon": "Files","count":"4", "x": 9, "y": 4, "h": 3, "w": 4},

        {"id": "主存储","type": "symmetry","icon": "CopyDocument","count":"22", "x": 1, "y": 7, "h": 3, "w": 4},
        {"id": "Top10云盘真实容量", "x": 5, "y": 7, "h": 6, "w": 4},
        {"id": "最近访问","icon": "Tickets","count":"9", "x": 9, "y": 7, "h": 3, "w": 4},
        {"id": "快照", "x": 9, "y": 10, "h": 6, "w": 4},
        {"id": "镜像服务器","type": "symmetry","icon": "Guide","count":"19", "x": 1, "y": 10, "h": 3, "w": 4}
      ]
    }
)

const currentDateTime = ref<string>(new Date().toLocaleString());

// 每秒更新一次当前日期和时间
const updateDateTime = () => {
  const now = new Date();
  setTimeout(() => {
    currentDateTime.value = new Date().toLocaleString();
    updateDateTime();
  }, 1000 - now.getMilliseconds());
};
// 组件挂载时启动更新
onMounted(() => {
  updateDateTime();
});

</script>
<style  scoped>
.grid-layout{
  height: 100vh;
  overflow: scroll;
  background: #f5f7fa;

  .grid-layout-style {
    padding: 5px;

    .grid-layout-dropdown {
      margin-top: 10px;
      margin-left: 10px;
    }

    .grid-layout-button {
      margin-top: 10px;
      float: right;
    }
  }

  .layout-box {
    width: auto;
    padding: 10px;

    .maininfo-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }

    .time-container {
      padding: 8px;
      border-radius: 4px;
      width: 90%;
      color: #707275;
      margin-top: 5px;
      margin-left: 10px;
      box-sizing: border-box;
    }

    .time {
      background-color: #f5f7fa;
      padding: 15px;
      border-radius: 4px;
    }
  }

  .layout-icon{
    float: left;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 55px;
    height: 55px;
    border-style: solid;
    border-width: 1px;
    border-radius: 50%;
    -moz-border-radius: 50%; -webkit-border-radius : 50%;
    border-color: #1E90FF;
    -webkit-border-radius: 50%;
  }


  .main {
    background-color: white;
    padding: 1em;
    padding-bottom: 1.1em;
    border-radius: 15px;
    margin: 1em;
  }

  .loader {
    flex: 0.5;
    display: flex;
    flex-direction: row;
    height: 4em;
    padding-right: 5em;
    transform: rotate(180deg);
    margin-top: 30px;
    justify-content: right;
    border-radius: 20px;
    transition: .4s ease-in-out;
  }

  .albumcover {
    position: relative;
    margin-right: 1em;
    height: 55px;
    width: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f7fa;
    align-self: center;
    border-radius: 50%;
  }

  .dashboard-icon {
    position: relative;
    transform: rotate(180deg);
    margin-right: 1em;
    color: black;
    align-self: center;
  }

  .layout-name {
    text-align: center;
    font-size: 20px;
  }

  .layout-info {
    font-size: 1em;
    color: #707275;
  }

  .icon-point-green {
    margin-top: 4px;
    margin-right: 5px;
    width: 7px;
    height: 7px;
    background-color: #5dd44b;
    border-radius: 50%;
  }

  .icon-point-red {
    margin-top: 4px;
    margin-right: 5px;
    width: 7px;
    height: 7px;
    background-color: red;
    border-radius: 50%;
  }

  .icon-point-other {
    margin-top: 4px;
    margin-right: 5px;
    width: 7px;
    height: 7px;
    background-color: #96989b;
    border-radius: 50%;
  }

  .dashboard-paogress{
    display: flex;
    justify-content: center;
  }

  .echart-text{
    width: 100%;
    margin-left: 20px;
    margin-top: 10px
  }
}

</style>
