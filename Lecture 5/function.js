function myFunction() {
    console.log('Kanwer abdull rahman is the student of UET Taxila.');
    console.log('My Father is a Teacher):');
}
myFunction();

function parameter(msg, n) {
    console.log(msg, n);
}
parameter('Hello World', 3054418833);

//****** Add two number*///
function myAdd(x, y) {
    console.log(x + y);
}
myAdd(345, 286);

//******************** */
function add(a, b) { //fun_t parameter a,b are local variable and laye in block scope
    sum = a + b;
    return sum;
}
let n = add(34, 76);
console.log(n);
console.log(sum);

function sumAdd(a, b) {
    return a + b;
}
let j = sumAdd(2, 3);
console.log(j);

//*********Arrow Function *********//
const varchar = (x, y) => { //arraow functon use in modern javasrcipt
    console.log(x + y);
}
console.log(varchar(34, 45));

// arrow multiplication

const mulTipli = (a, b) => {
    console.log(a * b);
}
mulTipli(3, 9);

const print = () => { // no parameter for print perpose
    console.log('Kanwer Abdull Rahman');
};
print();

// Pracrice Question//

//function vowel(s) {
//    let k = 0;
//    for (let i of s) {
//        if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u' || i == 'A' || i == 'E' || i == 'I' || i == 'O' || i == 'U') {
//            k += 1;
//        }
//    }
//    return k;
//}
//let b = prompt('Enter the string to find out vowels in it:');
//console.log(big);
//let big = vowel(b);

//const vowel = (s) => {
//        let k = 0;
//        for (let i of s) {
//            if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u' || i == 'A' || i == 'E' || i == 'I' || i == 'O' || i == 'U') {
//                k += 1;
//            }
//        }
//        return k;
//    }
//    let b = prompt('Enter the string to find out vowels in it:');
//let big = vowel(b);
//console.log(big);

//*******ForEach Loop in array ******/

//let val = [4, 5, 6, 2, 67, 9, 3, 8];
//val.forEach(function print(val) { // for each index it argue it one by one like loop
//    console.log(val);
//});

let val = ['kanwer', 'ali', 'zainab', 'tashi', 'danial', 'mana', 'naseer', 'jawad'];
val.forEach((val) => { // for each index it argue it one by one like loop
    console.log(val.toUpperCase()); //we can perform operation like methods on strings
});

let strings = ['ali', 'zainab', 'tashi'];
strings.forEach((val, idx, strings) => {
    console.log(val.toUpperCase(), idx, strings);

});

// Practice Foreach function/Method
let sqr = [1, 4, 3, 2, 5];
sqr.forEach((val) => {
    console.log(val * val);
});
console.log(sqr);

//************Mape Method**** */

//let char = [3, 5, 7, 2, 8];
//char.map((val) => {
//    console.log(val * val); //it return new array with changes
//});
//console.log(char);
let char = [3, 5, 7, 2, 8];
let g = char.map((val) => {
    return val ** 2; //it return new array with changes

});
console.log(g);
console.log(char);

//*************Filter Method on array*******/
let red = [2, 3, 4, 3, 5, 1];
let kar = red.filter((val) => { //filter method filter out the values that true on condition
    return val % 2 == 0;
});
console.log(kar);

//**************Reduce Method on Array****//
let gem = [2, 4, 6, 7, 8, 2];
let kj = gem.reduce((val, curr) => { //reduce to single digit
    return val * curr;
});
console.log(kj);
// Question 2:
let gh = gem.reduce((val, curr) => {
    return val < curr ? val : curr;
});
console.log(gh);

// *****Practice Question ******//
let Mar = [87, 93, 64, 99, 86, 98, 95];
let ui = Mar.filter((val) => {
    return val >= 90;
});
console.log(ui);

//Question 2

let l = prompt('Enter a number to print n number');
let tel = [];
for (let i = 1; i <= l; i++) {
    tel[i - 1] = i;
};
console.log(tel);

//Question 3
let gi = [23, 5, 76, 8, 9, 34];
let o = gi.reduce((pre, curr) => {
    return pre * curr;
});
console.log(o);