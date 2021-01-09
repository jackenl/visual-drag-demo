export default {
  width: {
    name: 'width',
    label: '宽度(px)',
    component: 'el-input',
    componentProps: {
      type: 'number'
    }
  },
  height: {
    name: 'height',
    label: '高度(px)',
    component: 'el-input',
    componentProps: {
      type: 'number'
    }
  },
  backgroundColor: {
    name: 'backgroundColor',
    label: '背景色',
    component: 'el-color-picker',
    componentProps: {
    }
  },
  borderRadius: {
    name: 'borderRadius',
    label: '圆角(px)',
    component: 'el-input',
    componentProps: {
      type: 'number'
    }
  },
  borderWidth: {
    name: 'borderWidth',
    label: '边框宽度(px)',
    component: 'el-input',
    componentProps: {
      type: 'number'
    }
  },
  borderColor: {
    name: 'borderColor',
    label: '边框颜色',
    component: 'el-color-picker',
    componentProps: {
    }
  },
  fontSize: {
    name: 'fontSize',
    label: '字号(px)',
    component: 'el-input',
    componentProps: {
      type: 'number'
    }
  },
  fontWeight: {
    name: 'fontWeight',
    label: '字粗',
    component: 'el-input',
    componentProps: {
      type: 'number'
    },
    selectOptions: [
      {
        label: 'light(300)',
        value: 300
      },
      {
        label: 'normal(400)',
        value: 400
      },
      {
        label: 'medium(500)',
        value: 500
      },
      {
        label: 'semi bold(600)',
        value: 600
      },
      {
        label: 'bold(700)',
        value: 700
      }
    ]
  },
  lineHeight: {
    name: 'lineHeight',
    label: '行高(px)',
    component: 'el-input',
    componentProps: {
      type: 'number'
    }
  },
  color: {
    name: 'color',
    label: '文字颜色',
    component: 'el-color-picker',
    componentProps: {
    }
  }
}