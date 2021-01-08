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
      const name = Components[key].name
      Vue.component(name, Components[key])
    })
  }
}

Vue.use(Plugins)
