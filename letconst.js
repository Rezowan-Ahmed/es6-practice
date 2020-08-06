 const numbers = [112, 38];
 numbers[1] = 88;
 numbers.push(12);
//  numbers = ["arif", "noyon"]; not possible can not change full array
 console.log(numbers);

 const nayok = {name : "shakib khan", phone: 1238293};
 console.log(nayok);
// akhanew full object nayok change kora possible na just element chage kora jabe

// using let
var sum = 0;
for (var i = 0; i < 10; i++) {
    sum = sum + i;
}
console.log(i);

// ata let dia korle console ta vitore dewa lagto 
// let sum = 0;  akhane dile kaj korbe na 
for (let i = 0; i < 10; i++) {
    let sum = 0;
    sum = sum + i;
    
}
console.log(i);