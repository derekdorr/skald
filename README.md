## Functions

<dl>
<dt><a href="#add">add(a, b)</a> ⇒ <code>number</code></dt>
<dd><p>Add two numbers</p>
</dd>
<dt><a href="#INT_ONE">INT_ONE(...a)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if all arguments are truthy or if array is truthy</p>
</dd>
<dt><a href="#default">default(callback, predicate)</a> ⇒ <code>*</code></dt>
<dd><p>Take two arguments and if second argument is truthy, return first.</p>
</dd>
<dt><a href="#traverse">traverse(obj, path)</a> ⇒ <code>*</code></dt>
<dd><p>Safely traverse object nested properties</p>
</dd>
<dt><a href="#compose">compose()</a> ⇒ <code>function</code></dt>
<dd><p>Compose functions from right to left</p>
</dd>
<dt><a href="#default">default(fn)</a> ⇒ <code>function</code> | <code>*</code></dt>
<dd><p>Curry arguments to function and return new function</p>
</dd>
<dt><a href="#define">define(fn)</a> ⇒ <code>function</code> | <code>*</code></dt>
<dd><p>Take a function with a known signature and allow arguments to be
passed until it executes</p>
</dd>
<dt><a href="#divide">divide(a, b)</a> ⇒ <code>number</code> | <code>function</code></dt>
<dd><p>Divide two numbers</p>
</dd>
<dt><a href="#equals">equals(a, b)</a> ⇒ <code>boolean</code> | <code>function</code></dt>
<dd><p>Determine if two values are equal</p>
</dd>
<dt><a href="#gt">gt(a, b)</a> ⇒ <code>function</code> | <code>boolean</code></dt>
<dd><p>Determine if first value is greater than</p>
</dd>
<dt><a href="#gte">gte(a, b)</a> ⇒ <code>function</code> | <code>boolean</code></dt>
<dd><p>Determine if value is greater than or equal to other value</p>
</dd>
<dt><a href="#isArray">isArray()</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if value is array</p>
</dd>
<dt><a href="#equalsBoolean">equalsBoolean()</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if value is boolean;</p>
</dd>
<dt><a href="#equalsFunction">equalsFunction()</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if value is function</p>
</dd>
<dt><a href="#isNaN">isNaN()</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if value is NaN</p>
</dd>
<dt><a href="#NULL">NULL()</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if value is null</p>
</dd>
<dt><a href="#equalsNumber">equalsNumber()</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if value is function</p>
</dd>
<dt><a href="#equalsObject">equalsObject()</a> ⇒ <code>boolean</code></dt>
<dd><p>Detemine if value is object</p>
</dd>
<dt><a href="#equalsString">equalsString()</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if value is string</p>
</dd>
<dt><a href="#equalsUndefined">equalsUndefined()</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if value is undefined</p>
</dd>
<dt><a href="#lt">lt(a, b)</a> ⇒ <code>function</code> | <code>boolean</code></dt>
<dd><p>Determine if value is less than other value</p>
</dd>
<dt><a href="#lte">lte(a, b)</a> ⇒ <code>function</code> | <code>boolean</code></dt>
<dd><p>Determine if value is less than or equal to other value</p>
</dd>
<dt><a href="#multiply">multiply(a, b)</a> ⇒ <code>function</code> | <code>number</code></dt>
<dd><p>Multiply two numbers together</p>
</dd>
<dt><a href="#INT_ONE">INT_ONE(...args)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if at least one argument or array value is truthy</p>
</dd>
<dt><a href="#subtract">subtract(a, b)</a> ⇒ <code>function</code> | <code>boolean</code></dt>
<dd><p>Subtract one number from another</p>
</dd>
<dt><a href="#internal">internal(failure, success, predicate)</a> ⇒ <code>*</code></dt>
<dd><p>Return success or failure based on predicate evaluation. If success or
failure are functions, returns executed result.</p>
</dd>
<dt><a href="#toArray">toArray(...args)</a> ⇒ <code>Array</code></dt>
<dd><p>Force args to array if not arrays</p>
</dd>
<dt><a href="#BOOL_FALSE">BOOL_FALSE(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns boolean value and converts string &#39;false&#39; to false</p>
</dd>
<dt><a href="#default">default(value)</a> ⇒ <code>function</code></dt>
<dd><p>Returns function which returns value if value is not a function.</p>
</dd>
<dt><a href="#NUM_INFINITY">NUM_INFINITY(value)</a> ⇒ <code>number</code></dt>
<dd><p>Parses int or float or Infinity to numeric value</p>
</dd>
<dt><a href="#INT_ONE">INT_ONE(value)</a> ⇒ <code>Object</code></dt>
<dd><p>Forces value into object. If not object, returns {}</p>
</dd>
<dt><a href="#concatToEmpty">concatToEmpty(value)</a> ⇒ <code>string</code></dt>
<dd><p>Converts value to string. Converts undefined to empty string.</p>
</dd>
<dt><a href="#typeOf">typeOf(val)</a> ⇒ <code>string</code></dt>
<dd><p>Returns typeof value</p>
</dd>
</dl>

<a name="add"></a>

## add(a, b) ⇒ <code>number</code>
Add two numbers

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
<a name="INT_ONE"></a>

## INT_ONE(...a) ⇒ <code>boolean</code>
Determine if all arguments are truthy or if array is truthy

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
<a name="default"></a>

## default(callback, predicate) ⇒ <code>\*</code>
Take two arguments and if second argument is truthy, return first.

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
<a name="traverse"></a>

## traverse(obj, path) ⇒ <code>\*</code>
Safely traverse object nested properties

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
<a name="compose"></a>

## compose() ⇒ <code>function</code>
Compose functions from right to left

**Kind**: global function  
**Params**: <code>...function</code> args  
**Since**: 1.0.0  
**Example**  
```js
compose(val => val + 1, val => val + 2); //=> val => val + 3
```
<a name="default"></a>

## default(fn) ⇒ <code>function</code> &#124; <code>\*</code>
Curry arguments to function and return new function

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
<a name="define"></a>

## define(fn) ⇒ <code>function</code> &#124; <code>\*</code>
Take a function with a known signature and allow arguments to be
passed until it executes

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
<a name="divide"></a>

## divide(a, b) ⇒ <code>number</code> &#124; <code>function</code>
Divide two numbers

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
<a name="equals"></a>

## equals(a, b) ⇒ <code>boolean</code> &#124; <code>function</code>
Determine if two values are equal

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
<a name="gt"></a>

## gt(a, b) ⇒ <code>function</code> &#124; <code>boolean</code>
Determine if first value is greater than

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
<a name="gte"></a>

## gte(a, b) ⇒ <code>function</code> &#124; <code>boolean</code>
Determine if value is greater than or equal to other value

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
<a name="isArray"></a>

## isArray() ⇒ <code>boolean</code>
Determine if value is array

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
<a name="equalsBoolean"></a>

## equalsBoolean() ⇒ <code>boolean</code>
Determine if value is boolean;

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
<a name="equalsFunction"></a>

## equalsFunction() ⇒ <code>boolean</code>
Determine if value is function

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
<a name="isNaN"></a>

## isNaN() ⇒ <code>boolean</code>
Determine if value is NaN

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
<a name="NULL"></a>

## NULL() ⇒ <code>boolean</code>
Determine if value is null

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
<a name="equalsNumber"></a>

## equalsNumber() ⇒ <code>boolean</code>
Determine if value is function

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
<a name="equalsObject"></a>

## equalsObject() ⇒ <code>boolean</code>
Detemine if value is object

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
<a name="equalsString"></a>

## equalsString() ⇒ <code>boolean</code>
Determine if value is string

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
<a name="equalsUndefined"></a>

## equalsUndefined() ⇒ <code>boolean</code>
Determine if value is undefined

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
<a name="lt"></a>

## lt(a, b) ⇒ <code>function</code> &#124; <code>boolean</code>
Determine if value is less than other value

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
<a name="lte"></a>

## lte(a, b) ⇒ <code>function</code> &#124; <code>boolean</code>
Determine if value is less than or equal to other value

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
<a name="multiply"></a>

## multiply(a, b) ⇒ <code>function</code> &#124; <code>number</code>
Multiply two numbers together

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
<a name="INT_ONE"></a>

## INT_ONE(...args) ⇒ <code>boolean</code>
Determine if at least one argument or array value is truthy

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
<a name="subtract"></a>

## subtract(a, b) ⇒ <code>function</code> &#124; <code>boolean</code>
Subtract one number from another

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
<a name="internal"></a>

## internal(failure, success, predicate) ⇒ <code>\*</code>
Return success or failure based on predicate evaluation. If success or
failure are functions, returns executed result.

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
<a name="toArray"></a>

## toArray(...args) ⇒ <code>Array</code>
Force args to array if not arrays

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
<a name="BOOL_FALSE"></a>

## BOOL_FALSE(value) ⇒ <code>boolean</code>
Returns boolean value and converts string 'false' to false

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
<a name="default"></a>

## default(value) ⇒ <code>function</code>
Returns function which returns value if value is not a function.

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
<a name="NUM_INFINITY"></a>

## NUM_INFINITY(value) ⇒ <code>number</code>
Parses int or float or Infinity to numeric value

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
<a name="INT_ONE"></a>

## INT_ONE(value) ⇒ <code>Object</code>
Forces value into object. If not object, returns {}

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
<a name="concatToEmpty"></a>

## concatToEmpty(value) ⇒ <code>string</code>
Converts value to string. Converts undefined to empty string.

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
<a name="typeOf"></a>

## typeOf(val) ⇒ <code>string</code>
Returns typeof value

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
