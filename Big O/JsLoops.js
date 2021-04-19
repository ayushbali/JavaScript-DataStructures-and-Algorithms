// Optional: JS Loops

// for
const large = new Array(1000).fill('nemo');

const shinobi = [ 'ayush', 'naruto', 'kakashi' , 'sasuke' , 'madara' ];
function findSasuke(arrayOfShinobi) {
  for( let i = 0; i < array.length; i++ ) { // O(n)
    if(array[i] === 'sasuke'){
      console.log('Found Sasuke');
    }
  }
}

// forEach
const findSasukeAgain = arrayOfShinobi =>{
  arrayOfShinobi.forEach(shinobi => {
    if(shinobi === 'sasuke'){
      console.log('Found Sasuke again');
    }
  });
};

findSasukeAgain(shinobi);

// for of 
const findSasukeAgainHeRanAgain = arrayOfShinobi =>{
  for ( let Shinobi of arrayOfShinobi) {
    if(Shinobi === 'sasuke'){
      console.log('Found Sasuke again');
    }
  }
};
