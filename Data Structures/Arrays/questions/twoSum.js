// // O(n^2) Solution

// // var twoSum = function(nums, target) {
// //     for(let i=0; i<nums.length; i++){
// //         for(let j=i; j<nums.length; j++){
// //             if(nums[i] + nums[j] === target){
// //                 const indices = new Array(i,j);
// //                 console.log(indices);
// //             }
// //         }
// //     }
// // }; 

// // twoSum([2,7,11,15],9);

// // O(n)
// const twoSum = (nums , target) =>{
//   // store a fixed number
//   /*
//     nums = {
//       '2' : true,
//       '7' : true,
//     }
//   */

// }

// // using hashmap

// const twoSum = (nums,target)=>{
//   let emptyMap = {};
//   let i=0;
//   for( ;i < nums.length; i++){
//     if(!emptyMap[nums[i]]){
//       const item = nums[i];
//       emptyMap[item] = true;
//     }
//   }
//   /*
//     nums = {
//       '2' : true,
//       '7' : true,
//     }
//   */
//   // console.log(emptyMap)

//   for(let j=0; j<emptyMap.length; j++){
//     if(emptyMap[nums[i]]){
//       const indices = new Array(i , j);
//       console.log(indices);
//     }
//   }
// };
// twoSum([2,7,11,15],9);


var twoSum = function(nums, target) {
  
    for(let i=0; i<nums.length; i++){
        for(let j=1; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return (Array(i,j))
            }
        }
    }
};  
console.log(twoSum([3,2,4],6))