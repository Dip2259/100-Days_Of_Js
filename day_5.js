/* Write a function to sort the array element in ascending order */

let sortArray = (arr)=>{
    if(arr.length == 0) throw new Error("Array should not be empty");
    return arr.sort((a,b)=> a-b);
}

function main(){
    try{
        console.log(sortArray([10,78,50,4]));
    }
    catch(err){
        console.log(err.message);
    }
}
main();