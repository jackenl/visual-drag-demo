<template>
  <div class="canvas-shape-container" :style="[style]">
    <component
      v-for="(component, index) in componentList"
      :key="index"
      :is="component.component"
      :style="component.style"
      :propValue="component.propValue"
    ></component>
  </div>
</template>

<script>
export default {
  name: 'CanvasShape',
  props: {
    width: {
      type: Number,
      default: 375,
    },
    height: {
      type: Number,
      default: 667,
    },
    // 是否可编辑
    isEdited: {
      type: Boolean,
      default: true,
    },
    // 自定义组件列表
    componentList: Array,
  },
  computed: {
    style() {
      return {
        width: this.width + 'px',
        height: this.height + 'px',
      };
    },
  },
};
</script>

<style lang="less" scoped>
.canvas-shape-container {
  position: relative;
  margin: 0 auto;
  overflow-y: auto;
  background-color: #fff;
}
</style>
