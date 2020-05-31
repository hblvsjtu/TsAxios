/**
 * @file Axios类
 * @author lvhongbin(lvhongbin@baidu.com)
 */

import xhr from './xhr';
import InterceptManage from './InterceptManage';
import {cloneDeep} from '../util/common';
import {
    transformMethod,
    transformUrl,
    transformHeaders,
    transformRequest
} from './transform';
import {METHODS} from '../util/constant';

function processConfig(config) {
    if (!config.responseType) {
        config.responseType = 'text';
    }
    transformMethod(config);
    transformUrl(config);
    transformHeaders(config);
    transformRequest(config);
}

export default class Axios {
    constructor(props) {
        METHODS.forEach(method => {
            this[method.toLowerCase()] = this.getRequestWithMethed(method);
        });
        this.request = new InterceptManage();
        this.response = new InterceptManage();
    }
    execute(config) {
        const proxyConfig = cloneDeep(config);
        processConfig(proxyConfig);
        const chainPromise = [{
            resolve: xhr,
            reject: undefined
        }];
        this.request.forEach(interceptor => chainPromise.unshift(interceptor));
        this.response.forEach(interceptor => chainPromise.push(interceptor));
        // 链式调用
        let promise = Promise.resolve(proxyConfig);
        while (chainPromise.length) {
            const {resolve, reject} = chainPromise.shift();
            promise = promise.then(resolve, reject);
        }
        return promise;
    }
    getRequestWithMethed(method) {
        return (url, config) => this.execute(Object.assign(config, {method, url}));
    }
}
