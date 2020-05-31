/**
 * @file 常用工具库
 * @author lvhongbin(lvhongbin@baidu.com)
 */

import { isObject, isDate, isNil, isPlainObject } from './typeof'
interface Map {
  [key: string]: any
  [index: number]: any
}

// export function cloneDeep(target: any): any {
//     if (isNil(target) || !isObject(target)) {
//         return target;
//     }
//     if (isDate(target)) {
//         return new Date(target.valueOf());
//     }
//     const res: Map = Array.isArray(target) ? [] : {};
//     for (let key in (target as Map)) {
//         res[key] = cloneDeep(target[key]);
//     }
//     return res;
// }
