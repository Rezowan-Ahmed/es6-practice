const ages = [12, 42, 12, 13, 54];
const ages2 = [3, 5, 58, 39, 29];
const ages3 = [22, 54, 23, 65];
const allAges = ages.concat(ages2).concat([1]).concat(ages3);
// easy way to add multiple array with spread operator ...
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges2);
console.log(allAges);

// get max number of array
const takapoisa = [245, 632, 2321, 633, 66];
const maximum = Math.max(...takapoisa);
console.log("maximum array is: " + maximum);