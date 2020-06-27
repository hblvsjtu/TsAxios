/**
 * @file 获取强化错误类
 * @author lvhongbin(lvhongbin@baidu.com)
 */

type error =
    | Error
    | {
          message?: string;
      };

export default function getWrappedError(err: error = {}, option: WrappedErrorOption): object {
    if (!err.message) {
        err.message = option.contentText;
    }
    return Object.assign({}, err, option);
}
