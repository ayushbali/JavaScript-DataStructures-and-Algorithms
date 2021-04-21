const strings = ['a' , 'b' , 'c' , 'd'];
// 4*4 = 16 bytes of storage

// access
strings[0]; // O(1)

// push - adds to the end
strings.push('e'); // O(1)

// pop - remove from the end
strings.pop(); // O(1);

// unshift - add to the beginning
strings.unshift('z'); // O(n)

// splice - add to the middle
strings.splice(2,0,'ayush'); // O(n)

console.log(strings);


const newArray = [1,2,3,4,5];
//indices         0 1 2 3 4
console.log(newArray.length);

newArray[newArray.length] = 7;
console.log(newArray);


newArray.splice(2,1,10);   // [1,2,10,4,5,7]
console.log('new Array: ', newArray);


const anotherArray = ['a' , 'b' , 'c' , 'd'];

anotherArray.splice(1,1,'hello'); // ['a', 'hello', 'c', 'd']
console.log('another array: ', anotherArray);

