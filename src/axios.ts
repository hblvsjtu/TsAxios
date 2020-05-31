/**
 * @file Axios实例
 * @author lvhongbin(lvhongbin@baidu.com)
 */

import Axios from './core/Axios'
import { AxiosInstance, AxiosRequestConfig } from './types'

function createInstance(): ((config: AxiosRequestConfig) => Promise<AxiosRequestConfig>) & Axios {
  const instance = new Axios()
  const execute = instance.execute.bind(instance)
  return Object.assign(execute, instance)
}

export default createInstance()
