/* Write a javacscript function to count the occurences of each element in an array and store the count in an object. The keys of the object should be represent the element of the array, and the values should represent the number of times each element appears in the array. */

const getCount = (arr)=>{
    if(arr.length == 0) throw new Error("Array should not be empty!. \n");
    let counts = {};
    arr.forEach(element => {
       if(counts[element] != null) counts[element] = counts[element] + 1; 
       else counts[element] = 1;
    });
    return counts;
}

function main(){
    try{
        console.log(getCount([10,20,10,30,20,40,40,50]));
    }
    catch(err){
        console.log(err.message);
    }
}
main()