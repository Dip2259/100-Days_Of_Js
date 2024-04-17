/* Write a function that takes three parameters represented as the three sides of the triangle you have to return if the triangle is equilateral or  isosceles or scalene. 

-> checkTriangle(2,2,2) -> equilateral
-> checkTriangle(2,4,4) -> isosceles
-> checkTriangle(2,4,6) -> scalene.
*/

const checkTriangle = (a,b,c)=>{
    if(a == 0 || b == 0 || c == 0) throw new Error("Length of any side of triangle can't be zero");
    if(a===b && b===c) return "equilateral";
    else if(a===b || b===c || c===a) return "isosceles";
    return "scalene";
}

function main(){
    try{
        console.log(checkTriangle(2,2,2));
        console.log(checkTriangle(2,4,4));
        console.log(checkTriangle(2,4,6));
    }
    catch(err){
        console.log(err.message);
    }
}
main();