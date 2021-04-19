function boo(n){
  for ( let i = 0; i < n.length; i++ ) {  // O(1) --> space complexity i.e --> let i = 0;
    console.log('booo');  // O(n)
  }
}

boo([1,2,3,4,5]);

function arrayOfHiNTimes(n) {
  let hiArray = []; 
  for ( let i = 0; i < n; i++ ) {
    hiArray[i] = 'hi';
  }
  return hiArray;
}

arrayOfHiNTimes(6); // O(n) --> space complexity

// Exercise: Twitter
// Find 1st, find Nth

const arrayOfTweets = [
    { tweet: 'hi',  date: '2010' } , 
    { tweet: 'my', date: '2012' } , 
    { tweet: 'ayush' , date: '2015' } 
    ];

arrayOfTweets[0].  // 1st  O(1)
arrayOfTweets[arrayOfTweets.length - 1] // last  O(1)

'sdadsfdsfsdfsdfafdsf'.length // O(1) in JS












