/* Write a function called getMedian that takes an array of numbers as input and returns the median of those numbers.

Input: [1,2,3,4,5] Output: 3
Input: [10,20,40,50] Output: 30
Input: [-1,0,1] Output: 0
*/

const getMedian = (arr)=>{
    if(arr.length == 0) throw new Error("Array should not be empty!. \n");
    arr.sort((a,b)=> a-b);
    if(arr.length%2 == 0){
        return (arr[Math.floor(arr.length/2)] + arr[Math.floor(arr.length/2) - 1])/2;
    }
    return arr[Math.floor(arr.length/2)];
}

function main(){
    try{
        console.log(getMedian([10,20,40,50]));
    }
    catch(err){
        console.log(err.message);
    }
}
main()