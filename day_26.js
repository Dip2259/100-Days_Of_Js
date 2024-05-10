/* Write a function in javascript that returns nth fibonacci number. 
    fibonacci(0) -> 0
    fibonacci(1) -> 1
    fibonacci(2) -> 1
    fibonacci(3) -> 2
    fibonacci(4) -> 3
    fibonacci(5) -> 5
*/

const fibonacci = (num)=>{
    if(num == 0) return 0;
    if(num == 1) return 1;
    return fibonacci(num-1) + fibonacci(num-2);
}

function main(){
    console.log(fibonacci(0));
    console.log(fibonacci(1));
    console.log(fibonacci(2));
    console.log(fibonacci(3));
    console.log(fibonacci(4));
    console.log(fibonacci(5));
}
main()