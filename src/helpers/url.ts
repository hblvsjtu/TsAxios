import { isDate, isObject } from './utils'

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/g, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function buildUrl(url: string, params?: any): string {
  if (!params) return url
  const parts: Array<Array<string>> = []
  for (let key in params) {
    let value = params[key]
    if (value === null || value === void 0) continue
    if (Array.isArray(value)) {
      value.forEach(item => parts.push([key + '[]', item]))
    } else {
      if (isDate(value)) value = value.toISOString()
      else if (isObject(value)) value = JSON.stringify(value)
      parts.push([key, value])
    }
  }
  const serializedParam = parts
    .map(part => part.map(item => encode(item)).join('='))
    .join('&')
    .replace(/#.+$/, '')
  return url + (url.match(/\?/) ? '&' : '?') + serializedParam
}
