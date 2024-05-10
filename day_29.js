/* Write a function in javascript called numberRange that generates a array containing numbers from a to b.
*/

const numberRange = (a, b)=>{
    let arr = [];
    for(let i = a; i<=b; i++){
        arr.push(i);
    }
    return arr;
}

function main(){
    console.log(numberRange(-5, 6));
}
main()