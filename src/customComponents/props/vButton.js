export default {
  component: 'v-button',
  label: '按钮',
  icon: 'el-icon-edit',
  propValue: '按钮',
  animations: [],
  events: {},
  style: {
    width: 100,
    height: 35,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#222',
    fontSize: 14, 
    fontWeight: '400',
    lineHeight: 1,
    color: '#333',
  },
  excludeStyle: ['width', 'height'],
  customConfig: [
    {
      name: 'propValue',
      label: '按钮文字',
      isPropValue: true,
      component: 'el-input',
      componentProps: {
        type: 'text',
      }
    }
  ]
}
