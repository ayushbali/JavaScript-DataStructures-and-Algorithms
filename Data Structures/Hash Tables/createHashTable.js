class HashTable {
  constructor(size){
    this.data = new Array(size); // []
  }

  // hash function
  // _ in front of a function in a class in JS dev env means that its private and it shouldn't be accessed
  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value){
    // create a variable ADDRESS that is going to store the information
    let address = this._hash(key);
    // if there is no data in the map, if it doesnt exist
    if(!this.data[address]){
      //we are going to create an array
      this.data[address] = [];
      // and then we will add that key and value to the array
      this.data[address].push([key,value]); // [ [ [ 'key',value ] ] ]
    } 
    // if it exists then push the value to the array
    else {
      this.data[address].push([key,value]);
    }
    // console.log('Current Array: ',this.data);
  } // O(1)

  get(key){
    // first we want to grab the address of the data that we wanna get
    let address = this._hash(key);

    // now we have stored the info [ ['grapes',10000],['apples',50] ] and it is in a bucket and we want to access that bucket
    // the bucket will be at the "address" in the array

    const currentBucket = this.data[address];
    // console.log('Current Bucket is: ', currentBucket);

    // now we have the bucket, but we have to return the value 1000, 

    // if the curretBucket has something in it
    if(currentBucket) {
      // do something
      // we can have multiple items in the currentBucket if the memory space is less
      // we have to loop over the currentBucket

      for(let i=0; i<currentBucket.length; i++){
        // [ ['grapes',1000] , [ 'apples',50 ] ]
        if(currentBucket[i][0] === key) {
          console.log(currentBucket[i][1]);
        }
      } // O(1) and O(n) if really small memory space
    } 
    // else return undefined because it has nothing inside it
    else {
      return undefined;
    }
  }

  keys(){
    // create an empty array of keys;
    const keysArray = [];

    // we want to loop over the hashtable that is our data 
    for(let i=0; i< this.data.length; i++) {
      // check if there is some data in it or not
      if(this.data[i]){
        // we want to get the keys and push it into the keysArray
        // [ [<1 empty item>], [ [ 'grapes', 10000 ], [ 'apples', 50 ] ] ]
        //          0      , 1 (0)   [1]     [1] | (1)  [0]    [1]
        // this.data[i][i][0]
        // console.log('LOG...',this.data[i][0][0])
        keysArray.push(this.data[i][0][0]);
      }
    }
    console.log(keysArray);
  }
// keys without collision
  keys_without_Collision() {
    if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
        // if it's not an empty memory cell
        if (this.data[i] && this.data[i].length) {
          // but also loop through all the potential collisions
          if (this.data.length > 1) {
            for (let j = 0; j < this.data[i].length; j++) {
              result.push(this.data[i][j][0])
            }
          } else {
            result.push(this.data[i][0])
          } 
        }
    }
    return result; 
  }

};

const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 10000);
// console.log(`at index ${myHashTable._hash('grapes')}`);
myHashTable.set('grapes', 10000);

// console.log(`at index ${myHashTable._hash('apples')}`);
myHashTable.set('apples', 50);
myHashTable.set('oranges', 20);

myHashTable.get('grapes'); // 10000
myHashTable.keys(); // grapes , apples




