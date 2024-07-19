let array = [24, 45, 34, 67, 89, 12];
console.log(array);
console.log(array.length); // type of array is object because array dont have type it is also a object type
let hero = ["Quaid e Azam", "Allama iqbal", "Liaqat Ali", "Fatima Jinnah", "Sir Sayed"];
hero[1] = "Kanwer";
console.log(hero); // Array are "muteable" mean orignal value of array changed

//********/Looping over array//********/

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
for (let her of hero) {
    console.log(her);
}
sum = 0;
for (let vr of array) {
    sum += vr;
}
console.log(sum / array.length);

// *****Practice Question**********//

let Marks = [87, 65, 76, 56, 47, 98, 76, 54];
sum = 0;
for (let i of Marks) {
    sum += i;
};
console.log(`The average of Class Marks : ${sum/Marks.length}`);

//Question 2

let Prices = [250, 645, 300, 450, 900];
let i = 0;
for (let off of Prices) {
    let discount = off / 10;
    Prices[i] = Prices[i] - discount;
    console.log(`New Value are : ${Prices[i]}`);
    i++;
};
console.log(Prices);

// ****** Array Methods********//

//push
let item = ['chef', 'pakwan', 'hiran'];
let vegetable = ['carrat', 'potato', 'onion', 'littel finger', 'pepper'];
vegetable.push("aali", 'kanwer', 'kadu'); //Add values at end
console.log(vegetable);

//Pop

let items = vegetable.pop();
console.log(vegetable);
console.log(items);

//concat

let im = vegetable.concat(item); //return new result
console.log(im);

//Unshift

vegetable.unshift('Kanwer');
console.log(vegetable);

//Tostring

let gim = vegetable.toString();
console.log(gim);

//shift

vegetable.shift();
console.log(vegetable);

// Slice

console.log(vegetable.slice(0, 3)); // end value like 3 not include in slice section
//change original array
// splice

vegetable.splice(2, 3, 44, 55, 'kanwer');
console.log(vegetable);

// add splice
vegetable.splice(3, 0, 'Faisal');
console.log(vegetable);

// delete splice 
vegetable.splice(4, 1);
console.log(vegetable);
// replace splice

vegetable.splice(2, 1, 10001);
console.log(vegetable);

// ****** Practice Question*******///

let companies = ['Bloomberg', 'Microsoft', 'Uber', 'Apple', 'Netflix', 'Google', 'IBM'];
companies.shift();
console.log(companies);
//remove first value
companies.splice(1, 1, 'Ola');
console.log(companies);
// replace uber with ola
companies.push('Amazon');
console.log(companies);
// add amazon at end

let ray = [235, 456, 234, 765, 45];
let h = 0;
for (let gh of ray) {
    discount = gh / 10;
    ray[h] = ray[h] - discount;
    console.log(`New value after discount:${ray[h]}`);
    h++;
}