<template>
  <div class="v-image-container">
    <img :src="propValue" alt="">
  </div>
</template>

<script>
export default {
  name: 'v-image',
  props: {
    propValue: {
      type: String,
      require: true,
    }
  }
}
</script>

<style lang="less" scoped>
.v-image-container {
  overflow: hidden;
}
img {
  width: 100%;
  height: 100%;
}
</style>
