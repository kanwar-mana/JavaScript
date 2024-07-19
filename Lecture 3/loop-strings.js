//loops coding

//let sum=0;
//for(let i=0; i<=7; i++){
//    sum=sum+i;
//}
//console.log("sum =",sum);
//console.log("Program has ended!");

//let n="Kanwer Abdull Rahman";    // Print 1000 time "Kanwer Abdull Rahman"
//for(let i=1; i<=1000; i++){
//    console.log(n);
//}
//console.log("Program has ended!");

// print "i" in lopp

//for(let i=1; i<=10; i++){
//    console.log(i);
//}

// While Loop

//let i=1;
//while(i<=10){
//    console.log("Kanwer Abdull Rahman");
//    i++;
//}
// Do while loop

//let i=20;
//do{
//    console.log("Kanwer Abdull Rahman");
//    i++;
//}while(i<=10);

// For of loop (Use for string,array,character)

let mng = "Kanwer Haseeb Ahmad";
let size1 = 0;
for (let i of mng) {
    console.log("i= ", i);
    size1++;
}
console.log("Size is : ", size1);

// For in Loop(Use for itteration on object)

let student = {
    name: "Kanwer abdull Rahman",
    reg_no: "22-cs-71",
    cgpa: 3.18,
    Profession: "Programmer",
};

let size = 0;
for (let i in student) {
    console.log("i:", i, student[i]);
    size++;
}
console.log("Size= ", size)

// Question 1
// Print 0 to 100 all even numbers

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(" ", i);
    }
}

// Question 2

//let gm_numbr = 35;
//let user_number = prompt("Guess the game number:");
//while (user_number != gm_numbr) {
//    user_number = prompt("You enter wrong number.Try again:");
//}
//console.log("Congratulation you win the game!!!");

// Strings // 

let gava = "Herchoki";
console.log(gava.length); //Find length of string
console.log(gava[5]); //Find character on index

// Template literals//
let obj = {
    name: `Kanwer Abdull Rahman`,
    rs: 10000000,
}
let spacialstring = `The person ${obj.name} has ${obj.rs} $`;
console.log(spacialstring);
console.log(typeof spacialstring);

// Escape Character//

let str = "I am\nKanwer Abdull Rahman"; // we use "\n" for next line print.its length is 1
let manga = "My village\tis herchoki"; // "\t" use for tab space its length is 1
console.log(manga);
console.log(manga.length);
console.log(str);
console.log(str.length);

// Strings Methods //

let mtr = "   Kanwer Abdull Rahman   ";
let nr = mtr.toUpperCase();
console.log(mtr);
console.log(nr);
console.log(mtr.toLowerCase());
console.log(mtr.trim()); // for removing white space at start and end

let kr = "Kanwer Abdull Rahman";
let kr1 = "Student";
console.log(kr.slice(3, 12)); // End index not included
console.log(kr.concat(kr1)); // for add two strings
console.log(kr.replaceAll('n', 'e')); // replace n from e
console.log(kr.charAt(3));


// Prctice excercise

let srt = prompt("Enter your full name: ");
console.log(`@${srt.trim()}${srt.length}`);

let mig = 'Kanwer Abdull Rahman';
let size4 = 0;
for (let i of mig) {
    console.log('Letters are : ', i);
    size4 += 1;
}
console.log('Size of string are : ', size4);

// Tempelate Literals //
let obj1 = {
    name: 'Kanwer',
    Reg: '22-CS-71',
};
let string1 = `The person ${obj1.name} has registration number ${obj1.Reg}`;
console.log(string1);
console.log(typeof string1);