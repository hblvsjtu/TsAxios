/**
 * @file config转换方法汇总
 * @author lvhongbin(lvhongbin@baidu.com)
 */

import buildUrl from '../helpers/url'
import { processHeaders } from '../helpers/header'
import processMethod from '../helpers/method'
import { processRequest } from '../helpers/data'
import { AxiosRequestConfig } from '../types/index'

export function transformMethod(config: AxiosRequestConfig): void {
  if (config.method) {
    processMethod(config.method)
  }
}

export function transformUrl(config: AxiosRequestConfig): void {
  const { url, params } = config
  if (url) {
    config.url = buildUrl(url, params)
  }
}

export function transformHeaders(config: AxiosRequestConfig): void {
  const { headers, data } = config
  const processedHeaders = processHeaders(headers, data)
  if (processedHeaders) {
    config.headers = processedHeaders
  }
}

export function transformRequest(config: AxiosRequestConfig): void {
  config.data = processRequest(config.data)
}
