<template>
  <div class="editor-header-container">
    <el-button @click="onBackout">撤销</el-button>
    <el-button @click="onReform">重做</el-button>
    <el-button @click="onClear">清空画布</el-button>
    <el-button @click="onPreview">预览</el-button>
    <el-button @click="onSave">保存</el-button>
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
    }
  }
}
</script>

<style lang="less" scoped>
.editor-header-container {
  padding: 20px;
}
</style>
