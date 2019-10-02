const insertionSort = (numbers) => {
  checkLoopInvariant(nums, input, 0);
	for (let i = 1; i < numbers.length; i++) {
    let j = i - 1;
    let temporary = numbers[i];

    checkLoopInvariant(nums, input, i);
    while (j >= 0 && numbers[j] > temporary) {
      numbers[j + 1] = numbers[j];
      j--;
    }
    numbers[j + 1] = temporary;
  }
  
  checkLoopInvariant(nums, input, nums.length);
  return numbers;
};

const checkLoopInvariant = (newArr, originalArr, index) => {
  //need to slice at least 1 element out
  if (index < 1) index = 1

  newArr = newArr.slice(0,index)
  originalArr = originalArr.slice(0, index)

  for (let i=0; i < newArr.length; i++) {

    //check that the original array contains the value
    if (!originalArr.includes(newArr[i])) {
      console.error(`Failed! Original array does not include ${newArr[i]}`)
    }

    //check that the new array is in sorted order
    if (i < newArr.length - 1 && newArr[i] > newArr[i+1]) {
      console.error(`Failed! ${newArr[i]} is not less than ${newArr[i+1]}`)
    }
  }
};
