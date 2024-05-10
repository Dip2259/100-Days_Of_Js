/* Write a function in javascript called repeatString that takes two parameters:

   str: A string that needs to be rapeated
   num: An integer representing the number of times the string should be repeated

   The function returns the string after repeating the input string specified number of times.

   repeatString("abc", 3) -> "abcabcabc"
*/

const repeatString = (str, num)=>{
    let ans = "";
    for(let i  = 0; i<num; i++){
        ans += str;
    }
    return ans;
}

function main(){
    console.log(repeatString("abc", 6));
}
main()