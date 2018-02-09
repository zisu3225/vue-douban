import downsize from 'downsize'

// 分割字符串
export const downSizeMsg = function (msg, num) {
  return downsize(msg, {characters: num})
}
export const toArray = function (value) {
  return value.split(',')
}
