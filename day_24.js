/* 
    Write a function in javascript that takes an array as an input and returns the mode of the given array.
    
    Mode of the array is the most frequent element present in the array.
*/

const getCount = (arr)=>{
    let counts = {};
    arr.forEach(element => {
       if(counts[element] != null) counts[element] = counts[element] + 1; 
       else counts[element] = 1;
    });
    return counts;
}
const getMode = (arr)=>{
    if(arr.length == 0) throw new Error("Array should not be empty!. \n");
    let counts = getCount(arr);
    let ans = -1, maxCount = 0;
    Object.entries(counts).forEach(item => {
        if(item[1] >= maxCount){
            ans = item[0];
            maxCount = item[1];
        }
    })
    return ans;
}

function main(){
    try{
        console.log(getMode([10,20,10,30,20,40,40,50,10]));
    }
    catch(err){
        console.log(err.message);
    }
}
main()