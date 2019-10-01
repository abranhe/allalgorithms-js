# Anagrams

An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.[1] For example, the word anagram can be rearranged into nag a ram, or the word binary into brainy or the word adobe into abode.

## Install

```
npm install allalgorithms
```

## Usage

```js
const allalgorithms = require('allalgorithms');

const strA = 'RAIL? SAFETY';
const strB = 'fairy tales';

console.log(allalgorithms.strings.anagrams(strA, strB));
// -> true
```

## API

### anagrams(strA, strB)

> Returns true if strings are anagrams

##### Params:

- `strA`: First string
- `strB`: Second string
