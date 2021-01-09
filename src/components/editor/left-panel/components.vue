<template>
  <div class="components-container">
    <div class="components-wrap" @dragstart="handleDragStart">
      <div class="component-item" v-for="(item, index) in propsList" :key="index" draggable :data-index="index">
        <i :class="['icon', item.icon]"></i>
        <span>{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import propsList from '@/customComponents/props'

export default {
  name: 'components',
  data() {
    return {
      propsList,
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
.components-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 10px;
}
.component-item {
  flex-basis: 45%;
  border-radius: 5px;
  border: 1px solid #333;
  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;
  color: #333;
  text-align: center;
  cursor: grab;
}
.icon {
  margin-right: 4px;
}
</style>
