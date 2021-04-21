// given two sorted arrays
// can you merge two arrays that are still sorted
// EXAMPLE
// arr1 = [0,3,4,31] arr2 = [4,6,30]
// final output = [0,3,4,4,6,30,31] or ----> neglet this -----> [0,3,4,6,30,31]
// edge cases--> 
// mergedSortedArrays([0,3,4,31] , [])
// mergedSortedArrays([] , [4,6,30])

'use strict';

const mergeSortedArrays = (array1, array2) => {

  const mergedArrays = [];
  let array_one_item = array1[0]; // i=0
  let array_two_item = array2[0]; // j=0

  // checking for input validations
  if(array1.length === 0){
    return array2;
  } if (array2.length === 0){
    return array2;
  } 
  
  let [ i , j ] = [ 0 , 1 ]

  while(array_one_item || array_two_item){
    console.log(array_one_item , array_two_item)
    if(!array_two_item || array_one_item < array_two_item ) {
      mergedArrays.push(array_one_item)
      array_one_item = array1[i];
      i++;
    } else {
      mergedArrays.push(array_two_item)
      array_two_item = array2[j];
      j++;
    }
  }
  return mergedArrays;
};

console.log(mergeSortedArrays([0,3,4,31] , [4,6,30]));

// console.log(undefined < 31); 