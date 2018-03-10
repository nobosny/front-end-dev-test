//
// Make Unique
// Finish the rest of 'unique()' function to remove all
// duplicate entries from a given array and satisfy the test
//
// To pass the test, unique should accept an array and
// handle strings:
// ['hello', 'hello', 'world'] -> ['hello', 'world']
// handle numbers:
// [1,1,2,2,2,3,4,4,5] => [1,2,3,4,5]
// handle nested arrays:
// [[1], [1], [2]] => [[1], [2]]
// handle nested objects:
// [{foo: 'bar'}, {foo: 'bar'}] => [{foo: 'bar'}]

// Since the arrays are flat and the order matters, we can use JSON strings to compare them.
const compareArrays = (arr1, arr2) => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

// More complex object comparison and use of isEqual to check equality between values
const compareObjects = (obj1, obj2) => {
  const keysA = Object.getOwnPropertyNames(obj1);

  if (keysA.length !== Object.getOwnPropertyNames(obj2).length) {
    return false;
  }

  var equals = true;
  keysA.forEach((key) => {
    if ((typeof obj2[key] === 'undefined') || (!isEqual(obj1[key], obj2[key]))) {
      equals = false;
    }
  });

  return equals;
}

// Check for equality of two values
const isEqual = (a, b) => {
  const typeA = Object.prototype.toString.call(a);

  // Check for equal types
  if (typeA !== Object.prototype.toString.call(b)) {
    return false;
  }

  switch (typeA) {
    case '[object Array]':
        // Compare arrays
        return compareArrays(a, b);
      break;
    case '[object Object]':
        // Compare Obj.keys && Obj.values arrays
        return compareObjects(a, b);
      break;
    default:
      // Base comparison
      return a === b;
  }

  return true;
}

const findInArray = (item, arr) => {
  return arr.findIndex((e) => {
    return isEqual(e, item);
  });
}

const unique = (arr) => {
  if (arr.length === 1) {
    return arr;
  } else {
    if (findInArray(arr[0], arr.slice(1)) !== -1) {
      return unique(arr.slice(1));
    } else {
      return [arr[0]].concat(unique(arr.slice(1)));
    }
  }
}

module.exports = unique
// Note: It's not neccessary to have all code into the 'unique'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave unique as an exported
// method as you found it
