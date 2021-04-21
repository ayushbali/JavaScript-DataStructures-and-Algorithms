// // reference type
// let array1 = [];  // obj 1
// let array2 = array1; //  obj 1

// let array3 = []; // obj 2

// console.log( array1[1]); 
// console.log( array2[0]);

// console.log(typeof array1); 
// console.log(typeof array2); 

// console.log(array1 === array2); // true
// console.log(array1 === array3); // false

// console.log(array1[1] === array2[0]); 
// console.log([1,2] === [1,2]); 

// let obj1 = { value : 10 };  
// let obj2 = obj1; 

// console.log( obj1.value ); // 10
// console.log( obj2.value ); // 10
// console.log( obj1 === obj2 ) // true

// let obj3 = { value : 10 }; 

// console.log( obj1.value ); // 10
// console.log( obj3.value ); // 10
// console.log( obj1 === obj3 ); //


// // // Context- tells us where we are within the scope

// // // context vs scope
// function b(){
//   let a = 1;  // this will remain only in this local scope and will have no info about the global/root scope
//   return a;
// }

// console.log(this); // global object i.e window obj in the browser




// function a(){
//   console.log(this); // window
// }

// a();
// window.a();

// const obj1 = {
//   a: function a(str){  
//     console.log(str, this);
//   }
// }
// obj1.a('this is current obj')


// instantiation - when you make a copy of an object and reuse the code

class Player {
  constructor(name,type) // everytime I am making an object first thing that gets run is the constructor function and this will create prop on the player obj
  {
    // debug -------
    console.log(this);  // wizard obj
    console.log('player' , this); 
    // --------
    this.name = name;
    this.type = type;
  }
  introduce(){
    console.log(`I am ${this.name} and I am a ${this.type}`);
  }
};

class Wizard extends Player {
  constructor(name,type) {
    super(name,type);
    console.log('wizard' , this); // wizard with prop name and type 
  }
  play(){
    console.log(`WEEE, I am a ${this.type}`);
  }
};

// creating object of class Wizard

const wizard_one = new Wizard('Omen', 'Controller');
wizard_one.introduce();
wizard_one.play();



// Classical Inheritance

// var Player = function(name, type){
//   this.name = name;
//   this.type = type;
// }

// // methods of player class....
// Player.prototype.introduce = function(){
//   console.log(`Hi, i am ${this.name} and I am a ${this.type}`);
// }

// // creating an object of class

// var wizard1 = new Player('Breach' , 'Initator');

// wizard1.play = function(){
//   console.log(`I am a ${this.type}`);
// }
