/* Q: Here Given a string which contains whitespaces. You have to return the longest word in the string. As well as return the length of the longest word.
*/


let findLongestWord = (str)=>{
    if(str.trim().length == 0) throw new Error("Str should not be empty or contains only whitespace");
    let arr = str.split(" ");
    let maxLength = 0;
    let ans = [];
    arr.forEach(e => {
        if(e.length > maxLength){
            maxLength = e.length;
            ans = [];
            ans.push(e)
        }
        else if(e.length == maxLength){
            ans.push(e)
        }
    });
    // return {ans, maxLength, isCorrect: (ans[0] != "")};
    return {ans, maxLength};
}
function main(){
    let str = "";
    try{
        let ans = findLongestWord(str);
        console.log(ans);
    }
    catch(err){
        console.log(err.message);
    }
    // if(ans.isCorrect == false) console.log("Str should not be empty or contains only whitespace");
}
main();