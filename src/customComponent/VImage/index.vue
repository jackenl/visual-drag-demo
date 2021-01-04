<template>
  <div class="v-image-container">
    <img :src="propValue" alt="">
  </div>
</template>

<script>
export default {
  name: 'VImage',
  props: {
    propValue: {
      type: String,
      require: true,
    }
  }
}
</script>

<style lang="less" scoped>
</style>
