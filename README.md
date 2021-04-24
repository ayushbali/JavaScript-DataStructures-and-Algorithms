# **Data Structures and Algorithms in JavaScript**

Implementing Data Structres and Algorithms in **JavaScript** ⭐

## **Table Of Contents**

* [Big O](https://github.com/ayushbali/JavaScript-DataStructures-and-Algorithms/tree/main/Big%20O)
* [Problem Solving Approach](https://github.com/ayushbali/JavaScript-DataStructures-and-Algorithms/tree/main/Problem%20solving%20tips)
* [Data Structures]()
  * [Arrays](https://github.com/ayushbali/JavaScript-DataStructures-and-Algorithms/tree/main/Data%20Structures/Arrays)
  * [Hash Tables](https://github.com/ayushbali/JavaScript-DataStructures-and-Algorithms/tree/main/Data%20Structures/Hash%20Tables)




<hr>

# **Big O**
It is a standard measure to check how efficient our code or algorithm is. In other words it is used to determine the ***efficiency*** of an algorithm, to understand Big O more clearly you must be familiar with Time Complexity

## **Time Complexity**
Time Complexity is nothing but the amount of time taken by a function/algorithm to complete it's task.

## **O(n)**
O(n), it means that as the number of inputs grow, the number of operation also increases. Hence, it is a linear process.

For example.
if we are looping over an array of say ```n``` integers
```js
let n = 5;
const inputArray = new Array(n).fill('hello');
for ( let i=0; i < inputArray.length; i++){
    console.log(inputArray[i]);
}

console.log(inputArray);
```
if ```n``` is say a very large number then it would take a lot more time. Because the number of inputs has grown. Therefore it will take O(n) time to complete those operetions depending on the value of ```n``` 

## **O(1)**
O(1) denotes that the number of operations will remain the same even if the number of inputs grows. Hence, it is constant time.

For example, we are asked to print the first value of an array of size ``n``
```js
let n;
const largeArray = new Array(n).fill(200);
console.log(largeArray[0]);
```
since we are printing the 1st value of the array it is **always doing a single operation**, regardless the size of our *input size*.
