/* Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and return true if the arrays are equal (i.e. contain same elements in the same order), and false otherwise.

Input: arr1:[1,2,3], arr2:[1,2,3] Output: true
Input: arr1:[1,2,3], arr2:[1,3,2] Output: false
Input: arr1:[1,2,3], arr2:[1,2,4] Output: false
*/

let arraysAreEqual = (arr1, arr2)=>{
    if(arr1.length == 0 || arr2.length == 0) throw new Error("Neither array can't not be empty");
    if(arr1.length != arr2.length) return false;
    return arr1.every((e,i) => arr2[i]===e);
}

function main(){
    try{
        let ans = arraysAreEqual([1,2,3],[1,2,3]);
        console.log(ans);
    }
    catch(err){
        console.log(err.message);
    }
}
main();