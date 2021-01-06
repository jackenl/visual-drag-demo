export default {
  namespaced: true,
  state: {
    // 画布窗口配置
    clientConfig: {
      width: 375,
      height: 667,
    }
  },
  mutations: {
    updateClientConfig(state, data) {
      state.clientConfig = Object.assign({}, data)
    },
  },
  actions: {
  }
}