/* Write a function called calculateMean that takes an array of numbers as input and returns the mean(avarage) of those numbers.

Input: [1,2,3,4,5] Output: 3
Input: [10,20,30] Output: 20
Input: [-1,0,1] Output: 0
Input: [] Output: 0
*/

const calculateMean = (arr)=>{
    if(arr.length == 0) return 0;
    return arr.reduce((accum, current)=> accum + current)/arr.length;
}

function main(){
    let arr = [1,2,8,10,7];
    console.log(calculateMean(arr));
}
main()