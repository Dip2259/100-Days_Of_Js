/* Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.

Input: [1,2,3,2,1,4] Output: [1,2,3,4]
Input: [1,2,3,4] Output: [1,2,3,4]
Input: [] Output: []
*/

let removeDuplicate = (arr)=>{
    if(arr.length == 0) return arr;
    // arr = arr.sort((a,b)=> a-b);
    // for(let i = 1; i<arr.length; i++){
    //     if(arr[i] === arr[i-1]) arr.splice(1,1);
    // }
    arr = [...new Set(arr)];
    return arr;
}

function main(){
    let ans = removeDuplicate([1,2,3,2,1,4]);
    console.log(ans);
}
main();