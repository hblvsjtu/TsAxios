/**
 * @file 常用类型判别
 * @author lvhongbin(lvhongbin@baidu.com)
 */

const myToString = Object.prototype.toString

export function isNil(target: any): target is null | undefined {
  return target === null || target === undefined
}

export function isString(str: any): str is string {
  return typeof str === 'string'
}

export function isDate(date: any): date is Date {
  return myToString.call(date).slice(8, -1) === 'Date'
}

export function isObject(obj: any): obj is object {
  return obj && typeof obj === 'object'
}

export function isPlainObject(obj: any): obj is object {
  return myToString.call(obj).slice(8, -1) === 'Object'
}

export function isFormData(target: any): target is object {
  return myToString.call(target).slice(8, -1) === 'FormData'
}
