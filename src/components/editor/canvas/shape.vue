<template>
  <div class="canvas-shape-container" :style="[style]">
    <component
      v-for="(component, index) in componentList"
      :key="index"
      :is="component.component"
      :style="formatComponentStyle(component.style)"
      :propValue="component.propValue"
      @click.native.stop="handleClick(index)"
    ></component>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import styleParser from '@/utils/styleParser'

export default {
  name: 'canvas-shape',
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
  methods: {
    ...mapMutations('canvas', ['updateSelectIndex']),
    handleClick(index) {
      // 更新选中组件索引
      const value = this.isEdited ? index : null
      this.updateSelectIndex(value)
    },
    formatComponentStyle(style) {
      return styleParser(style)
    }
  }
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
