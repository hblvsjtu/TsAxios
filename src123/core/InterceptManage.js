/**
 * @file InterceptManage类
 * @author lvhongbin(lvhongbin@baidu.com)
 */

export default class InterceptManage {
    constructor() {
        this.interceptor = [];
    }
    use(resolve, reject) {
        this.interceptor.push({resolve, reject});
        return this.interceptor.length - 1;
    }
    eject(id) {
        if (this.interceptor[id]) {
            this.interceptor[id] = null;
        }
    }
    forEach(fn) {
        this.interceptor.forEach(item => item && fn(item));
    }
}
