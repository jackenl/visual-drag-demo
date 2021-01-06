<template>
  <div class="component-list-container">
    <div class="component-list-wrap" @dragstart="handleDragStart">
      <div class="component-item" v-for="(item, index) in componentList" :key="index" draggable :data-index="index">
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import componentList from '@/customComponents/properties'

export default {
  name: 'ComponentList',
  data() {
    return {
      componentList,
    }
  },
  methods: {
    handleDragStart(e) {
      e.dataTransfer.setData('index', e.target.dataset.index)
    }
  }
}
</script>

<style lang="less" scoped>
.component-list-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
}
.component-item {
  flex-basis: 45%;
  border: 1px solid #ddd;
  cursor: grab;
  padding: 5px;
  margin-bottom: 10px;
  color: #333;
  text-align: center;
}
</style>
