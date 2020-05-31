/**
 * @file 常用类型判别
 * @author lvhongbin(lvhongbin@baidu.com)
 */

const myToString = Object.prototype.toString;

export function isNil(target) {
    return target === null || target === undefined;
}

export function isString(str) {
    return typeof str === 'string';
}

export function isDate(date) {
    return myToString.call(date).slice(8, -1) === 'Date';
}

export function isObject(obj) {
    return obj && typeof obj === 'object';
}

export function isPlainObject(obj) {
    return myToString.call(obj).slice(8, -1) === 'Object';
}

export function isFormData(formData) {
    return myToString.call(formData).slice(8, -1) === 'FormData';
}
