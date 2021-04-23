// Google Question - get first recurring number from an array

// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2 --> because 2 is the first recurring number

// Given an array = [2,1,1,2,3,5,1,2,4]
// It should return 1 --> because 1 is the first recurring number

// Given an array = [2,3,4,5]
// It should return undefined --> there are all unique values and no recurring numbers


// ! O(n^2) Solution

// const getFirstRecurringChar = (inputArray) => {
//   for( let i = 0; i <inputArray.length; i++ ) {
//     // console.log(i)
//     for( let j = i - 1; j >=0; j-- ) {
//       // console.log(j)
//       if( inputArray[i] === inputArray[j] ) {
//         return inputArray[i]
//       }
//     }
//   }
// };

// * O(n) Solution

const getFirstRecurringChar = (array) => {
  // we will create an empty map
  let map = {};
  // then loop over the array
  for(let i =0; i < array.length; i++){
    // console.log(map[array[i]]);
    // check if the item is already in the map if it is then return that item
    if(map[array[i]] !== undefined){
      return array[i]; // but map[array[0]] === undefined to yeh undefined return karega
    } else {
      // if not then add the value to the map
      map[array[i]] = array[i];
      // console.log(map[ array[ i ] ])
    }
  } 
  return undefined;
};

const sol = getFirstRecurringChar([2,5,1,3]);  // 2
console.log(sol);


