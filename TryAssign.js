/**
 * Created by zhiningbo on 2017/4/16.
 *
 */
//The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object.
// It will return the target object.
var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.
console.log(o1===obj);  // { a: 1, b: 2, c: 3 }, target object itself is changed.