/**
 * @file 核心请求方法
 * @author lvhongbin(lvhongbin@baidu.com)
 */

import { parseHeaders } from '../helpers/header'
import { parseRequest } from '../helpers/data'
import getWrappedError from '../helpers/error'
import { AxiosRequestConfig, AxiosPromise, RandomStringObject } from '../types/index'

export default function request(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const { url, method = 'get', data = null, headers = {}, responseType, timeout } = config
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    Object.keys(headers).forEach(name => xhr.setRequestHeader(name, headers[name]))
    if (responseType) {
      xhr.responseType = responseType
    }
    if (timeout) {
      xhr.timeout = timeout
    }
    xhr.send(data)
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) {
        return
      }
      const { status, statusText } = xhr
      const responseData = parseRequest(xhr)
      const headers: RandomStringObject = parseHeaders(xhr.getAllResponseHeaders())
      if (status >= 200 && status < 400) {
        resolve({
          headers,
          status,
          statusText,
          responseData,
          config
        })
      }
      if (status >= 400) {
        // 状态码异常
        const statusError = getWrappedError(
          {},
          {
            contentText: `${statusText}，返回状态码${status}`,
            config,
            status,
            statusText,
            responseData,
            headers
          }
        )
        reject(statusError)
      }
    }
    xhr.onerror = (): void => {
      // 网络错误
      const requestError = getWrappedError(
        {},
        {
          contentText: '网络错误：无法发送Ajax请求',
          config
        }
      )
      reject(requestError)
    }
    xhr.ontimeout = (): void => {
      // 网络请求超时异常
      const timeoutError = getWrappedError(
        {},
        {
          contentText: `网络超时，限定最长请求时间${timeout || 10000}毫秒`,
          config
        }
      )
      reject(timeoutError)
    }
  })
}
