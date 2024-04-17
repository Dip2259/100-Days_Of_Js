/* Write a function that takes a string as input and returns the count of vowels in that string.
   -> ** The input string may contain both upper and lower case letters
*/

let getVowerCount = (str)=>{
    if(str.trim().length == 0) throw new Error("Str should not be empty or contains only whitespace");
    str = str.toLowerCase();
    let ans = 0;
    for(let i = 0; i< str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i'|| str[i] == 'o'||str[i] == 'u'){
            ans ++;
        }
    }
    return ans;
}

function main(){
    let str = "ThE quIck brOwn fOx";
    try{
        let ans = getVowerCount(str);
        console.log(ans);
    }
    catch(err){
        console.log(err.message);
    }
}
main();