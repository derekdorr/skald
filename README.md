## Functions

<dl>
<dt><a href="#add">add(a, b)</a> ⇒ <code>number</code></dt>
<dd><p>Add two numbers</p>
</dd>
<dt><a href="#and">and(...args)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if all arguments are truthy or if array is truthy</p>
</dd>
<dt><a href="#andWith">andWith(args, val)</a> ⇒ <code>boolean</code> | <code>function</code></dt>
<dd><p>Take an array of functions (or values) and determine if all results are
true given value</p>
</dd>
<dt><a href="#appendTo">appendTo(str, append)</a> ⇒ <code>function</code> | <code>string</code></dt>
<dd><p>Append string to the end of another string</p>
</dd>
<dt><a href="#apply">apply(fns, vals)</a> ⇒ <code>function</code> | <code>array</code></dt>
<dd><p>Apply functions from an array to corresponding index in other array</p>
</dd>
<dt><a href="#at">at(index, val)</a> ⇒ <code>*</code></dt>
<dd><p>Returns copy of entry or character at given index in string or array</p>
</dd>
<dt><a href="#attempt">attempt(toTry, onError)</a> ⇒ <code>*</code></dt>
<dd><p>Attempt something. If an error is thrown, return something else.
(Wrapper for try / catch)</p>
</dd>
<dt><a href="#bindTo">bindTo(fn, ...args)</a> ⇒ <code>function</code></dt>
<dd><p>Takes a function and arguments. Leaves undefined arguments unbound and
binds defined arguments to their position in arguments list.</p>
</dd>
<dt><a href="#callback">callback(cb, predicate)</a> ⇒ <code>*</code></dt>
<dd><p>Take two arguments and if second argument is truthy, return first.</p>
</dd>
<dt><a href="#callbackWith">callbackWith(cb, predicate, val)</a> ⇒ <code>*</code></dt>
<dd><p>Take two arguments and if second argument is truthy, return first
based on val</p>
</dd>
<dt><a href="#compose">compose(...args)</a> ⇒ <code>function</code></dt>
<dd><p>Compose functions from right to left</p>
</dd>
<dt><a href="#composeL">composeL(...args)</a> ⇒ <code>function</code></dt>
<dd><p>Compose functions from right to left</p>
</dd>
<dt><a href="#curry">curry(fn, ...args)</a> ⇒ <code>function</code> | <code>*</code></dt>
<dd><p>Curry arguments to function and return new function</p>
</dd>
<dt><a href="#deepEquals">deepEquals(a, b)</a> ⇒ <code>boolean</code> | <code>function</code></dt>
<dd><p>Allow comparison of two objects or arrays</p>
</dd>
<dt><a href="#defaultTo">defaultTo(def, val)</a> ⇒ <code>*</code></dt>
<dd><p>Sets default value if passed value is falsy</p>
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
<dt><a href="#excludes">excludes(search, val)</a> ⇒ <code>boolean</code> | <code>function</code></dt>
<dd><p>Returns true if string is not in string or array</p>
</dd>
<dt><a href="#executeWith">executeWith(fn, ...args)</a> ⇒ <code>function</code></dt>
<dd><p>Create a function which executes a function with each arg being transformed
by a function</p>
</dd>
<dt><a href="#filterBy">filterBy(fn, arr)</a> ⇒ <code>function</code> | <code>Array</code></dt>
<dd><p>Filter elements in an array by function</p>
</dd>
<dt><a href="#gt">gt(a, b)</a> ⇒ <code>function</code> | <code>boolean</code></dt>
<dd><p>Determine if first value is greater than</p>
</dd>
<dt><a href="#gte">gte(a, b)</a> ⇒ <code>function</code> | <code>boolean</code></dt>
<dd><p>Determine if value is greater than or equal to other value</p>
</dd>
<dt><a href="#has">has(obj, key)</a> ⇒ <code>function</code> | <code>boolean</code></dt>
<dd><p>Return true if object has key</p>
</dd>
<dt><a href="#identity">identity()</a> ⇒ <code>*</code></dt>
<dd><p>A function which returns whatever is passed into it</p>
</dd>
<dt><a href="#includes">includes(search, val)</a> ⇒ <code>boolean</code> | <code>function</code></dt>
<dd><p>Returns true if string is in string or array</p>
</dd>
<dt><a href="#isArray">isArray(val)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if value is array</p>
</dd>
<dt><a href="#isBoolean">isBoolean(val)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if value is boolean;</p>
</dd>
<dt><a href="#isEmpty">isEmpty(val)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check whether object, array, or string is empty</p>
</dd>
<dt><a href="#isFunction">isFunction(val)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if value is function</p>
</dd>
<dt><a href="#isNaN">isNaN(val)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if value is NaN</p>
</dd>
<dt><a href="#isNull">isNull(val)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if value is null</p>
</dd>
<dt><a href="#isNumber">isNumber(val)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if value is function</p>
</dd>
<dt><a href="#isObject">isObject(val)</a> ⇒ <code>boolean</code></dt>
<dd><p>Detemine if value is object</p>
</dd>
<dt><a href="#isPromise">isPromise(val)</a> ⇒ <code>boolean</code></dt>
<dd><p>Take a value and determine if it is a promise</p>
</dd>
<dt><a href="#isPropertyOf">isPropertyOf(key, obj)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if string is property of object</p>
</dd>
<dt><a href="#isString">isString(val)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if value is string</p>
</dd>
<dt><a href="#isUndefined">isUndefined(val)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if value is undefined</p>
</dd>
<dt><a href="#iterate">iterate(fn, len)</a> ⇒ <code>Array</code></dt>
<dd><p>Return array of function iterations of specified length generated from 0-based index</p>
</dd>
<dt><a href="#joinBy">joinBy(delimiter, arr)</a> ⇒ <code>function</code> | <code>string</code></dt>
<dd><p>Join array to string, delimited by other string</p>
</dd>
<dt><a href="#lt">lt(a, b)</a> ⇒ <code>function</code> | <code>boolean</code></dt>
<dd><p>Determine if value is less than other value</p>
</dd>
<dt><a href="#lte">lte(a, b)</a> ⇒ <code>function</code> | <code>boolean</code></dt>
<dd><p>Determine if value is less than or equal to other value</p>
</dd>
<dt><a href="#mapBy">mapBy(fn, arr)</a> ⇒ <code>function</code> | <code>Array</code></dt>
<dd><p>Map elements in an array by function</p>
</dd>
<dt><a href="#memoize">memoize(fn, [function])</a> ⇒ <code>function</code></dt>
<dd><p>Cache return contents of functions</p>
</dd>
<dt><a href="#multiply">multiply(a, b)</a> ⇒ <code>function</code> | <code>number</code></dt>
<dd><p>Multiply two numbers together</p>
</dd>
<dt><a href="#none">none(...args)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true if no argument or array value is true</p>
</dd>
<dt><a href="#noop">noop()</a> ⇒ <code>undefined</code></dt>
<dd><p>Executes a noop</p>
</dd>
<dt><a href="#not">not(val)</a> ⇒ <code>boolean</code> | <code>function</code></dt>
<dd><p>Returns false if truthy, true if falsy, negation if function</p>
</dd>
<dt><a href="#notEquals">notEquals(a, b)</a> ⇒ <code>function</code> | <code>boolean</code></dt>
<dd><p>Return true if two values are not equal</p>
</dd>
<dt><a href="#or">or(...args)</a> ⇒ <code>boolean</code></dt>
<dd><p>Determine if at least one argument or array value is truthy</p>
</dd>
<dt><a href="#orWith">orWith(args, val)</a> ⇒ <code>boolean</code> | <code>function</code></dt>
<dd><p>Take an array of functions (or values) and determine if one result is
true given value</p>
</dd>
<dt><a href="#prependTo">prependTo(str, append)</a> ⇒ <code>function</code> | <code>string</code></dt>
<dd><p>Prepend string to the beginning of another string</p>
</dd>
<dt><a href="#reduceBy">reduceBy(fn, accumulator, arr)</a> ⇒ <code>function</code> | <code>*</code></dt>
<dd><p>Reduce array to new value by function</p>
</dd>
<dt><a href="#reverse">reverse(fn)</a> ⇒ <code>function</code></dt>
<dd><p>Take a function and return a function which accepts args in reverse order</p>
</dd>
<dt><a href="#splitBy">splitBy(search, str)</a> ⇒ <code>function</code> | <code>Array</code></dt>
<dd><p>Split string to array by another string</p>
</dd>
<dt><a href="#subtract">subtract(a, b)</a> ⇒ <code>function</code> | <code>boolean</code></dt>
<dd><p>Subtract one number from another</p>
</dd>
<dt><a href="#ternary">ternary(failure, success, predicate)</a> ⇒ <code>*</code></dt>
<dd><p>Return success or failure based on predicate evaluation. If success or
failure are functions, returns executed result.</p>
</dd>
<dt><a href="#ternaryL">ternaryL(predicate, success, failure)</a> ⇒ <code>*</code></dt>
<dd><p>Return success or failure based on predicate evaluation. If success or
failure are functions, returns executed result.</p>
</dd>
<dt><a href="#ternaryWith">ternaryWith(failure, success, predicate, val)</a> ⇒ <code>*</code></dt>
<dd><p>Return success or failure based on predicate evaluation. If success or
failure are functions, returns executed result with passed in parameter;</p>
</dd>
<dt><a href="#toArray">toArray(...args)</a> ⇒ <code>Array</code></dt>
<dd><p>Force args to array if not arrays</p>
</dd>
<dt><a href="#toBoolean">toBoolean(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns boolean value and converts string &#39;false&#39; to false</p>
</dd>
<dt><a href="#toFunction">toFunction(value)</a> ⇒ <code>function</code></dt>
<dd><p>Returns function which returns value if value is not a function.</p>
</dd>
<dt><a href="#toNumber">toNumber(value)</a> ⇒ <code>number</code></dt>
<dd><p>Parses int or float or Infinity to numeric value</p>
</dd>
<dt><a href="#toObject">toObject(value)</a> ⇒ <code>Object</code></dt>
<dd><p>Forces value into object. If not object, returns {}</p>
</dd>
<dt><a href="#toPromise">toPromise(val)</a> ⇒ <code>Promise</code></dt>
<dd><p>Take a value and if not a promise, make it a promise</p>
</dd>
<dt><a href="#toString">toString(value)</a> ⇒ <code>string</code></dt>
<dd><p>Converts value to string. Converts undefined to empty string.</p>
</dd>
<dt><a href="#traverse">traverse(obj, path)</a> ⇒ <code>*</code></dt>
<dd><p>Safely traverse object nested properties</p>
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
<a name="and"></a>

## and(...args) ⇒ <code>boolean</code>
Determine if all arguments are truthy or if array is truthy

**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| ...args | <code>\*</code> | 

**Example**  
```js
and(true, true); //=> true
    and([true, true]); //=> true
    and(true, true, false); //=> false
```
<a name="andWith"></a>

## andWith(args, val) ⇒ <code>boolean</code> &#124; <code>function</code>
Take an array of functions (or values) and determine if all results are
true given value

**Kind**: global function  
**Since**: 1.10.0  

| Param | Type |
| --- | --- |
| args | <code>Array</code> | 
| val | <code>\*</code> | 

**Example**  
```js
const foo = val => val < 10;
    const bar = val => val > 5;
    andWith([foo, bar], 6); //=> true
    andWith([foo, bar])(1); //=> false
```
<a name="appendTo"></a>

## appendTo(str, append) ⇒ <code>function</code> &#124; <code>string</code>
Append string to the end of another string

**Kind**: global function  
**Since**: 1.13.0  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 
| append | <code>string</code> | 

**Example**  
```js
appendTo('foo', 'bar'); //=> 'foobar'
    appendTo('bar')('baz'); //=> 'barbaz'
```
<a name="apply"></a>

## apply(fns, vals) ⇒ <code>function</code> &#124; <code>array</code>
Apply functions from an array to corresponding index in other array

**Kind**: global function  
**Since**: 1.11.0  

| Param | Type |
| --- | --- |
| fns | <code>Array</code> | 
| vals | <code>Array</code> | 

**Example**  
```js
const add1 = a => a + 1;
    const add2 = a => a + 2;
    apply([add1, add2], [0, 0]); //=> [1, 2];
    apply([add1])([1, 2, 3]); //=> [2, 2, 3];
```
<a name="at"></a>

## at(index, val) ⇒ <code>\*</code>
Returns copy of entry or character at given index in string or array

**Kind**: global function  
**Since**: 1.5.0  

| Param | Type |
| --- | --- |
| index | <code>number</code> | 
| val | <code>Array</code> &#124; <code>string</code> | 

**Example**  
```js
at(2, 'foo'); //=> 'o'
    at(1)([0, 1, 2]); //=> 1
```
<a name="attempt"></a>

## attempt(toTry, onError) ⇒ <code>\*</code>
Attempt something. If an error is thrown, return something else.
(Wrapper for try / catch)

**Kind**: global function  
**Since**: 1.7.0  

| Param | Type |
| --- | --- |
| toTry | <code>\*</code> | 
| onError | <code>\*</code> | 

**Example**  
```js
attempt(() => JSON.parse('<>'), false); //=> false
    attempt(5, () => ({})); //=> 5
```
<a name="bindTo"></a>

## bindTo(fn, ...args) ⇒ <code>function</code>
Takes a function and arguments. Leaves undefined arguments unbound and
binds defined arguments to their position in arguments list.

**Kind**: global function  
**Since**: 1.8.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| ...args | <code>\*</code> | 

**Example**  
```js
const foo = (a, b, c) = a + b + c;
    bindTo(foo, 1, 2)(3); //=> 6
    bindTo(foo, undefined, 1, 2)(1); //=> 4
    bindTo(foo, undefined, undefined, 3)(1, 2); //=> 6
    bindTo(foo, undefined, 1)(1)(1); //=> 3
```
<a name="callback"></a>

## callback(cb, predicate) ⇒ <code>\*</code>
Take two arguments and if second argument is truthy, return first.

**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| cb | <code>\*</code> | 
| predicate | <code>\*</code> | 

**Example**  
```js
callback('foo', true); //=> 'foo'
    callback('foo', false); //=> null
```
<a name="callbackWith"></a>

## callbackWith(cb, predicate, val) ⇒ <code>\*</code>
Take two arguments and if second argument is truthy, return first
based on val

**Kind**: global function  
**Since**: 1.9.0  

| Param | Type |
| --- | --- |
| cb | <code>\*</code> | 
| predicate | <code>\*</code> | 
| val | <code>\*</code> | 

**Example**  
```js
callbackWith(a => a, true, 3); //=> 3
    callbackWith(a => a, false, 3); //=> null
```
<a name="compose"></a>

## compose(...args) ⇒ <code>function</code>
Compose functions from right to left

**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| ...args | <code>function</code> | 

**Example**  
```js
compose(val => val + 1, val => val + 2); //=> val => val + 3
```
<a name="composeL"></a>

## composeL(...args) ⇒ <code>function</code>
Compose functions from right to left

**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| ...args | <code>function</code> | 

**Example**  
```js
compose(val => val + 1, val => val + 2); //=> val => val + 3
```
<a name="curry"></a>

## curry(fn, ...args) ⇒ <code>function</code> &#124; <code>\*</code>
Curry arguments to function and return new function

**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| ...args | <code>\*</code> | 

**Example**  
```js
const foo = (a, b, c) => a + b + c;
    curry(foo, 1, 2)(3); //=> 6
    curry(foo, 1)(3, 4); //=> 8
    curry(foo, 2)(3)(4); //=> 9
    curry(foo)(1)(1)(1); // => 3
```
<a name="deepEquals"></a>

## deepEquals(a, b) ⇒ <code>boolean</code> &#124; <code>function</code>
Allow comparison of two objects or arrays

**Kind**: global function  
**Since**: 1.4.0  

| Param | Type |
| --- | --- |
| a | <code>\*</code> | 
| b | <code>\*</code> | 

**Example**  
```js
deepEquals({}, {}); //=> true
    deepEquals([])([]); //=> true
```
<a name="defaultTo"></a>

## defaultTo(def, val) ⇒ <code>\*</code>
Sets default value if passed value is falsy

**Kind**: global function  
**Since**: 1.2.0  

| Param | Type |
| --- | --- |
| def | <code>\*</code> | 
| val | <code>\*</code> | 

**Example**  
```js
defaultTo(5, undefined); //=> 5
    defaultTo(3)(4); //=> 4
```
<a name="define"></a>

## define(fn) ⇒ <code>function</code> &#124; <code>\*</code>
Take a function with a known signature and allow arguments to be
passed until it executes

**Kind**: global function  
**Update**:   
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
<a name="excludes"></a>

## excludes(search, val) ⇒ <code>boolean</code> &#124; <code>function</code>
Returns true if string is not in string or array

**Kind**: global function  
**Since**: 1.4.0  

| Param | Type |
| --- | --- |
| search | <code>string</code> &#124; <code>number</code> | 
| val | <code>string</code> &#124; <code>Array</code> | 

**Example**  
```js
excludes('h', 'hello'); //=> false
    excludes('a')('apple'); //=> false
```
<a name="executeWith"></a>

## executeWith(fn, ...args) ⇒ <code>function</code>
Create a function which executes a function with each arg being transformed
by a function

**Kind**: global function  
**Since**: 1.11.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| ...args | <code>\*</code> | 

**Example**  
```js
const foo = (a, b) => a + b;
    const add1 = a => a + 1;
    const add2 = b => b + 2;
    executeWith(foo, add1, add2)(0, 0); //=> 3
    executeWith(foo, add1)(0, 0); //=> 1
```
<a name="filterBy"></a>

## filterBy(fn, arr) ⇒ <code>function</code> &#124; <code>Array</code>
Filter elements in an array by function

**Kind**: global function  
**Since**: 1.9.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| arr | <code>Array</code> | 

**Example**  
```js
const foo = val => val < 3;
    filterBy(foo, [1, 2, 4]); //=> [1, 2]
    filterBy(foo)([2,3]); //=> [2]
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
<a name="has"></a>

## has(obj, key) ⇒ <code>function</code> &#124; <code>boolean</code>
Return true if object has key

**Kind**: global function  
**Since**: 1.9.0  

| Param | Type |
| --- | --- |
| obj | <code>Object</code> | 
| key | <code>string</code> | 

**Example**  
```js
has({ a: 1 }, 'a'); //=> true
   has({ a: 1 })('a'); //=> true
   has({ a: 1 })('b'); //=> false
```
<a name="identity"></a>

## identity() ⇒ <code>\*</code>
A function which returns whatever is passed into it

**Kind**: global function  
**Params**: <code>\*</code> val  
**Since**: 1.5.0  
**Example**  
```js
identity(5); //=> 5
    identity({}); //=> {}
```
<a name="includes"></a>

## includes(search, val) ⇒ <code>boolean</code> &#124; <code>function</code>
Returns true if string is in string or array

**Kind**: global function  
**Since**: 1.4.0  

| Param | Type |
| --- | --- |
| search | <code>string</code> &#124; <code>number</code> | 
| val | <code>string</code> &#124; <code>Array</code> | 

**Example**  
```js
includes('h', 'hello'); //=> true
    includes('a')('apple'); //=> true
```
<a name="isArray"></a>

## isArray(val) ⇒ <code>boolean</code>
Determine if value is array

**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| val | <code>\*</code> | 

**Example**  
```js
isArray([]); //=> true
    isArray(1); //=> false
```
<a name="isBoolean"></a>

## isBoolean(val) ⇒ <code>boolean</code>
Determine if value is boolean;

**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| val | <code>\*</code> | 

**Example**  
```js
isBoolean(1); //=> false
    isBoolean(false); //=> true
```
<a name="isEmpty"></a>

## isEmpty(val) ⇒ <code>boolean</code>
Check whether object, array, or string is empty

**Kind**: global function  
**Since**: 1.5.0  

| Param | Type |
| --- | --- |
| val | <code>Object</code> &#124; <code>Array</code> &#124; <code>string</code> | 

**Example**  
```js
isEmpty([]); //=> true
    isEmpty({}); //=> true
    isEmpty(''); //=> true
```
<a name="isFunction"></a>

## isFunction(val) ⇒ <code>boolean</code>
Determine if value is function

**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| val | <code>\*</code> | 

**Example**  
```js
isFunction(1); //=> false
    isFunction(() => ({})); //=> true
```
<a name="isNaN"></a>

## isNaN(val) ⇒ <code>boolean</code>
Determine if value is NaN

**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| val | <code>number</code> | 

**Example**  
```js
isNaN(NaN); //=> true
    isNaN(1); //=> false
```
<a name="isNull"></a>

## isNull(val) ⇒ <code>boolean</code>
Determine if value is null

**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| val | <code>\*</code> | 

**Example**  
```js
isNull(null); //=> true
    isNull({}); //=> false
```
<a name="isNumber"></a>

## isNumber(val) ⇒ <code>boolean</code>
Determine if value is function

**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| val | <code>\*</code> | 

**Example**  
```js
isNumber(1); //=> true
    isNumber([]); //=> false
```
<a name="isObject"></a>

## isObject(val) ⇒ <code>boolean</code>
Detemine if value is object

**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| val | <code>\*</code> | 

**Example**  
```js
isObject({}); //=> true
    isObject(1); //=> false
```
<a name="isPromise"></a>

## isPromise(val) ⇒ <code>boolean</code>
Take a value and determine if it is a promise

**Kind**: global function  
**Since**: 1.1.0  

| Param | Type |
| --- | --- |
| val | <code>\*</code> | 

**Example**  
```js
isPromise(Promise.resolve()); //=> true
    isPromise('foo'); //=> false
```
<a name="isPropertyOf"></a>

## isPropertyOf(key, obj) ⇒ <code>boolean</code>
Determine if string is property of object

**Kind**: global function  
**Since**: 1.13.0  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 
| obj | <code>Object</code> | 

**Example**  
```js
isPropertyOf('foo', { foo: 'a' }); //=> true
    isPropertyOf('foo')({ bar: 'b' }); //=> false
```
<a name="isString"></a>

## isString(val) ⇒ <code>boolean</code>
Determine if value is string

**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| val | <code>\*</code> | 

**Example**  
```js
isString('foo'); //=> true;
    isString(true); //=> false;
```
<a name="isUndefined"></a>

## isUndefined(val) ⇒ <code>boolean</code>
Determine if value is undefined

**Kind**: global function  
**Since**: 1.0.0  

| Param | Type |
| --- | --- |
| val | <code>\*</code> | 

**Example**  
```js
isUndefined(undefined); //=> true
    isUndefined(true); //=> false
```
<a name="iterate"></a>

## iterate(fn, len) ⇒ <code>Array</code>
Return array of function iterations of specified length generated from 0-based index

**Kind**: global function  
**Since**: 1.9.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| len | <code>number</code> | 

**Example**  
```js
const foo = index => index + 1;
    iterate(foo, 3); //=> [1, 2, 3]
    iterate(foo)(2); //=> [1, 2]
```
<a name="joinBy"></a>

## joinBy(delimiter, arr) ⇒ <code>function</code> &#124; <code>string</code>
Join array to string, delimited by other string

**Kind**: global function  
**Since**: 1.13.0  

| Param | Type |
| --- | --- |
| delimiter | <code>string</code> | 
| arr | <code>Array</code> | 

**Example**  
```js
joinBy('.', ['foo', 'bar', 'baz']); //=> 'foo.bar.baz'
    joinBy(',')([1, 2, 3]); //=> '1.2.3';
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
<a name="mapBy"></a>

## mapBy(fn, arr) ⇒ <code>function</code> &#124; <code>Array</code>
Map elements in an array by function

**Kind**: global function  
**Since**: 1.9.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| arr | <code>Array</code> | 

**Example**  
```js
const foo = val => val + 1;
    mapBy(foo, [1, 2]); //=> [2, 3]
    mapBy(foo)([4, 5]); //=> [5, 6]
```
<a name="memoize"></a>

## memoize(fn, [function]) ⇒ <code>function</code>
Cache return contents of functions

**Kind**: global function  
**Since**: 1.9.0  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> | Function to templatize |
| [function] |  | template - Function to determine cache key |

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
<a name="none"></a>

## none(...args) ⇒ <code>boolean</code>
Returns true if no argument or array value is true

**Kind**: global function  
**Since**: 1.4.0  

| Param | Type |
| --- | --- |
| ...args | <code>\*</code> | 

<a name="noop"></a>

## noop() ⇒ <code>undefined</code>
Executes a noop

**Kind**: global function  
**Since**: 1.5.0  
<a name="not"></a>

## not(val) ⇒ <code>boolean</code> &#124; <code>function</code>
Returns false if truthy, true if falsy, negation if function

**Kind**: global function  
**Since**: 1.1.0  

| Param | Type |
| --- | --- |
| val | <code>\*</code> | 

**Example**  
```js
const identity = a => a;
    not(1); //=> false
    not(false); //=> true
    not(identity)(true); //=> false
```
<a name="notEquals"></a>

## notEquals(a, b) ⇒ <code>function</code> &#124; <code>boolean</code>
Return true if two values are not equal

**Kind**: global function  
**Since**: 1.1.0  

| Param | Type |
| --- | --- |
| a | <code>\*</code> | 
| b | <code>\*</code> | 

**Example**  
```js
notEquals(1, 2); //=> true
    notEquals(3)(4); //=> true
```
<a name="or"></a>

## or(...args) ⇒ <code>boolean</code>
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
<a name="orWith"></a>

## orWith(args, val) ⇒ <code>boolean</code> &#124; <code>function</code>
Take an array of functions (or values) and determine if one result is
true given value

**Kind**: global function  
**Since**: 1.10.0  

| Param | Type |
| --- | --- |
| args | <code>Array</code> | 
| val | <code>\*</code> | 

**Example**  
```js
const foo = val => val > 10;
    const bar = val => val < 5;
    orWith([foo, bar], 6); //=> false
    orWith([foo, bar])(1); //=> true
```
<a name="prependTo"></a>

## prependTo(str, append) ⇒ <code>function</code> &#124; <code>string</code>
Prepend string to the beginning of another string

**Kind**: global function  
**Since**: 1.13.0  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 
| append | <code>string</code> | 

**Example**  
```js
prependTo('foo', 'bar'); //=> 'barfoo'
    prependTo('bar')('baz'); //=> 'bazbar'
```
<a name="reduceBy"></a>

## reduceBy(fn, accumulator, arr) ⇒ <code>function</code> &#124; <code>\*</code>
Reduce array to new value by function

**Kind**: global function  
**Since**: 1.9.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 
| accumulator | <code>\*</code> | 
| arr | <code>Array</code> | 

**Example**  
```js
const foo = (acc, val) = acc + val;
    reduceBy(foo, 1, [1, 1]); //=> 3
    reduceBy(foo, 2)([2, 2]); //=> 6
    reduceBy(foo)(3)([3, 3]); //=> 9
```
<a name="reverse"></a>

## reverse(fn) ⇒ <code>function</code>
Take a function and return a function which accepts args in reverse order

**Kind**: global function  
**Since**: 1.1.0  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

**Example**  
```js
const foo = (a, b, c) => a + b - c;
    reverse(foo); //=> (c)(b)(a) => c + b - a;
```
<a name="splitBy"></a>

## splitBy(search, str) ⇒ <code>function</code> &#124; <code>Array</code>
Split string to array by another string

**Kind**: global function  
**Since**: 1.13.0  

| Param | Type |
| --- | --- |
| search | <code>string</code> | 
| str | <code>string</code> | 

**Example**  
```js
splitBy('.', 'foo.bar.baz'); //=> ['foo', 'bar', 'baz']
    splitBy(',')('1,2,3'); //=> ['1', '2', '3'];
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
<a name="ternary"></a>

## ternary(failure, success, predicate) ⇒ <code>\*</code>
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
<a name="ternaryL"></a>

## ternaryL(predicate, success, failure) ⇒ <code>\*</code>
Return success or failure based on predicate evaluation. If success or
failure are functions, returns executed result.

**Kind**: global function  
**Since**: 1.1.0  

| Param | Type |
| --- | --- |
| predicate | <code>\*</code> | 
| success | <code>\*</code> | 
| failure | <code>\*</code> | 

**Example**  
```js
ternaryL(true, 1, 2); //=> 1
    ternaryL(false, 1, 2); //=> 2
```
<a name="ternaryWith"></a>

## ternaryWith(failure, success, predicate, val) ⇒ <code>\*</code>
Return success or failure based on predicate evaluation. If success or
failure are functions, returns executed result with passed in parameter;

**Kind**: global function  
**Since**: 1.9.0  

| Param | Type |
| --- | --- |
| failure | <code>\*</code> | 
| success | <code>\*</code> | 
| predicate | <code>\*</code> | 
| val | <code>\*</code> | 

**Example**  
```js
const foo = val => val + 1;
    const bar = val => val - 1;
    ternaryWith(bar, foo, true, 3); //=> 4
    ternaryWith(bar, foo, false, 2); //=> 1
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
<a name="toBoolean"></a>

## toBoolean(value) ⇒ <code>boolean</code>
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
<a name="toFunction"></a>

## toFunction(value) ⇒ <code>function</code>
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
<a name="toNumber"></a>

## toNumber(value) ⇒ <code>number</code>
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
<a name="toObject"></a>

## toObject(value) ⇒ <code>Object</code>
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
<a name="toPromise"></a>

## toPromise(val) ⇒ <code>Promise</code>
Take a value and if not a promise, make it a promise

**Kind**: global function  
**Since**: 1.1.0  

| Param | Type |
| --- | --- |
| val | <code>\*</code> | 

**Example**  
```js
const foo = toPromise(5);
    foo.then(console.log); //=> 5;
```
<a name="toString"></a>

## toString(value) ⇒ <code>string</code>
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
<a name="traverse"></a>

## traverse(obj, path) ⇒ <code>\*</code>
Safely traverse object nested properties

**Kind**: global function  
**Since**: 1.6.0  

| Param | Type |
| --- | --- |
| obj | <code>Object</code> | 
| path | <code>Array.&lt;string&gt;</code> | 

**Example**  
```js
traverse({}, ['a', 'b', 'c']); //=> undefined
    traverse({ a: 1 })(['a']); //=> 1
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
