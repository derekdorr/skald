## Functions

<dl>
<dt><a href="#add
Add two numbers">add
Add two numbers(a, b)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#and
Determine if all arguments are truthy or if array is truthy">and
Determine if all arguments are truthy or if array is truthy(...a)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#callback
Take two arguments and if second argument is truthy, return first.">callback
Take two arguments and if second argument is truthy, return first.(callback, predicate)</a> ⇒ <code>*</code></dt>
<dd></dd>
<dt><a href="#check
Safely traverse object nested properties">check
Safely traverse object nested properties(obj, path)</a> ⇒ <code>*</code></dt>
<dd></dd>
<dt><a href="#compose
Compose functions from right to left">compose
Compose functions from right to left()</a> ⇒ <code>function</code></dt>
<dd></dd>
<dt><a href="#curry
Curry arguments to function and return new function">curry
Curry arguments to function and return new function(fn)</a> ⇒ <code>function</code> | <code>*</code></dt>
<dd></dd>
<dt><a href="#define
Take a function with a known signature and allow arguments to be
passed until it executes">define
Take a function with a known signature and allow arguments to be
passed until it executes(fn)</a> ⇒ <code>function</code> | <code>*</code></dt>
<dd></dd>
<dt><a href="#divide
Divide two numbers">divide
Divide two numbers(a, b)</a> ⇒ <code>number</code> | <code>function</code></dt>
<dd></dd>
<dt><a href="#equals
Determine if two values are equal">equals
Determine if two values are equal(a, b)</a> ⇒ <code>boolean</code> | <code>function</code></dt>
<dd></dd>
<dt><a href="#gt
Determine if first value is greater than">gt
Determine if first value is greater than(a, b)</a> ⇒ <code>function</code> | <code>boolean</code></dt>
<dd></dd>
<dt><a href="#gte
Determine if value is greater than or equal to other value">gte
Determine if value is greater than or equal to other value(a, b)</a> ⇒ <code>function</code> | <code>boolean</code></dt>
<dd></dd>
<dt><a href="#isArray
Determine if value is array">isArray
Determine if value is array()</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#isBoolean
Determine if value is boolean;">isBoolean
Determine if value is boolean;()</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#isFunction
Determine if value is function">isFunction
Determine if value is function()</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#isNaN
Determine if value is NaN">isNaN
Determine if value is NaN()</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#isNull
Determine if value is null">isNull
Determine if value is null()</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#isNumber
Determine if value is function">isNumber
Determine if value is function()</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#isObject
Detemine if value is object">isObject
Detemine if value is object()</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#isString
Determine if value is string">isString
Determine if value is string()</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#isUndefined
Determine if value is undefined">isUndefined
Determine if value is undefined()</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#lt
Determine if value is less than other value">lt
Determine if value is less than other value(a, b)</a> ⇒ <code>function</code> | <code>boolean</code></dt>
<dd></dd>
<dt><a href="#lte
Determine if value is less than or equal to other value">lte
Determine if value is less than or equal to other value(a, b)</a> ⇒ <code>function</code> | <code>boolean</code></dt>
<dd></dd>
<dt><a href="#multiply
Multiply two numbers together">multiply
Multiply two numbers together(a, b)</a> ⇒ <code>function</code> | <code>number</code></dt>
<dd></dd>
<dt><a href="#or
Determine if at least one argument or array value is truthy">or
Determine if at least one argument or array value is truthy(...args)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#subtract
Subtract one number from another">subtract
Subtract one number from another(a, b)</a> ⇒ <code>function</code> | <code>boolean</code></dt>
<dd></dd>
<dt><a href="#ternary
Return success or failure based on predicate evaluation. If success or
failure are functions, returns executed result.">ternary
Return success or failure based on predicate evaluation. If success or
failure are functions, returns executed result.(failure, success, predicate)</a> ⇒ <code>*</code></dt>
<dd></dd>
<dt><a href="#toArray
Force args to array if not arrays">toArray
Force args to array if not arrays(...args)</a> ⇒ <code>Array</code></dt>
<dd></dd>
<dt><a href="#toBoolean
Returns boolean value and converts string false to false">toBoolean
Returns boolean value and converts string false to false(value)</a> ⇒ <code>boolean</code></dt>
<dd></dd>
<dt><a href="#toFunction
Returns function which returns value if value is not a function.">toFunction
Returns function which returns value if value is not a function.(value)</a> ⇒ <code>function</code></dt>
<dd></dd>
<dt><a href="#toNumber
Parses int or float or Infinity to numeric value">toNumber
Parses int or float or Infinity to numeric value(value)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#toObject
Forces value into object. If not object, returns">toObject
Forces value into object. If not object, returns(value)</a> ⇒ <code>Object</code></dt>
<dd></dd>
<dt><a href="#toString
Converts value to string. Converts undefined to empty string.">toString
Converts value to string. Converts undefined to empty string.(value)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#typeOf
Returns typeof value">typeOf
Returns typeof value(val)</a> ⇒ <code>string</code></dt>
<dd></dd>
</dl>

<a name="add
Add two numbers"></a>

## add
Add two numbers(a, b) ⇒ <code>number</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

**Example**  
```js
add(1,2); //=> 3
    add(2)(3); //=> 5
```
<a name="and
Determine if all arguments are truthy or if array is truthy"></a>

## and
Determine if all arguments are truthy or if array is truthy(...a) ⇒ <code>boolean</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| ...a | <code>\*</code> | 

**Example**  
```js
and(true, true); //=> true
    and([true, true]); //=> true
    and(true, true, false); //=> false
```
<a name="callback
Take two arguments and if second argument is truthy, return first."></a>

## callback
Take two arguments and if second argument is truthy, return first.(callback, predicate) ⇒ <code>\*</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| callback | <code>\*</code> | 
| predicate | <code>\*</code> | 

**Example**  
```js
callback('foo', true); //=> true
    callback('foo', false); //=> null
```
<a name="check
Safely traverse object nested properties"></a>

## check
Safely traverse object nested properties(obj, path) ⇒ <code>\*</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| obj | <code>Object</code> | 
| path | <code>Array.&lt;string&gt;</code> | 

**Example**  
```js
traverse({}, ['a', 'b', 'c']); //=> undefined
    traverse({ a: 1 })(['a']); //=> 1
```
<a name="compose
Compose functions from right to left"></a>

## compose
Compose functions from right to left() ⇒ <code>function</code>
**Kind**: global function  
**Params**: <code>...function</code> args  
**Since**: 1.0.0  
**Example**  
```js
compose(val => val + 1, val => val + 2); //=> val => val + 3
```
<a name="curry
Curry arguments to function and return new function"></a>

## curry
Curry arguments to function and return new function(fn) ⇒ <code>function</code> &#124; <code>\*</code>
**Kind**: global function  
**Params**: <code>...\*</code> args  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

**Example**  
```js
const foo = (a, b, c) => a + b + c;
    curry(foo, 1, 2)(3); //=> 6
    curry(foo, 1)(3, 4); //=> 8
    curry(foo, 2)(3)(4); //=> 9
    curry(foo)(1)(1)(1); // => 3
```
<a name="define
Take a function with a known signature and allow arguments to be
passed until it executes"></a>

## define
Take a function with a known signature and allow arguments to be
passed until it executes(fn) ⇒ <code>function</code> &#124; <code>\*</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

**Example**  
```js
const foo = (a, b, c) => a + b + c;
    const bar = define(foo);
    bar(1); // (b, c) => 1 + b + c
    bar(1)(2); // c => 1 + 2 + c
    bar(1)(2)(3); // 6
```
<a name="divide
Divide two numbers"></a>

## divide
Divide two numbers(a, b) ⇒ <code>number</code> &#124; <code>function</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

**Example**  
```js
divide(9, 3); //=> 3
    divide(4)(2); //=> 2
```
<a name="equals
Determine if two values are equal"></a>

## equals
Determine if two values are equal(a, b) ⇒ <code>boolean</code> &#124; <code>function</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| a | <code>\*</code> | 
| b | <code>\*</code> | 

**Example**  
```js
equals(1, 1); //=> true
    equals(1)(2); //=> false
```
<a name="gt
Determine if first value is greater than"></a>

## gt
Determine if first value is greater than(a, b) ⇒ <code>function</code> &#124; <code>boolean</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| a | <code>number</code> &#124; <code>string</code> | 
| b | <code>number</code> &#124; <code>string</code> | 

**Example**  
```js
gt(2, 1); //=> true
    gt('b')('c'); //=> false
```
<a name="gte
Determine if value is greater than or equal to other value"></a>

## gte
Determine if value is greater than or equal to other value(a, b) ⇒ <code>function</code> &#124; <code>boolean</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| a | <code>number</code> &#124; <code>string</code> | 
| b | <code>number</code> &#124; <code>string</code> | 

**Example**  
```js
gte(1, 1); //=> true
    gte('b')('a'); //=> true
```
<a name="isArray
Determine if value is array"></a>

## isArray
Determine if value is array() ⇒ <code>boolean</code>
**Kind**: global function  
**Since**: 1.0.0  

| Type |
| --- |
| <code>\*</code> | 

**Example**  
```js
isArray([]); //=> true
    isArray(1); //=> false
```
<a name="isBoolean
Determine if value is boolean;"></a>

## isBoolean
Determine if value is boolean;() ⇒ <code>boolean</code>
**Kind**: global function  
**Since**: 1.0.0  

| Type |
| --- |
| <code>\*</code> | 

**Example**  
```js
isBoolean(1); //=> false
    isBoolean(false); //=> true
```
<a name="isFunction
Determine if value is function"></a>

## isFunction
Determine if value is function() ⇒ <code>boolean</code>
**Kind**: global function  
**Since**: 1.0.0  

| Type |
| --- |
| <code>\*</code> | 

**Example**  
```js
isFunction(1); //=> false
    isFunction(() => ({})); //=> true
```
<a name="isNaN
Determine if value is NaN"></a>

## isNaN
Determine if value is NaN() ⇒ <code>boolean</code>
**Kind**: global function  
**Since**: 1.0.0  

| Type |
| --- |
| <code>number</code> | 

**Example**  
```js
isNaN(NaN); //=> true
    isNaN(1); //=> false
```
<a name="isNull
Determine if value is null"></a>

## isNull
Determine if value is null() ⇒ <code>boolean</code>
**Kind**: global function  
**Since**: 1.0.0  

| Type |
| --- |
| <code>\*</code> | 

**Example**  
```js
isNull(null); //=> true
    isNull({}); //=> false
```
<a name="isNumber
Determine if value is function"></a>

## isNumber
Determine if value is function() ⇒ <code>boolean</code>
**Kind**: global function  
**Since**: 1.0.0  

| Type |
| --- |
| <code>\*</code> | 

**Example**  
```js
isNumber(1); //=> true
    isNumber([]); //=> false
```
<a name="isObject
Detemine if value is object"></a>

## isObject
Detemine if value is object() ⇒ <code>boolean</code>
**Kind**: global function  
**Since**: 1.0.0  

| Type |
| --- |
| <code>\*</code> | 

**Example**  
```js
isObject({}); //=> true
    isObject(1); //=> false
```
<a name="isString
Determine if value is string"></a>

## isString
Determine if value is string() ⇒ <code>boolean</code>
**Kind**: global function  
**Since**: 1.0.0  

| Type |
| --- |
| <code>\*</code> | 

**Example**  
```js
isString('foo'); //=> true;
    isString(true); //=> false;
```
<a name="isUndefined
Determine if value is undefined"></a>

## isUndefined
Determine if value is undefined() ⇒ <code>boolean</code>
**Kind**: global function  
**Since**: 1.0.0  

| Type |
| --- |
| <code>\*</code> | 

**Example**  
```js
isUndefined(undefined); //=> true
    isUndefined(true); //=> false
```
<a name="lt
Determine if value is less than other value"></a>

## lt
Determine if value is less than other value(a, b) ⇒ <code>function</code> &#124; <code>boolean</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| a | <code>number</code> &#124; <code>string</code> | 
| b | <code>number</code> &#124; <code>string</code> | 

**Example**  
```js
lt(1, 2); //=> true
    lt('a')('b'); //=> true
```
<a name="lte
Determine if value is less than or equal to other value"></a>

## lte
Determine if value is less than or equal to other value(a, b) ⇒ <code>function</code> &#124; <code>boolean</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| a | <code>number</code> &#124; <code>string</code> | 
| b | <code>number</code> &#124; <code>string</code> | 

**Example**  
```js
lte(1, 1); //=> true
    lte('a')('b'); //=> true
```
<a name="multiply
Multiply two numbers together"></a>

## multiply
Multiply two numbers together(a, b) ⇒ <code>function</code> &#124; <code>number</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

**Example**  
```js
multiply(2, 3); //=> 6
    multiply(2)(2); //=> 4
```
<a name="or
Determine if at least one argument or array value is truthy"></a>

## or
Determine if at least one argument or array value is truthy(...args) ⇒ <code>boolean</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| ...args | <code>\*</code> | 

**Example**  
```js
or(true, false, false); //=> true
    or([false, false, true]); //=> true
```
<a name="subtract
Subtract one number from another"></a>

## subtract
Subtract one number from another(a, b) ⇒ <code>function</code> &#124; <code>boolean</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| a | <code>number</code> | 
| b | <code>number</code> | 

**Example**  
```js
subtract(3, 2); //=> 1
    subtract(2)(1); //=> 1
```
<a name="ternary
Return success or failure based on predicate evaluation. If success or
failure are functions, returns executed result."></a>

## ternary
Return success or failure based on predicate evaluation. If success or
failure are functions, returns executed result.(failure, success, predicate) ⇒ <code>\*</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| failure | <code>\*</code> | 
| success | <code>\*</code> | 
| predicate | <code>\*</code> | 

**Example**  
```js
ternary(1, 2, true); //=> 2
    ternary(1, 2, false); //=> 1
```
<a name="toArray
Force args to array if not arrays"></a>

## toArray
Force args to array if not arrays(...args) ⇒ <code>Array</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| ...args | <code>\*</code> | 

**Example**  
```js
toArray([1, 2]); //=> [1, 2]
    toArray(2, 3); //=> [2, 3]
```
<a name="toBoolean
Returns boolean value and converts string false to false"></a>

## toBoolean
Returns boolean value and converts string false to false(value) ⇒ <code>boolean</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
```js
toBoolean('false'); //=> false
    toBoolean({}); //=> true
```
<a name="toFunction
Returns function which returns value if value is not a function."></a>

## toFunction
Returns function which returns value if value is not a function.(value) ⇒ <code>function</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
```js
toFunction(3); //=> () => 3
    toFunction(() => 1); //=> () => 1
```
<a name="toNumber
Parses int or float or Infinity to numeric value"></a>

## toNumber
Parses int or float or Infinity to numeric value(value) ⇒ <code>number</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
```js
toNumber('Infinity'); //=> Infinity
    toNumber('1.0'); //=> 1
    toNumber({}); //=> NaN
```
<a name="toObject
Forces value into object. If not object, returns"></a>

## toObject
Forces value into object. If not object, returns(value) ⇒ <code>Object</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
```js
toObject({ a: 1 }); //=> { a: 1 }
    toObject(null); //=> null
    toObject('foo'); //=> {}
```
<a name="toString
Converts value to string. Converts undefined to empty string."></a>

## toString
Converts value to string. Converts undefined to empty string.(value) ⇒ <code>string</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
```js
toString('foo'); //=> 'foo'
    toString(false); //=> 'false'
    toString(undefined); //=> ''
```
<a name="typeOf
Returns typeof value"></a>

## typeOf
Returns typeof value(val) ⇒ <code>string</code>
**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| val | <code>\*</code> | 

**Example**  
```js
typeOf([]); //=> 'object'
    typeOf(undefined); //=> 'undefined'
    typeOf(5); //=> 'number'
```
