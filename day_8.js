/* Find factorial of a given number 
0! = 1
1! = 1
2! = 2
3! = 6
4! = 24
5! = 120 */

let getFact = (num)=>{
    if(num < 0) throw new Error("Number should not be negative one");
    if(num == 1) return 1;
    return num* getFact(num-1);
    
}

function main(){
    try{
        let ans = getFact(5);
        console.log(ans);
    }
    catch(err){
        console.log(err.message);
    }
}
main();