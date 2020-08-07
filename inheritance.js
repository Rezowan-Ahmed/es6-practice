class Parent{
    constructor(){
        this.fatherName = "Baccu";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Noyon");
const baby2 = new Child("Akhi");
console.log(baby);
console.log(baby2);
console.log(baby.getFullName());