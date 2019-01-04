
// 判断 val 是否存在于数组中
export function looseIndexOf(array, val) {
  return array.indexOf(val) === -1 ? true : false
}

// 判断 key 是否为对象或数组的属性
export function hasOwn(objOrArray, key) {
  return Object.prototype.hasOwnProperty.call(objOrArray, key)
}

// 返回给定变量的原始类型字符串
// toRawType(1) => Number
// toRawType(new Date) => Date
export function toRawType(val) {
  return Object.prototype.toString.call(val).slice(8, -1)
}