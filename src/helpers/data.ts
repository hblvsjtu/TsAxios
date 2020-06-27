/**
 * @file 数据处理方法
 * @author lvhongbin(lvhongbin@baidu.com)
 */

import {isPlainObject} from './typeof';

export function processRequest(data: any, contentType?: string): any {
    if (!contentType || contentType.match(/json/)) {
        return JSON.stringify(data);
    } else if (contentType.match(/x-www-form-urlencoded/) && isPlainObject(data)) {
        return Object.entries(data)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');
    }
    return data;
}

export function parseRequest({responseText, response, responseType}: ParseResponseData): any {
    try {
        if (typeof responseText === 'string') {
            responseText = JSON.parse(responseText);
        }
    } catch (e) {
        // console.log(e);
    }
    return responseType === 'text' ? responseText : response;
}
