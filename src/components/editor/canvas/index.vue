<template>
  <div @drop.prevent="handleDrop" @dragover="handleDragOver" class="editor-canvas-container">
    <div class="editor-canvas-header">
      <el-radio-group v-model="canvasStatus" size="mini">
        <el-radio-button label="edit">编辑</el-radio-button>
        <el-radio-button label="preview">预览</el-radio-button>
      </el-radio-group>
    </div>
    <canvas-shape
      :width="shapeConfig.width"
      :height="shapeConfig.height"
      :isEdited="isEdited"
      :componentList="componentList"
    ></canvas-shape>
    <div v-if="isEdited" class="adjust-line">
      <input
        v-model.number="shapeWidth"
        type="text"
        class="input input-width"
        @keyup.enter="onSizeChange"
        @blur="onAdjustBlur"
      />
      <span class="adjust-label">x</span>
      <input
        v-model.number="shapeHeight"
        type="text"
        class="input input-height"
        @keyup.enter="onSizeChange"
        @blur="onAdjustBlur"
      />
      <span class="adjust-label">px</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CanvasShape from './shape';
import componentList from '@/customComponents/props';

export default {
  name: 'editor-canvas',
  components: {
    CanvasShape,
  },
  data() {
    return {
      canvasStatus: 'edit',
      shapeWidth: 375,
      shapeHeight: 667,
    };
  },
  computed: {
    ...mapState('canvas', ['shapeConfig', 'componentList']),
    isEdited() {
      return this.canvasStatus === 'edit';
    },
  },
  methods: {
    ...mapActions('canvas', ['updateShapeConfig', 'addComponent']),
    handleDrop(e) {
      if (this.isEdited) {
        const component = componentList[e.dataTransfer.getData('index')];
        this.addComponent(component);
      }
    },
    handleDragOver() {
      event.preventDefault();
    },
    handleEdit() {
      this.canvasStatus = 'edit';
    },
    handlePreview() {
      this.canvasStatus = 'preview';
    },
    onSizeChange() {
      this.updateShapeConfig({
        width: this.shapeWidth,
        height: this.shapeHeight,
      });
    },
    onAdjustBlur() {
      const { width, height } = this.shapeConfig;
      this.shapeWidth = width;
      this.height = height;
    },
  },
};
</script>

<style lang="less" scoped>
.editor-canvas-container {
  height: 100%;
  padding-top: 50px;
  overflow: auto;
  box-sizing: border-box;
  background-color: #f5f5f5;
}
.editor-canvas-header {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.adjust-line {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  color: #666;
  font-size: 14px;
}
.adjust-label {
  margin: 0 5px;
  vertical-align: middle;
}
.input {
  width: 50px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  color: #333;
  text-align: center;
}
</style>
