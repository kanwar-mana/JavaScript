/*/Method 1 to create object in javascript
const student = {
    fullName: "Kanwer Abdull Rahman",
    marks: 94.4,
    printmarks: function() {
        console.log("marks = ", this.marks);
    },
};

const employee = {
    calTax() {
        console.log("tax rate is 10%"); //method or propertiese
    },
};

const kanwar = {
    salary: 80000,
    calTax() {
        console.log("tax rate is 20%"); // objects have by default function called prototype
    },
};
kanwar.__proto__ = employee; // to make prototype employee of kanwar

//********Mthod 2 to create object with classes*********** 
//Classes give template to object
//*********Constructor********** 

class ToyotaCar {
    constructor(brand, milage) { //constructor is invoked very first 
        console.log("constructor is create..");
        this.brand = brand;
        this.milage = milage;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop")
    }

    setBrand(brand) {
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar("fortuner", 10); //object
//fortuner.setBrand("fortuner");
let lexux = new ToyotaCar("lexux", 12); //object have class properties
//lexux.setBrand("lexux");

//*******Inheritance******** 

class Person {
    constructor(name) {
        this.spiece = "Human being";
        this.name = name;
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    work() {
        console.log("do nothing");
    }
}

class Engineer extends Person {
    constructor(dep, name) {
        super(name); // use to invoke parent constructor
        this.dep = dep;
    }
    work() {
        super.eat(); //use to invoke first any mehod from parent class
        console.log("solve problem and algorithm");
    }
}

class Doctor extends Person {
    work() {
        console.log("Heal Patients and recover them");
    }
}

let man = new Engineer("computer Science", "Kanwer");
let man2 = new Doctor();
//if chid and parent have same method ,child's method will be used. This is called "Method Overriding";*/

//*****************Practice Question *************** */

let Data = "Student information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data = ", Data);
    }
}
class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        Data = "Edit Data";
    }
}
let student1 = new User("Kanwer", "rehmanslightway@gmail.com");
let student2 = new User("Rahman", "kanwar@gmail.com");


let teacher = new Admin("Admin", "admin@gmail.com");

//***************Error Handling**************** */

let a = 45;
let b = 30;
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
try {
    console.log("a + b = ", a + c);
} catch (err) {
    //    console.log(err);
}

console.log("a + b = ", a + b);
console.log("a + b = ", a + b);
console.log("a + b = ", a + b);