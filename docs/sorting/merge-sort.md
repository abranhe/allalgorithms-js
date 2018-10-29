# Merge Sort

In computer science, merge sort is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the implementation preserves the input order of equal elements in the sorted output

## Install

```
npm install allalgorithms
```

## Usage

```js
const allalgorithms = require('allalgorithms');

arr = [77, 2, 10, -2, 1, 7]

console.log(allalgorithms.sorting.mergeSort(arr))
// -> [-2, 1, 2, 7, 10, 77]
```

## API

### mergeSort(array)

> Returns a sorted array

##### Params:

- `array`: Unsorted Array
