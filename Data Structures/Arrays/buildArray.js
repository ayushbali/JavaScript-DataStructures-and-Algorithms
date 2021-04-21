// buildng an array
// approach--> object oriented

class MyArray {
  // constructor function
  constructor(){
    // initiating the length of the array to 0
    this.length = 0;
    // initializing data of the array to an empty object
    this.data = {};
  }

  // get Data 
  getData(index){
    return this.data[index];
  }
  // push item to an array
  push(item){
    // add an item to the index 0--> cuurent length of the array 
    this.data[this.length] = item;
    // then increment the lenght if we wan to add more items further
    this.length++;
    // return the current length of the array after pushing the element
    return this.length
  }
  // pop
  pop(){
    // we want to remove the last item
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }

  delete(index){
    // create a reference to this.data wich is the item we want to delete
    const item = this.data[index];
    // in an array we have to delete an item and shift the index of all items by 1
    this.shiftItems(index);
  }
  shiftItems(index){
    // we have to loop through the items 
    // [10, 20, 30, 40] delete(1) , length = 4
    // 1 ; 1 < 3; 
    // this.data[1]= this.data[1+1] // [10,30,40]
    for(let i=index; i< this.length-1; i++){
      this.data[i] = this.data[i+1];
    }
    // to remove the last remaning item
    delete this.data[this.length-1];
    // decrement the length
    this.length--;
  }
};

// object initializing
const myArray = new MyArray();

console.log(myArray); 
console.log(myArray.getData());
console.log(myArray.length);
console.log(myArray.push('Ayush'));
console.log(myArray.getData(0));
console.log(myArray.push('bali'));
// console.log(myArray); 
console.log(myArray.push(22))
console.log(myArray.pop());
console.log(myArray);