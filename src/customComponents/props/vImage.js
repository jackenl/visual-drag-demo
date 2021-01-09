const VueLogo = require('@/assets/logo.png')

export default {
  component: 'v-image',
  label: '图片',
  icon: 'el-icon-picture',
  propValue: VueLogo,
  animations: [],
  events: {},
  style: {
    width: 50,
    height: 50,
    borderRadius: 0, 
  },
  excludeStyle: [],
  customConfig: [
    {
      name: 'propValue',
      label: '图片上传',
      isPropValue: true,
      component: 'el-input',
      componentProps: {
        disabled: true
      }
    }
  ]
}
