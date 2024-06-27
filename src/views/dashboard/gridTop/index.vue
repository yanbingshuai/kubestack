<template>
  <div class="grid-topbar">
    <div >
      <span style="font-size: 16px; font-weight: bold">
        自定义首页
      </span>
      <span style="color: #96989b">
        (已添加 {{i}} 个模块，共可添加{{totle}}个)
      </span>

    </div>

    <el-space>
      <el-button @click="$emit('cancel')">取消</el-button>
      <el-button @click="$emit('cancel')">恢复默认</el-button>
      <el-button @click="$emit('save')">保存</el-button>
    </el-space>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const i = ref(13)
const totle = ref(30)

const visible = ref(false);

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
.grid-topbar {
  width: calc(100% - 200px);
  height: 50px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  left: 200px;
  display: none;
}

.custom-mode .grid-topbar {
  display: flex;
}
</style>
