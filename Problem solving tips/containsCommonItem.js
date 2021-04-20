// Given 2 arrays, create a function that 
// let's user know  ( true / false ) whether 
// these two arrays conatian any common item 
// For example

// const array1 = [ 'a', 'b', 'c', 'x' ];
// const array2 = [ 'z', 'y', 'i' ];
// should return false 

// const array1 = [ 'a', 'b', 'c', 'x'];
// const array1 = [ 'z', 'y', 'x'];
// should return true

// 2 parameters
// return true or false

// const array1 = [ 'a', 'b', 'c', 'x' ];
// const array2 = [ 'z', 'y', 'x' ];

// not effcient solution

// const containsCommonItem = function( array1, array2 ) {
//   for( let i = 0; i < array1.length; ++i ) {
//     for( let j = 0; j < array2.length; ++j ) {
//       if( array1[i] === array2[j] ){
//         return true;  // O(n^2) if array size is same else O(a*b)
//       }
//     }
//   }
//   return false;
// }

// console.log(containsCommonItem(array1 , array2));

// A better solution

const array1 = [ 'a', 'b', 'c', 'x' ];
const array2 = [ 'z', 'y', 'x' ];

// const array1 = obj {
// a : true,
// b : true,
// c : true,
// x : true
// }

function containsCommonItem2 ( array1, array2 ){
  // loop through 1st array and create an object where properties === items of the array
  // O(n)
  
  let map = {};
  for( let i = 0; i < array1.length; i++ ) {
    if( !map[array1[i]] ){
      const item = array1[ i ];
      map[item] = true;
      /*
        {
          a : true
        }
      */ 
    }
  }
  console.log( map );
  // loop through 2nd array and check if array[index] === object.property
  // O(n)
  for( let i = 0; i < array2.length; i++ ){
    if(map[array2[i]]){
      return true;
    }
  }
  // O(n) + O(n) ===> O(n) better than O(a*b). 
  return false;
}

console.log(containsCommonItem2(array1, array2));