/* Write a function to check if a charecter is uppercase or lowercase.
   isUpperCase("s") -> false;
   isUpperCase("S") -> true;
   isLowerCase("b") -> true;
   isLowerCase("B") -> false;
*/

const isUpperCase = (ch)=>{
    if(ch.charAt(0) >= 'A' && ch.charAt(0) <= 'Z') return true;
    return false;
}
const isLowerCase = (ch)=>{
    if(ch.charAt(0) >= 'a' && ch.charAt(0) <= 'z') return true;
    return false;
}

function main(){
    console.log(isUpperCase("s"));
    console.log(isUpperCase("S"));
    console.log(isLowerCase("b"));
    console.log(isLowerCase("B"));
}

main()