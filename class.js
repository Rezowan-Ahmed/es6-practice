class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "shyampur high school";
    }
}
const Student1 = new Student(12, "shuvo");
const Student2 = new Student(1, "Noyon");
console.log(Student1, Student2);
// specific property access korar jonno
console.log(Student1.name, Student2.name);