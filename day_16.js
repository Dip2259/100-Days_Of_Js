/* Write a function findMin that takes an array of numbers as input and returns the minimum number in the array

-> Input: [1,5,3,9,2] -> Output: 1
-> Input: [-10,-5,-3,-9,-2] -> Output: -10
-> Input: [5] -> Output: 5
-> Input: [5,10,2,8] -> Output: 2
-> Input: [5,-3,0,12,-7] -> Output: -7

Array Should Not Be Empty
*/

const findMin = (arr)=>{
    if(arr.length == 0) throw new Error("Array Should Not Be Empty!!...\n");
    return arr.reduce((accum, current)=> (accum <= current)?accum:current);
}

function main() {
    let arr = [5,-3,0,12,-7];
    try{
        console.log(`Minimum Element is: ${findMin(arr)}`);
    }
    catch(e){
        console.log(e.message);
    }
}
main()