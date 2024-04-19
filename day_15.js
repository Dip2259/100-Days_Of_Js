/* Write a function to calculate the sum of squares of all elements in an array. For Example,
   given the array [1,2,3] the function should return 14 because 1*1 + 2*2+ 3*3 = 1+4+9 = 14.
*/

const sumOfSquare = (arr)=>{
    if(arr.length == 0) throw new Error("Array should not be empty!..\n");
    return arr.reduce((accum, current)=> accum + (current*current), 0);
}

function main(){
    let arr = [1,2,3];
    try{
        console.log(`Sum of squares of the given array elements is ${sumOfSquare(arr)}`);
    }
    catch(e){
        console.log(e.message);
    }
}
main();
