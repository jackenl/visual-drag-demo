/**
 * 样式属性格式化
 * @param {object} style 
 * @param {array} filter 
 */
export default function(style, filter = []) {
  const longitudes = ['width', 'height', 'borderRadius', 'borderWidth', 'fontSize']
  const angles = ['rotate', 'skew']
  const result = {}
  Object.keys(style).forEach((key) => {
    if (longitudes.includes(key)) {
      result[key] = style[key] + 'px'
    } else if (angles.includes(key)) {
      result[key] = style[key] + 'deg'
    } else {
      result[key] = style[key]
    }
  })
  return result
}