// creating a hash table / object / hash map 
// objects in js stringifies the key within it
let user = {
  age : 20,
  name : 'Pain', 
  jutsu : true,
  quote : ()=>{
    console.log('This World Shall Know Pain! Almighty Push!');
  },
};

// accessing O(1)
console.log(user.age);
// insert O(1)
console.log(user.doujutsu = 'Rinnegan');
// delete O(1)
console.log(user)

const arr = [1,2,3];
arr.length = 0;
console.log(arr)

// map -> can store any data type as the key 
const my_map = new Map();

// set -> stores only keys;
const my_set = new Set();