const assert = require("assert")
assert('foo' !== 'bar', 'foo is not bar');
console.log("contine run.")
assert(Array.isArray([]), 'empty arrays are arrays');


const obj1 = {
    a: {
        b: 1
    }
};
const obj2 = {
    a: {
        b: 2
    }
};
const obj3 = {
    a: {
        b: 1
    }
};
const obj4 = Object.create(obj1);

assert.deepEqual(obj1, obj1);
// 通过，对象与自身相等

// assert.deepEqual(obj1, obj2);
// 抛出 AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }
// b 的值不同

assert.deepEqual(obj1, obj3);
// 通过，两个对象相等

// assert.deepEqual(obj1, obj4);
console.log(obj4)
// 抛出 AssertionError: { a: { b: 1 } } deepEqual {}
// 原型会被忽略

assert.deepStrictEqual({a: '1'}, {a: '1'});
