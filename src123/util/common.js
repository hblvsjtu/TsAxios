/**
 * @file 常用工具库
 * @author lvhongbin(lvhongbin@baidu.com)
 */

import {
    isObject,
    isDate,
    isNil
} from './typeof';

export function cloneDeep(target) {
    if (isNil(target) || !isObject(target)) {
        return target;
    }
    if (isDate(target)) {
        return new Date(target.valueOf());
    }
    let res = Array.isArray(target) ? [] : {};
    for (let key in target) {
        res[key] = cloneDeep(target[key]);
    }
    return res;
}

