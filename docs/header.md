Shakeable, tested javascript utility functions in a pure functional programming style

## What is it?

Short answer: Yet another utility library

Long answer: Skald is a utility library to aid in pure functional javascript programming. It's meant
to be shakeable, light-weight, and 100% tested.  The entire library will compile down to < 7kb before
gzipping (at present) and contains ~90 functions.

# How do you use it?

Here's an example of a block of a short ES6 module

```js
const sumPlusOne = arr => arr
    .map(val => val + 1)
    .reduce((acc, val) => acc + val, 0);

export default sumPlusOne;
```
Here's an example of how that code might be written with skald

```js
import { add, compose, mapBy, reduceBy } from 'skald';

const addOne = add(1);
const mapByAddOne = mapBy(addOne);
const reduceByAdd = reduceBy(add, 0);
const sumPlusOne = compose(reduceByAdd, mapByAddOne);

export default sumPlusOne;
```

It's a little more code in your module, but:

- We didn't need to declare any functions directly
- We were able to reuse a simple function like add
- The code is easy to understand
- It slims down nicely when run through a build minification

That's about it.
