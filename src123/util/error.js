/**
 * @file 获取强化错误类
 * @author lvhongbin(lvhongbin@baidu.com)
 */

export default function getWrappedError(err = {}, {
        contentText,
        config,
        responseData,
        status,
        statusText,
        headers
    }) {
    if (!err.message) {
        err.message = contentText;
    }
    return Object.assign({}, err, {
        config,
        responseData,
        status,
        statusText,
        headers
    });
}
