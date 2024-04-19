/* Write a function to covert a string in camelCase and snake_case.
   Input: "Hello world dIp" Output: "helloWorldDip" (camelCase)
   Input: "Hello world dIp" Output: "hello_world_dip" (snake_case)
*/

const toCamelcase = (str)=>{
    if(str.trim().length == 0) throw new Error("String Should Not Be Empty");
    return str.trim().split(" ").map((e, index)=>{
        if(index == 0) return e.toLowerCase();
        return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
    }).join("");
}

const toSnakeCase = (str)=>{
    if(str.trim().length == 0) throw new Error("String Should Not Be Empty");
    return str.trim().split(" ").map((e, index)=> e.toLowerCase()).join("_");
}

function main() {
    let str = "Hello world dIp";
    try{
        console.log(`Camel Case: ${toCamelcase(str)}`);
        console.log(`Snake Case: ${toSnakeCase(str)}`);
    }
    catch(e){
        console.log(e.message);
    }
}
main();