function Test() {}
// Function Object 函数对象
// 函数对象是否有__proto__？
console.log(Test.__proto__); // 存在
// 函数__proto__ 是什么？ 是Functino prototype？
console.log('Test.__proto__ === Function.prototype :>> ', Test.__proto__ === Function.prototype); // true

// Function.__proto__ 和Function.prototype什么关系? funcation.__proto__ 就指向自己的function.prototype
console.log('Function.__proto__ === Function.prototype :>> ', Function.__proto__ === Function.prototype); // true

// Object 是怎么产生的？ 也是通过funcation的方式所以
console.log('Object.__proto__ === Function.prototype :>> ', Object.__proto__ === Function.prototype); // true

// 通过上面的逻辑就可以得出
// Object.__proto__ 就等于Function.__proto__
console.log('Object.__proto__ === Function.__proto__ :>> ', Object.__proto__ === Function.__proto__); // true


/**
 * 思考：
 * 1.Function是原型最顶层
 * 2.Function.__proto__ 等于Function.prototype
 * 3.Object也是Function构造出来的所以 Object.__proto__ 等于 Function.prototype 也等于Function.__proto__
 */