/**
 * @file 测试入口
 * @author lvhongbin(lvhongbin@baidu.com)
 */

const assert = require('assert');
const {
    isDate,
    isObject
} = require('./util/typeof');

function testType(target, type, expected) {
    if (type === 'date') {
        assert.equal(isDate(target), expected);
    }
    else if (type === 'obj') {
        assert.equal(isObject(target), expected);
    }
}

testType(new Date(), 'date', true);
testType({}, 'obj', true);
testType([], 'obj', true);
testType('', 'obj', false);
