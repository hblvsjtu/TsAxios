/**
 * @file 请求头处理方法
 * @author lvhongbin(lvhongbin@baidu.com)
 */

import {isPlainObject, isFormData} from './typeof';
import {CONTENT_TYPE} from './constant';

const CONTENT_TYPE_HEADED = 'Content-Type';

function normoalizeHeaderName(headers: RandomStringObject, normoalizeName: string): void {
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

export function processHeaders(
    headers: RandomStringObject = {},
    data?: object
): RandomStringObject {
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

export function parseHeaders(headers: string): RandomStringObject {
    return headers
        .split('\r\n')
        .reduce((res: RandomStringObject, pair: string): RandomStringObject => {
            const [key, value] = pair.split(': ');
            if (key) {
                res[key] = value;
            }
            return res;
        }, {});
}
