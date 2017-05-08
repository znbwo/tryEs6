let _ = require("lodash");
var users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
];
console.log(_.find(undefined, {'user': 'pebbles', 'age': 1,}))

let find = _.find(users, function(o) { return o.age < 40; });
console.log(find)
// => 结果: 'barney'

// 使用了 `_.matches` 的回调结果
_.find(users, { 'age': 1, 'active': true });
// => 结果: 'pebbles'

// 使用了 `_.matchesProperty` 的回调结果
_.find(users, ['active', false]);
// => 结果: 'fred'

// 使用了 `_.property` 的回调结果
_.find(users, 'active');
// => 结果: 'barney'

var array = [
    { 'dir': 'left', 'code': 97 },
    { 'dir': 'right', 'code': 100 }
];

let keyBy = _.keyBy(array, function(o) {
    return String.fromCharCode(o.code);
});
console.log(keyBy)
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }

_.keyBy(array, 'dir');
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }

console.log(_.isMap({}))

console.log(_.isNull(undefined))