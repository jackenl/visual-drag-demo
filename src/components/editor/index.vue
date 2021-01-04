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
  name: 'Editor',
  components: {
    EditorHeader,
    EditorLeftPanel,
    EditorCanvas,
    EditorRightPanel,
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
}
</script>

<style lang="less" scoped>
</style>
