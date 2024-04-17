let getHashTag = (str)=>{
    if(str.trim().length == 0) throw new Error("Str should not be empty or contains only whitespace");
    let arr = str.split(" ");
    let ans = ""
    arr = arr.map((e)=>{
        return e.charAt(0).toUpperCase() + e.slice(1);
    })
    ans = arr.join("");
    return "#" + ans;
}

function main(){
    let str = "Welcome to the javascript practice session";
    try{
        let ans = getHashTag(str);
        console.log(ans);
    }
    catch(err){
        console.log(err.message);
    }
}
main();