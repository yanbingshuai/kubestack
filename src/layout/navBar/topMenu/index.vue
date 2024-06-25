<template>
  <div class="navbar-item allMenu cursor-pointer h-full flex items-center px-2">
    <div>
      <SvgIcon name="iconfont icon-caidan" />
      <div class="nav-bar-list">
        <div class="search">
          <button> <DynamicIcon  icon="Search" style="width: 17px"/></button>
          <input type="text" placeholder="搜索">
        </div>
        <div class="showData" v-for="group in gropsItems" :key="group.title">

          <div style="border-color: #dbdde0; font-size: 12px" orientation="left" orientation-margin="0px">
            <span style="color: #96989b">{{group.title }}</span>
          </div>

          <div class="dataItems" >
            <div class="showData_inner"  v-for="item in group.items" :key="item.index">
              <span>
                <div  class="showData_inner_name">
                  {{item.name}}
                </div>
                <div class="showData_inner_inner"  v-for="classify in item.classify" :key="classify">
                    {{ classify }}
                </div>
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref} from 'vue';
import DynamicIcon from "/@/utils/icon.ts";

const gropsItems = ref([
  {
    title: "资源中心",
    items:[
      {index: 2,type:"span1",span: 6,name: "云主机", classify:["云主机", "云盘", "镜像", "计算规格", "云盘规格","快照"]},
      {index: 2,type:"span2",span: 6,name: "硬件设施", classify:["区域", "集群","物理机", "主存储", "镜像服务器"]},
      {index: 2,type:"span2",span: 6,name: "网络资源", classify:["二层网络","VXLAN Pool", "公有网络", "扁平网络", "VPC网络","VPC路由器","路由器镜像", "路由器规格"]},
      {index: 2,type:"span2",span: 6,name: "网络服务", classify:["安全组", "虚拟IP", "弹性IP","端口转发","负载均衡"]},
    ]
  },
  {
    title: "平台运维",
    items: [
      {index: 2,type:"span1",span: 6,name: "消息日志", classify:["操作日志"]}
    ]
  },
  {
    title: "设置",
    items: [
      {index: 2,type:"span1",span: 6,name: "设置", classify:["全局设置"]}
    ]
  }
])

</script>


<style>
.nav-bar-list {
  width: 750px;
  height: auto;
  background: #ffffff;
  border: 1px;
  border-top: 1px solid #eeeeee;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 0;
  top: 55px;
  display: none;
  z-index: 10;
  line-height: normal;
  padding-left: 20px;
  padding-bottom: 30px;
}

.navbar-item div:hover > .nav-bar-list {
  display: block;
}

.search {
  width: 100%;
  height: 50px;
  float: left;
  margin-top: 20px;
}

.search input {
  width: 244px;
  height: 30px;
  float: left;
  border: 1px solid #d2d2d2;
  background-color: transparent;
  outline: none;
}

.search button {
  width: 30px;
  height: 30px;
  float: left;
  border: 1px solid #d2d2d2;
}

.showData {
  margin-right: 20px;
}

.showData_inner{
  flex: 1;
  font-size: 16px;
  font-weight: normal;

  .showData_inner_name{
    margin-top: 15px;
    font-size: 14px;
    font-weight: bolder
  }

  .showData_inner_inner{
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 13px;
    color: #707275;
  }
}

.dataItems {
  color: #0a0a0a;
  width: 100%;
  float: left;
  margin-bottom: 5px;
  margin-left: 20px;
  display: flex;
}

.dataItems-main {
  margin-top: 10px;
  font-weight: normal;
  color: #58585b;
}

</style>
