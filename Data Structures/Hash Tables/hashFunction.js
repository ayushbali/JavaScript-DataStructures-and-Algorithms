let data = new Array(50);
const hash = (key) => {
  let hash = 0;
  for (let i =0; i < key.length; i++){
    console.log(key.charCodeAt(i));
      hash = (hash + key.charCodeAt(i) * i) % data.length;
  }
  return ('-> '+ hash);
}

const myHash = hash('apples');
console.log(myHash);