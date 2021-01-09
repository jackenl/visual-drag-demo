<template>
  <el-tabs class="editor-right-panel-container" v-model="activeTab">
    <el-tab-pane label="属性" name="props">
      <props></props>
    </el-tab-pane>
    <el-tab-pane label="动画" name="animations">
      动画
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Props from './props'

export default {
  name: 'editor-right-panel',
  components: {
    Props,
  },
  data() {
    return {
      activeTab: 'props'
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.editor-right-panel-container {
  width: 300px;
  padding: 10px;
  background-color: #fff;
}
</style>
