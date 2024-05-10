/* Write a function in javascript called numberRange that generates a array containing numbers from a to b recursively.
*/

const numberRange = (a, b)=>{
    if(a == b){
        return [a];
    } 
    let arr = numberRange(a, b-1);
    arr.push(b);
    return arr;

}

function main(){
    console.log(numberRange(-5, -1));
}
main()