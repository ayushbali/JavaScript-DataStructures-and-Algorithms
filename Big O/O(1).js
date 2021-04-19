// O(1)

const boxes = [0,1,2,3,4];
const largeBoxArray = new Array(1000).fill(1);

function logFirstBox(arrayOfBoxes) {
    console.log(arrayOfBoxes[0]);
}

logFirstBox(boxes); // O(1) --> constant time
logFirstBox(largeBoxArray); // O(1) --> constant time

