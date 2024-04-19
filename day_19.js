/* Write a function to check if a given string starts with a specific substring
   
Input: "Hello World", "hello" Output: true
Input: "Hello World", "World" Output: false

*/

const isStartsWith = (str1, str2)=>{
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    return str1.startsWith(str2);
}

function main(){
    console.log(isStartsWith("Hello World", "World"));
}
main();