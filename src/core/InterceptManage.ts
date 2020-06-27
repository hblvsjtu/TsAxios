/**
 * @file InterceptManage类
 * @author lvhongbin(lvhongbin@baidu.com)
 */

export default class InterceptManage<T> {
    private interceptors: Array<Interceptor<T> | null>;
    constructor() {
        this.interceptors = [];
    }
    use(resolve: ResolvedFn<T>, reject?: RejectedFn): number {
        this.interceptors.push({resolve, reject});
        return this.interceptors.length - 1;
    }
    eject(id: number): void {
        if (this.interceptors[id]) {
            this.interceptors[id] = null;
        }
    }
    forEach(fn: (interceptor: Interceptor<T>) => void): void {
        this.interceptors.forEach(item => item && fn(item));
    }
}
