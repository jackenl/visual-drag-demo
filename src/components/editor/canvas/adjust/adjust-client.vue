<template>
  <div class="adjust-client-container">
    <div class="adjust-item">
      <!-- <span>px</span> -->
    </div>
    <input v-model.number="config.width" type="text" class="input input-width" @keyup.enter="onSizeChange">
    <span class="adjust-label">x</span>
    <input v-model.number="config.height" type="text" class="input input-height" @keyup.enter="onSizeChange">
    <span class="adjust-label">px</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      config: {}
    }
  },
  created() {
    const clientConfig = this.$store.state.canvas.clientConfig
    this.config = { ...clientConfig }
  },
  methods: {
    ...mapMutations('canvas', ['updateClientConfig']),
    onSizeChange() {
      this.updateClientConfig(this.config)
    }
  }
}
</script>

<style lang="less" scoped>
.adjust-client-container {
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
