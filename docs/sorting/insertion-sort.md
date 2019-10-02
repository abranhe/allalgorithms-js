# Insertion Sort

Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

## Install

```
npm install allalgorithms
```

## Usage

```js
const allalgorithms = require('allalgorithms');

const arr = [77, 2, 10, -2, 1, 7];

console.log(allalgorithms.sorting.insertionSort(arr));
// -> [-2, 1, 2, 7, 10, 77]
```

## API

### insertionSort(array)

> Returns a sorted array

##### Params:

- `array`: Unsorted Array
