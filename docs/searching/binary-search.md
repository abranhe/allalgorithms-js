# Binary Search

In computer science, binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array.

## Install

```
npm install allalgorithms
```

## Usage

```js
const allalgorithms = require('allalgorithms');

const arr = [1, 3, 5, 7, 8, 9];

const x = 5;

console.log(allalgorithms.searching.binarySearch(arr, x));
// -> True]
```

## API

### binarySearch(array, number)

> Returns True or False for number to searched

##### Params:

- `array`: Sorted/Unsorted Array
- `number`: Number to be searched for
