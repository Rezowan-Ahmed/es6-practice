/*function doubleInt(num){
    return num *2;
}
const result = doubleInt(5);
console.log(result); */

/*const doubleInt = function myFun(num){
    return num *2;
}
const result = doubleInt(5);
console.log(result); */

// By using ES6 single parameter
const doubleInt = num => num * 2;
const result = doubleInt(5);
console.log(result);

//multiple parameter
const add = (x, y) => x + y;
const result1 = add(10, 10);
console.log(result1);

// Null parameter
const give5 = () => 5;
const result2 = give5();
console.log(result2);

// multiline inside arrow function 
const big = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const math = big(10, 5);
console.log(math);