---
title: JavaScript
---

## 数据类型

### 基本能数据类型

1. undefined
2. null
3. string
4. number
5. boolean
6. symbol: 代表创建后独一无二且不可变的数据类型，它主要是为了可能存在的变量冲突问题。
7. bigint: 代表一种数字类型的数据，它可以是任意格式精度的整数，主要作用是安全的存储和操作大整数。

### 引用数据类型

1. Object
2. Function
3. Array
4. Date
5. RegExp
6. 其他

### 两种数据有什么不同

- 普通类型： 普通类型直接存储在栈中，占据空间小、大小固定。
- 引用数据：引用类型放在堆里，占据空间大，大小也不固定。因此数据会被存放在堆里，然后在栈中保存一份指向堆的指针，这个指针指向堆的起始位置。


## 数据类型的判断

在js中通常有三种方式用于变量类型的判断，它们分别是：`typeof`、`instanceof`、`Object.prototype.toString.call()`。

### typeof

`typeof`可以判断绝大部分的类型，其中需要注意的是，`数组`、`对象`、`null`无法判断，只能判断成为`object`。

> `null` 为什么会被判断成为`object`，是因为存储单元的问题。类型标签存储在每个单位的低位里面。null存储的是NULL指针，null指针的值全是0。

```js
console.log(typeof undefined);       // undefined
console.log(typeof 1);               // number
console.log(typeof true);            // boolean
console.log(typeof 'wangly19');      // string
console.log(typeof Symbol())         // symbol
console.log(typeof []);              // object    
console.log(typeof Symbol);          // function
console.log(typeof {});              // object
console.log(typeof null);            // object
```

### instanceOf

`instanceof` 只能正确判断引用数据类型，对基础类型使用时会得到错误的反馈。

> 原因是：`instanceof` 的原理是用来测试一个对象在其原型链中是否存在一个构造函数的`prototype`属性。

```js

1 instanceof Number                     // false
'wangly19' instanceof String            // false
true instanceof Boolean                 // false
null instanceof Object                  // false

Symbol instanceof Function              // true
window instanceof Object                // true
```


### prototype.toString

使用`Object.prototype.toString.call`是目前比较完善的一种了，主要是使用 `Object` 对象的原型方法 `toString` 来判断数据类型。

> `Function`、`Array`都重写了`toString()`

```js
var toType = Object.prototype.toString;
 
console.log(toType.call(1))                  // [object Number]
console.log(toType.call(true));              // [object Boolean]
console.log(toType.call('wangly19'));        // [object String]
console.log(toType.call([]));                // [object Array]
console.log(toType.call(function(){}));      // [object Function]
console.log(toType.call({}));                // [object Object]
console.log(toType.call(undefined));         // [object Undefined]
console.log(toType.call(null));              // [object Null]
...
```

## let、const、var 的区别

1. 发布时间：var是在es6之前定义变量的唯一手段，es6才新增let和const方式。
2. 块级作用域：let与const具备块级作用于，主要解决内层变量可能覆盖外层变量的问题。同时也避免一些引用计数的循环变量泄露为全局变量。
3. 变量提升：var存在变量提升，let、const只能在声明后使用，否则会抛出错误，有效的避免了变量提升的问题。
4. 暂时性死区：var不存在暂时性死区，因此可以先使用然后在定义。
5. 赋值：let、var都可以重新赋值，而const一旦声明，就不能修改其内容了(属性除外)。

## const对象的属性可以修改吗

基础类型，但是引用类型是可以修改的。`const`保证的并不是值不能改动，而是变量指向的那个内存地址不能改动，在之前我们说了引用类型保存在内存地址(栈)里面的其实是一个指向指针。因此`const`为引用类型的时候只能保证这个指针是固定不变的，但是它指向的数据堆则是可以改变的。

## 箭头函数的特性，可以使用new实例化吗？

箭头函数没有`this`、`prototype`、`arguments`等属性，所以它也不能够通过`new`来当成一个构造函数产生实例。
