/* Write a function to reverse a string without using any bulit-in methods or libraries. The function should take a string as input and return the reversed string. */

const reverseString = (str)=>{
    if(str.trim().length == 0) throw new Error("String should not be empty!..\n");
    let arr = str.split("");
    arr = arr.reverse();
    return arr.join("");
}

function main(){
    try{
        console.log(reverseString("Hello"));
    }
    catch(err){
        console.log(err.message);
    }
}
main();