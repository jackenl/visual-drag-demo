<template>
  <el-tabs class="editor-left-panel-container" v-model="activeTab" @tab-click="handleClick">
    <el-tab-pane label="组件列表" name="components">
      组件列表
    </el-tab-pane>
    <el-tab-pane label="页面管理" name="pages">
      页面管理
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'EditorLeftPanel',
  data() {
    return {
      activeTab: 'components',
    }
  },
  methods: {
    handleClick(tab) {
      console.log(tab)
    }
  }
}
</script>

<style lang="less" scoped>
.editor-left-panel-container {
  width: 250px;
  padding: 10px;
  background-color: #fff;
}
</style>
