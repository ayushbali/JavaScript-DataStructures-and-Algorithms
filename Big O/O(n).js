// O(n)

const nemo = ['nemo'];
const largeArray = new Array(1000).fill('ayush');

function findNemo(array){
    for( let i = 0; i< array.length; i++ ){
        if( array[i] === 'nemo') {
            console.log('Found Nemo');
        }        
    }
}

findNemo(nemo); // O(n) --> linear time
findNemo(largeArray) // O(n) --> linear time


