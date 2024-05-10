/*
    Write a function called truncateString that takes two parameters:

    str: A string that needs to be truncated.
    maxLenght: An integer representing the maximum lenght of string is allowed.
    
    The function should truncate the input string str if its lenght exceeds the specified maxlength. If truncation occurs, the function should add '...' to the end of the truncated string. 
*/
const truncateString = (str, num)=>{
    if(num <= 0) return str;
    let ans = str.slice(0, num);
    if(str.length > num) ans += "...";
    return ans;
}

function main(){
    console.log(truncateString("A-tisket a-tasket A green and yellow busket", 0));
}
main()