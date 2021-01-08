export default {
  namespaced: true,
  state: {
    // 画布窗口配置
    shapeConfig: {
      width: 375,
      height: 667,
    },
    componentList: [], // 组件列表
  },
  mutations: {
    updateShapeConfig(state, data) {
      state.shapeConfig = Object.assign({}, data)
    },
    updateComponentList(state, data) {
      state.componentList = [].concat(data)
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