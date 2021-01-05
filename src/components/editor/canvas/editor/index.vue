<template>
  <div class="canvas-editor-container" :style="[style]">
    <slot></slot>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CanvasEditor',
  computed: {
    ...mapState('canvas', ['clientConfig']),
    style() {
      const { width, height } = this.clientConfig
      return {
        width: width + 'px',
        height: height + 'px',
      }
    }
  }
}
</script>

<style lang="less" scoped>
.canvas-editor-container {
  position: relative;
  margin: 0 auto;
  background-color: #fff;
}
</style>
