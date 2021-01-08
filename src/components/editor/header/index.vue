<template>
  <div class="editor-header-container">
    <div class="canvas-control">
      <el-button @click="onBackout">撤销(ctrl+z)</el-button>
      <el-button @click="onReform">重做(ctrl+y)</el-button>
      <el-button @click="onClear">清空画布</el-button>
      <el-button @click="onPreview">预览</el-button>
      <el-button @click="onSave">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditorHeader',
  methods: {
    onBackout() {
      this.$emit('backout')
    },
    onReform() {
      this.$emit('reform')
    },
    onClear() {
      this.$emit('clear')
    },
    onPreview() {
      this.$emit('preview')
    },
    onSave() {
      this.$emit('save')
    },
  }
}
</script>

<style lang="less" scoped>
.editor-header-container {
  height: 60px;
  background-color:	#363636;
}
.canvas-control {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 20px;
}
</style>
