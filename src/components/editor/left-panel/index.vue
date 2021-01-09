<template>
  <el-tabs class="editor-left-panel-container" v-model="activeTab">
    <el-tab-pane label="组件列表" name="components">
      <components></components>
    </el-tab-pane>
    <el-tab-pane label="页面管理" name="pages">
      页面管理
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Components from './components'

export default {
  name: 'editor-left-panel',
  components: {
    Components,
  },
  data() {
    return {
      activeTab: 'components',
    }
  },
  methods: {
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
