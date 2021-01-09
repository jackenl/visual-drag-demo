export default {
  namespaced: true,
  state: {
    // 画布窗口配置
    shapeConfig: {
      width: 375,
      height: 667,
    },
    componentList: [], // 组件列表
    selectIndex: null, // 选中组件索引
  },
  mutations: {
    updateShapeConfig(state, data) {
      state.shapeConfig = Object.assign({}, data)
    },
    updateComponentList(state, data) {
      state.componentList = [].concat(data)
    },
    updateSelectIndex(state, data) {
      state.selectIndex = data
    },
    updateComponent(state, { index, config }) {
      const component = state.componentList[index]
      const { propValue, style } = config
      component.style = Object.assign(component.style, style)
    }
  },
  actions: {
    updateShapeConfig({ commit, state }, config) {
      commit('updateShapeConfig', config)
    },
    addComponent({ commit, state }, component) {
      const componentList = state.componentList
      componentList.push(component)
      commit('updateComponentList', componentList)
    },
    updateComponent({ commit, state }, props) {
      const index = state.selectIndex
      const { propValue, ...style } = props
      commit('updateComponent', {
        index,
        config: {
          propValue,
          style
        }
      })
    },
    removeComponent({ commit, state }, index) {
      const componentList = state.componentList
      componentList.splice(index, 1);
      commit('updateComponentList', componentList)
    },
    clearComponentList({ commit, state }) {
      commit('updateComponentList', [])
    }
  }
}