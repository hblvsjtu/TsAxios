export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  method?: string
  url: string
  headers?: RandomStringObject
  params?: object
  data?: any
  timeout?: number
  responseType?: XMLHttpRequestResponseType
}

export interface AxiosRequestConfigWithMethod {
  headers?: RandomStringObject
  params?: object
  data?: any
  timeout?: number
  responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponse<T = any> {
  headers: RandomStringObject
  status: number
  statusText: string
  responseData: any
  config: AxiosRequestConfig
}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {}

export interface ParseResponseData {
  responseText?: string
  response?: any
  responseType?: string
}

export interface WrappedErrorOption {
  contentText?: string
  config: object
  responseData?: object
  status?: number
  statusText?: string
  headers?: RandomStringObject
}

export interface RandomStringObject {
  [headerName: string]: string
}

export interface ResolvedFn<T> {
  (val: T): T | Promise<T>
}

export interface RejectedFn {
  (error: any): any
}

export interface Interceptor<T> {
  resolve: ResolvedFn<T>
  reject?: RejectedFn
}

export interface PromiseChain<T> {
  resolved: ResolvedFn<T> | ((config: AxiosRequestConfig) => AxiosPromise)
  rejected?: RejectedFn
}

export interface AxiosInterceptorManager<T> {
  use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number

  eject(id: number): void
}

export interface Axios {
  request: AxiosInterceptorManager<AxiosRequestConfig>
  response: AxiosInterceptorManager<AxiosResponse>

  execute: (config: AxiosRequestConfig) => Promise<AxiosRequestConfig>

  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  head<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  options<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>

  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise<T>
}

export interface AxiosInstance extends Axios {
  <T = any>(config: AxiosRequestConfig): AxiosPromise<T>
  <T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
}
