/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  const newArray = [];
  each(elements, element => newArray.push(cb(element)));
  return newArray;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let newCount = 0;
  return (...args) => {
    if (newCount === n) return null;
    newCount++;
    return cb(...args);
  };
};

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = {};
  return (obj) => {
    if (Object.prototype.hasOwnProperty.call(cache, obj)) return cache[obj];
    cache[obj] = cb(obj);
    return cache[obj];
  };
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = (str) => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str === '') return '';
  return reverseStr(str.substr(1)) + str[0];
};

const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  const property = [];
  function checkLeaf(object) {
    Object.keys(object).forEach((key) => {
      if (typeof object[key] === 'object') return checkLeaf(object[key]);
      property.push(object[key]);
    });
  }
  checkLeaf(obj);
  return property.every(leaf => property[0] === leaf);
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  const newArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) flatten(elements[i]).forEach(element => newArray.push(element));
    else newArray.push(elements[i]);
  }
  return newArray;
  // if (Array.isArray(elements)) return [elements];
  // const array = [];
  // for (let i = 0; i < elements.length; i++) {
  //   array = array.concat(flatteqn(elements[i]));
  // }
  // return array;
};

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
