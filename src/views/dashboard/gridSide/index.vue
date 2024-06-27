<template>
  <div class="grid-sidebar">

    <el-space class="grid-side-container" direction="vertical">
      <span class="left-align-text">添加首页模块</span>
      <el-button style="width: 170px" @click="dialogTableVisible1 = true">
        <span>
          资源状态统计
        </span>
      </el-button>
      <el-button style="width: 170px">平台用量统计</el-button>
      <el-button style="width: 170px">资源TOP排行</el-button>
      <el-button style="width: 170px" disabled>最近访问</el-button>
      <el-button style="width: 170px" disabled>用户信息</el-button>
    </el-space>
  </div>

  <el-dialog v-model="dialogTableVisible1" title="添加模块:资源状态统计" width="800" >
    <div style="height: 200px; background-color: #f5f7fa">
      样式
    </div>

    <div style="margin-top: 30px">
      <el-select
          v-model="value"
          placeholder="请选择"
          size="large"
          style="width: 240px"
      >
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </div>
  </el-dialog>

  <el-dialog v-model="dialogTableVisible2" title="添加模块:平台用量统计" width="800">
    <el-table :data="gridData">
      <el-table-column property="date" label="Date" width="150" />
      <el-table-column property="name" label="Name" width="200" />
      <el-table-column property="address" label="Address" />
    </el-table>
  </el-dialog>

  <el-dialog v-model="dialogTableVisible3" title="添加模块:资源TOP排行" width="800" >
    <el-table :data="gridData">
      <el-table-column property="date" label="Date" width="150" />
      <el-table-column property="name" label="Name" width="200" />
      <el-table-column property="address" label="Address" />
    </el-table>
  </el-dialog>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const visible = ref(false);
const dialogTableVisible1 = ref(false)
const dialogTableVisible2 = ref(false)
const dialogTableVisible3 = ref(false)

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

const toggleVisibility = () => {
  visible.value = !visible.value;
};

onMounted(() => {
  window.addEventListener('toggle-custom-mode', toggleVisibility);
});

onUnmounted(() => {
  window.removeEventListener('toggle-custom-mode', toggleVisibility);
});
</script>

<style scoped>
.grid-sidebar {
  width: 200px;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  left: 0;
  display: none;
  box-shadow: 3px 0 5px -2px rgba(0, 0, 0, 0.3);
}

.custom-mode .grid-sidebar {
  display: block;
}

.grid-side-container{
  padding: 10px;
}
</style>
