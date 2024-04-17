/* Write a function that takes a number as input and returns the sum of its digits.

Input: 1234 Output: 10
Input: 4321 Output: 10
Input: 123456 Output: 21

*/

let getSum = (num)=>{
    if(num < 0) num = -1 * num;
    let ans = num.toString().split("").map((e)=> parseInt(e)).reduce((accum, current)=> accum+current, 0);
    //Another Mathod
    // let ans = 0;
    // while(num > 0){
    //     ans += num%10;
    //     num = Math.floor(num / 10);
    // }
    return ans;
}

function main(){
    let ans = getSum(123456);
    console.log(ans);
}
main();