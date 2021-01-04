<template>
  <button class="v-button-container">{{ propValue }}</button>
</template>

<script>
export default {
  name: 'VButton',
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
