//Welcome to second javascript lecture
/*//Operators
let a = 4;
let b = 2;
let c = 5;
console.log("a + b= ", a + b);
console.log("a - b= ", a - b);
console.log("a * c= ", a * c);
console.log("b / a= ", b / a);
console.log("c % a=", c % a); //Modulus
console.log("a ** b= ", a ** b); //Exponentiation
*/ //Unary operator
let a = 5;
let b = 4;
console.log("a =", a, "& b =", b);
console.log("a =", ++a, a);
b = b - 1;
console.log("b =", ++b, b++, b);
/*
//Assignment operator

let a = 5;
let b = 4;
a += 5;
b -= 2;
a *= 2;
a /= 2;
a %= 2;
b **= 5;
console.log("a =", a, "b =", b)

//Comparison operator

let a = '5'; //int
let b = 4;
let c = 5; //string->int
console.log("a == b", a == b);
console.log("a != b", a != b);
console.log("a == c", a == c);
console.log("a===c", a === c); //strict operator for comparison
console.log("a>b= ", a > b);
console.log("a>=c", a >= c);

//Logical operator

let a = 5;
let b = 4;
let c = "5";
cond1 = a < b;
cond2 = a === c;

console.log("cond1 && cond2=", !(cond1 || cond2))

//Condition Statements

let mode = "Dark";
let color;
if (mode === "Dark") {
    color = "Black";
}
if (mode === "Light") {
    color = "White";
}
console.log(color)

let a = 675;
if (a % 2 == 0) {
    console.log("a is a EVEN number;");
} else {
    console.log("a is not a EVEN number");
}

let mode = "red";
let color;
if (mode === "dark") {
    color = "black";
} else if (mode === "blue") {
    color = "blue";
} else if (mode === "green") {
    color = "green";
} else {
    color = "red";
}
console.log(color);
*/

//Ternary Operator//

let age = 17;
let Out = age >= 18 ? 'Adult' : 'Under Age';
console.log(Out);
alert("Hello Kanwar!");
/*
let num=prompt("Enter number to find is it multiple of 5 or not!");
if(num%5===0){
    console.log("Number is multiple of 5!");
}
else{
    console.log("Number is not a multiple of 5");
}

//  Question 02//

let outp=prompt("Enter the number to get your grade");
let grade;
if(outp>=90 && outp<=100){
    grade="A";
}
else if(outp>=70 && outp<=89){
    grade="B";
}
else if(outp>=60 && outp<=69){
    grade="C";
}
else if(outp>=50 && outp<=59){
    grade="D";
}
else if(outp=0 && outp<=49){
    grade="F";
}
else{
    console.log("You Put Wrong Numbers!");
}
console.log(outp,grade);*/