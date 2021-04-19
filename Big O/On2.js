// O(n^2) --> Quadratic time

// log all pairs of an array

// const boxes = [1, 2, 3, 4, 5];

// function logAllPairsOfArray(array) {
//   for (let i = 0; i < boxes.length; i++) {    // O(n)
//     for (let j = 0; j < boxes.length; j++) {  // O(n)
//       console.log(boxes[i], boxes[j]);
//     }
//   }
// }

// logAllPairsOfArray(boxes);

// for nested loops O(n) * O(n) ---> O(n^2)

// Rule 4 -> Droping the non-dominant terms

function printAllNumbersThenPrintAllPairSums(numbersArray){
  console.log('here are the numbers'); // O(1)
  numbersArray.forEach(number =>{  // O(n)
    console.log(number);
  });  // O(n)

  console.log('here is the sum'); // O(1)

  numbersArray.forEach(firstNumber =>{  // O(n)
    numbersArray.forEach(secondNumber =>{   // O(n)
      console.log(firstNumber + secondNumber);
    })
  }); // O(n^2)
}
printAllNumbersThenPrintAllPairSums([1,2,3,4,5]); // O(n + n^2) --> O(n^2)

