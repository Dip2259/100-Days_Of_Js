/* Write a function called isPowerofTwo that takes an integer num as input and returns true if num is power of two, and false otherwise
*/

let isPowerofTwo = (num)=>{
    if(num <= 0) throw new Error("Number should be Positive");
    return (num & (num-1)) == 0;
}

function main(){
    let num = 6;
    try{
        let ans = isPowerofTwo(num);
        (ans)?console.log(`${num} is Power Of 2`):console.log(`${num} is not power of 2`);;
    }
    catch(err){
        console.log(err.message);
    }
}
main();