// Create a functon that reverses a string
// Method 1
const reverseStr = (str) => {
  if(!str || str.length < 2 || typeof str !== 'string'){
    return 'please enter a string'
  }
  else {
    // convert the input string to an array
  let newStr = str.split('');
  // [a , y , u , s , h]
  // [h , s , u , y , a]
  // swapping should be down healf the length of the array
  // O(n)
  for(let i = 0; i < newStr.length/2; i++) {
    let elementToBeSwapped = newStr[i];
    newStr[i] = newStr[(newStr.length-1) - i ];
    newStr[(newStr.length-1) - i ] = elementToBeSwapped;
  }
  console.log(newStr.join(''));
  }
}
reverseStr('naruto');

// Method 2
const reverse2 = str =>{
  return str.split('').reverse().join('');
}
console.log(reverse2('hello'));

// Method 3
const reverse3 = str =>{
  return [...str].reverse().join('');
}
console.log(reverse3('hello how are you'));