/**
 * @file 请求方法处理方法
 * @author lvhongbin(lvhongbin@baidu.com)
 */

import { isString } from './typeof'

export default function processMethod(method?: string): string | void {
  if (isString(method)) {
    return method.toUpperCase()
  }
}
