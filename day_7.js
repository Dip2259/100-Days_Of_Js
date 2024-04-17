/* Write a function findMax that takes an array of numbers as input and returns the maximum number in the array

-> Input: [1,5,3,9,2] -> Output: 9
-> Input: [-10,-5,-3,-9,-2] -> Output: -2
-> Input: [5] -> Output: 5
*/

let findMax = (arr)=>{
    if(arr.length == 0) throw new Error("Array should not be empty");
    return arr.reduce((accu, current)=> (accu >= current)?accu:current);
    // return Math.max(...arr);
}

function main(){
    let arr = [1,5,3,9,2];
    try{
        let ans = findMax(arr);
        console.log(`Maximum Element in the given array is: ${ans}\n`);
    }
    catch(err){
        console.log(err.message);
    }
}
main();