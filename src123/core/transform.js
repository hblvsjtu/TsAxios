/**
 * @file config转换方法汇总
 * @author lvhongbin(lvhongbin@baidu.com)
 */

import buildUrl from '../util/url';
import {processHeaders} from '../util/header';
import processMethod from '../util/method';
import {processRequest} from '../util/data';

export function transformMethod(config) {
    config.method = processMethod(config.method);
}

export function transformUrl(config) {
    const {url, params} = config;
    config.url = buildUrl(url, params);
}

export function transformHeaders(config) {
    const {headers, data} = config;
    const processedHeaders = processHeaders(headers, data);
    if (processedHeaders) {
        config.headers = processedHeaders;
    }
}

export function transformRequest(config) {
    config.data = processRequest(config.data);
}
