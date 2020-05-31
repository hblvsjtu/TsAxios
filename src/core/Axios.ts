/**
 * @file Axios类
 * @author lvhongbin(lvhongbin@baidu.com)
 */

import xhr from './xhr'
import InterceptManage from './InterceptManage'
import { transformMethod, transformUrl, transformHeaders, transformRequest } from './transform'
import {
  AxiosRequestConfig,
  AxiosResponse,
  Interceptor,
  AxiosRequestConfigWithMethod
} from '../types/index'

function processConfig(config: AxiosRequestConfig): void {
  if (!config.responseType) {
    config.responseType = 'text'
  }
  transformMethod(config)
  transformUrl(config)
  transformHeaders(config)
  transformRequest(config)
}

export default class Axios {
  request: InterceptManage<AxiosRequestConfig>
  response: InterceptManage<AxiosResponse<any>>
  get: (url: string, config: AxiosRequestConfigWithMethod) => Promise<AxiosRequestConfig>
  post: (url: string, config: AxiosRequestConfigWithMethod) => Promise<AxiosRequestConfig>
  put: (url: string, config: AxiosRequestConfigWithMethod) => Promise<AxiosRequestConfig>
  options: (url: string, config: AxiosRequestConfigWithMethod) => Promise<AxiosRequestConfig>
  head: (url: string, config: AxiosRequestConfigWithMethod) => Promise<AxiosRequestConfig>
  delete: (url: string, config: AxiosRequestConfigWithMethod) => Promise<AxiosRequestConfig>
  patch: (url: string, config: AxiosRequestConfigWithMethod) => Promise<AxiosRequestConfig>
  constructor() {
    this.get = this.getRequestWithMethed('get')
    this.post = this.getRequestWithMethed('post')
    this.put = this.getRequestWithMethed('put')
    this.options = this.getRequestWithMethed('options')
    this.head = this.getRequestWithMethed('head')
    this.delete = this.getRequestWithMethed('delete')
    this.patch = this.getRequestWithMethed('patch')
    this.request = new InterceptManage()
    this.response = new InterceptManage()
  }
  execute(config: AxiosRequestConfig): Promise<AxiosRequestConfig> {
    const proxyConfig = JSON.parse(JSON.stringify(config))
    processConfig(proxyConfig)
    const chainPromise: Interceptor<any>[] = [
      {
        resolve: xhr,
        reject: undefined
      }
    ]
    this.request.forEach(interceptor => chainPromise.unshift(interceptor))
    this.response.forEach(interceptor => chainPromise.push(interceptor))
    // 链式调用
    let promise = Promise.resolve(proxyConfig)
    while (chainPromise.length) {
      const shift: Interceptor<any> | undefined = chainPromise.shift()
      if (shift) {
        const { resolve, reject }: Interceptor<any> = shift
        promise = promise.then(resolve, reject)
      }
    }
    return promise
  }
  getRequestWithMethed(
    method: string
  ): (url: string, config: AxiosRequestConfigWithMethod) => Promise<AxiosRequestConfig> {
    return (url: string, config: AxiosRequestConfigWithMethod): Promise<AxiosRequestConfig> =>
      this.execute(Object.assign(config, { method, url }))
  }
}
