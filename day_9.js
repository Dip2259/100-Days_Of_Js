/* Calculate the Avarage

Write a function called calculateAvarage that takes an array of numbers as input and returns the avarage of those numbers

Input: [5,10,2,8] Output: 6.25
*/

let calculateAvarage = (arr)=>{
    if(arr.length == 0) throw new Error("Array should not be empty");
    let s = arr.reduce((accum, current) => accum + current);
    return s/arr.length;
}

function main(){
    let arr = [5,10,2,8];
    try{
        let ans = calculateAvarage(arr);
        console.log(ans);
    }
    catch(err){
        console.log(err.message);
    }
}
main();