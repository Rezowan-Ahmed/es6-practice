/*function add(num1, num2){
    return num1 + num2;
}
const total = add(12, 18);
console.log(total);
*/

/*function add(num1, num2){
    if (num2 == undefined) {
        num2 = 0;
    }
    return num1 + num2;
}
const total = add(12);
console.log(total);
*/
/*function add(num1, num2){
    num2 = num2 || 0;
    return num1 + num2;
}
const total = add(12);
console.log(total);
*/

function add(num1, num2 = 12){
    return num1 + num2;
}
const total = add(12);
console.log(total);