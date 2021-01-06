import Vue from 'vue'
import VButton from './v-button'
import VImage from './v-image'

const Components = {
  VButton,
  VImage,
}

const Plugins = {
  install(Vue) {
    Object.keys(Components).forEach((key) => {
      Vue.component(key, Components[key])
    })
  }
}

Vue.use(Plugins)
