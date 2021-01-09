<template>
  <button class="v-button-container">{{ propValue }}</button>
</template>

<script>
export default {
  name: 'v-button',
  props: {
    propValue: {
      type: String,
      default: '',
    }
  },
}
</script>

<style lang="less" scoped>
</style>
