class Person{
    constructor
    (name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating...`);
    }
}

class Student extends Person{
    constructor(name, age, grade){
        super(name, age);//to set parent class attributes
        this.grade = grade;
    }

    study(){
        console.log(`${this.name} is studying...`);
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age);//to set parent class attributes
        this.subject = subject;
    }
    teach(){
        console.log(`${this.name} is teaching ${this.subject}...`);
    }
}

let student1 = new Student("Alice", 20, "A");
student1.eat(); // Output: Alice is eating...
student1.study(); // Output: Alice is studying...

let teacher1 = new Teacher("Mr. Smith", 40, "Math");
teacher1.eat(); // Output: Mr. Smith is eating...
teacher1.teach(); // Output: Mr. Smith is teaching Math...