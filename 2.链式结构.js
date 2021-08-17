function Test() {}


const test = new Test();
test.a = 1
console.log('test.a :>> ', test.a);
Test.prototype.b = 2
console.log('test.b :>> ', test.b);
Object.prototype.c = 3
console.log('test.c :>> ', test.c);
/**
 * test : { 
 *      a: 1,
 *      __proto__ : Test.prototype = {
 *          b: 2,
 *          __proto__ : Object = {
 *              c: 3
 *          }
 *     }
 * }
 */
/**
 * 思考
 * 1. __proto__就是上一级的prototype
 * 2. 找属性本级找不到找上一级 一直找到或到Object停止
 */