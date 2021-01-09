<template>
  <div class="editor-container">
    <editor-header></editor-header>
    <div class="editor-main">
      <editor-left-panel></editor-left-panel>
      <editor-canvas></editor-canvas>
      <editor-right-panel></editor-right-panel>
    </div>
  </div>
</template>

<script>
import EditorHeader from './header'
import EditorLeftPanel from './left-panel'
import EditorCanvas from './canvas'
import EditorRightPanel from './right-panel'

export default {
  name: 'editor',
  components: {
    EditorHeader,
    EditorLeftPanel,
    EditorCanvas,
    EditorRightPanel,
  },
}
</script>

<style lang="less" scoped>
.editor-container {
  position: relative;
  height: 100%;
}
.editor-main {
  display: flex;
  align-items: stretch;
  height: calc(100% - 60px);
}
/deep/ .editor-canvas-container {
  flex: 1;
  background-color: #f6f6f6;
}
</style>
