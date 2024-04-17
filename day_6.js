/* Write a function to determine wheather a given string is a palindrome or not.
 A palindrome is a word , phrase, number or other sequence of charecter that reads the same forward and backward, ignoring spaces, punctuation, and case-insensitive.

-> isPalindrome("A man, a paln, a canal, Panama") -> output: True
-> isPalindrome("racecar") -> output: true
-> isPalindrome("Hello") -> output: false
*/

let isPalindrome = (str)=>{
    if(str.length === 0) throw new Error("String should not be empty...");
    str = str.toLowerCase();
    let arr = str.split("");
    arr = arr.filter((e) => e>='a' && e<='z');
    for(let i = 0; i< arr.length/2; i++){
        if(arr[i] != arr[arr.length -i -1]) return false;
    }
    return true;
}

function main(){
    let str = "A man, a plan, a canal, Panama";
    try{
        let ans = isPalindrome(str);
        (ans)? console.log("Palindrome"): console.log("Not Palindrome");
    }
    catch(err){
        console.log(err.message);
    }
}
main();