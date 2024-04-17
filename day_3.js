/* Write a function that takes one string and a charecter and return the number of occurance of the charecter in the given string. You Should consider both upperCase and lowerCase of that charecter as well. 

-> The answer can lie within 0 <= ans <= length of given string
-> The Given string will not be empty or not only conatins whitespaces

Example:  string -> misIsipi, charecter -> i, ans: 4
*/

const getOccurance = (str, charecter)=>{
    if(str.trim().length == 0) throw new Error("String Should not be empty or contains only whitespace");
    if(charecter == '') throw new Error("Charecter Should not be empty");
    if(charecter>= 'a' && charecter <='z'){
        str = str.toLowerCase();
    }
    else str = str.toUpperCase();
    let count = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i] === charecter) count++;
    }
    return count;
}

function main(){
    let str = "misIsipi";
    let charecter = 'i';
    try{
        return `The Occurance of '${charecter}' within '${str}' is: ` + getOccurance(str, charecter);
    }
    catch(e){
        return e.message;
    }
}
console.log(main());