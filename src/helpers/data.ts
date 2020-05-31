/**
 * @file 数据处理方法
 * @author lvhongbin(lvhongbin@baidu.com)
 */

import { isPlainObject } from './typeof'
import { ParseResponseData } from '../types/index'

export function processRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export function parseRequest({ responseText, response, responseType }: ParseResponseData): any {
  try {
    if (typeof responseText === 'string') {
      responseText = JSON.parse(responseText)
    }
  } catch (e) {
    // console.log(e);
  }
  return responseType === 'text' ? responseText : response
}
