/**
 * mixin 存放vue相关的公共函数，比如错误的处理
 * 只有依赖都满足时才能正常工作
 */
import { MessageBox } from 'element-ui'

export const errorMixins = {
  methods: {
    handleApiError (error) {
      if (error.response) {
        MessageBox.alert(error.response.data.desc, 'Error')
      } else {
        MessageBox.alert(error.message, 'Exception')
      }
    }
  }
}
