/**
 * @file 数据处理方法
 * @author lvhongbin(lvhongbin@baidu.com)
 */

import {isPlainObject} from './typeof';

export function processRequest(data) {
    if (isPlainObject(data)) {
        return JSON.stringify(data);
    }
    return data;
}

export function parseRequest({responseText, response, responseType}) {
    try {
        responseText = JSON.parse(responseText);
    }
    catch (e) {
        // console.log(e);
    }
    return responseType === 'text' ? responseText : response;
}

