/**
 * 对应名称
 * - prototype：原型
 * - __proto__: 原型链（连接点）
 * 
 * 从属关系
 * prototype ->函数的一个属性：对象 {}
 * __proto__ ->对象Object的一个属性：对象 {}
 * 对象的__proto__保存这该对象的构造函数的prototype
 */
// prototype ->函数的一个属性：对象 {}
function Test() {}
console.log('Test.prototype :>> ', Test.prototype);
// __proto__ ->对象Object的一个属性：对象 {}
const test = new Test()
console.log('test.__proto__ :>> ', test.__proto__);
// 对象的__proto__保存这该对象的构造函数的prototype
console.log('test.__proto__ === Test.prototype :>> ', test.__proto__ === Test.prototype);
// 最顶级Object
console.log('Test.prototype__proto__ === Object.prototype :>> ', Test.prototype.__proto__ === Object.prototype);
// Object 是否存在__proto__
console.log('Object.prototype.__proto__ :>> ', Object.prototype.__proto__);
/**
 * 思考
 * 只要是方法就有prototype原型对象
 * 只要是对象就有__proto__原型链
 * __proto__等于上级的prototype
 */