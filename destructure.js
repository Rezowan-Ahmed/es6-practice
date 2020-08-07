const person = {name: 'jecson', age: 14, job: "facebooker", gfName: 'unknown', phone: 1038494, address: 'china,hubei', friends: ['asiff', 'fasfj', 'ajhsfjadf', 'gwgw']};
const { gfName, friends } = person;  // this is easy way to get specific property 
// const gfName = person.gfName;
// const friends = person.friends;
console.log(gfName, friends);

const myList = [ 'dim', 'alu', 'vaji', 'gos'];
// const [coto, alu] = myList;
// console.log(coto, alu);

const [ coto, ...restArray] = myList;
console.log(restArray);

const complexObject = {
    name: 'abc',
    info: {
        address : 'kola bangan',
        leader: 'Tiger leader'
    }
};
const { leader } = complexObject.info;
console.log(leader);