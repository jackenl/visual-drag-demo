import Vue from 'vue'

const focus = {
  inserted: function(el) {
    el.focus()
  }
}

const directives = {
  focus,
}

Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key])
})
