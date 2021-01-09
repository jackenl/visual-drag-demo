<template>
  <div class="props-container">
    <el-form ref="from" :model="props" label-position="left" label-width="100px">
      <el-form-item v-for="item in editedProps" :key="item.name" :label="item.label">
        <component
          :is="item.component"
          v-model="props[item.name]"
          v-bind="item.componentProps"
          @input="onValueChange"
        ></component>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import propsConfig from '@/customComponents/props/propsConfig'
import { deepClone } from '@/utils/utils'

export default {
  name: 'props',
  data() {
    return {
      props: {},
    }
  },
  watch: {
    selectIndex() {
      this.updateProps()
    },
  },
  computed: {
    ...mapState('canvas', ['componentList', 'selectIndex']),
    selectComponent() {
      const { componentList, selectIndex } = this
      return selectIndex !== null ? componentList[selectIndex] : null
    },
    editedProps() {
      let result = []
      if (this.selectComponent) {
        const { style, excludeStyle, customConfig } = this.selectComponent
        result = [].concat(customConfig)
        Object.keys(style).forEach((key) => {
          if (!excludeStyle.includes(key)) {
            const config = propsConfig[key]
            result.push(config)
          }
        })
      }
      return result
    },
  },
  methods: {
    ...mapActions('canvas', ['updateComponent']),
    updateProps() {
      this.props = {}
      this.editedProps.forEach((item) => {
        let value
        if (item.isPropValue) {
          value = this.selectComponent.propValue
        } else {
          value = this.selectComponent.style[item.name]
        }
        this.$set(this.props, item.name, value)
      })
    },
    onValueChange() {
      this.updateComponent(this.props)
    },
  },
}
</script>

<style lang="less" scoped>
</style>
