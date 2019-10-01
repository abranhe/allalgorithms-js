# Bogo Sort

In computer science, bogosort is a highly ineffective sorting function based on the generate and test paradigm. The function successively generates permutations of its input until it finds one that is sorted. It is not useful for sorting, but may be used for educational purposes, to contrast it with more efficient algorithms.

## Install

```
npm install allalgorithms
```

## Usage

```js
const allalgorithms = require('allalgorithms');

const arr = [77, 2, 10, -2, 1, 7];

console.log(allalgorithms.sorting.bogoSort(arr))
// -> [-2, 1, 2, 7, 10, 77]
```

## API

### bogoSort(array)

> Returns a sorted array

##### Params:

- `array`: Unsorted Array
