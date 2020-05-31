/**
 * @file 请求头处理方法
 * @author lvhongbin(lvhongbin@baidu.com)
 */

import {isPlainObject, isFormData} from './typeof';
import {CONTENT_TYPE} from './constant';

const CONTENT_TYPE_HEADED = 'Content-Type';

function normoalizeHeaderName(headers, normoalizeName) {
    if (!isPlainObject(headers)) {
        return;
    }
    Object.keys(headers).forEach(headerName => {
        if (headerName.toUpperCase() === normoalizeName.toUpperCase()) {
            headers[normoalizeName] = headers[headerName];
            delete headers[headerName];
        }
    });
}

export function processHeaders(headers = {}, data) {
    normoalizeHeaderName(headers, CONTENT_TYPE_HEADED);
    if (isPlainObject(data)) {
        if (!headers[CONTENT_TYPE_HEADED]) {
            headers[CONTENT_TYPE_HEADED] = CONTENT_TYPE.json;
        }
    }
    if (isFormData(data)) {
        if (!headers[CONTENT_TYPE_HEADED]) {
            headers[CONTENT_TYPE_HEADED] = CONTENT_TYPE.formData;
        }
    }
    return headers;
}

export function parseHeaders(headers) {
    return headers.split('\r\n').reduce((res, pair) => {
        const [key, value] = pair.split(': ');
        if (key) {
            res[key] = value;
        }
        return res;
    }, {});
}
