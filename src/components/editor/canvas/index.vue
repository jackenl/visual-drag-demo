<template>
  <div class="editor-canvas-container">
    <canvas-header></canvas-header>
    <canvas-editor></canvas-editor>
    <adjust-client></adjust-client>
  </div>
</template>

<script>
import CanvasHeader from './header'
import CanvasEditor from './editor'
import AdjustClient from './adjust/adjust-client'

export default {
  name: 'EditorCanvas',
  components: {
    CanvasHeader,
    CanvasEditor,
    AdjustClient,
  },
}
</script>

<style lang="less" scoped>
.editor-canvas-container {
  height: 100%;
  padding-top: 30px;
  overflow: auto;
  box-sizing: border-box;
  background-color: #f5f5f5;
}
</style>
