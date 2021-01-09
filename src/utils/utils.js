/**
 * 深克隆
 * @param {any} target 深克隆目标 
 */
export function deepClone(target) {
  if (typeof target == 'object') {
      const result = Array.isArray(target)? [] : {}
      for (const key in target) {
          if (typeof target[key] == 'object') {
              result[key] = deepClone(target[key])
          } else {
              result[key] = target[key]
          }
      }
      return result
  }
  
  return target
}

/**
 * 数组元素交换
 * @param {array} arr 
 * @param {number} i 
 * @param {number} j 
 */
export function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
