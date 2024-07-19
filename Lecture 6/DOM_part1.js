//console.dir(document.body.childNodes[1]);
//console.log(document.body);
//document.body.style.background = 'green';
//document.body.childNodes[3].innerText = 'Kanwer Abdull';
// *******DOM manipulation*******//

//Accessing Element by there ID
let heading1 = document.getElementById("heading");
console.dir(heading1);
console.log(heading1);
//Accessing Element by there Class
let paragh = document.getElementsByClassName('k1');
console.dir(paragh);
console.log(paragh);
//Accessing by there Tag
let pagh = document.getElementsByTagName('p');
console.log(pagh);
console.dir(pagh);

//*************Query selecter***** */

let q = document.querySelector('p'); // For 1 value. Also return first ele
console.dir(q);
// We use query selecter for all type like for class,id,and Tag

let q2 = document.querySelectorAll('p');
console.dir(q2); //return Node List

// For Id & Class we use . before class name and # before id name like (.myclass),(#myid);

let id1 = document.querySelector('#heading');
console.dir(id1);

let class1 = document.querySelector('.k1');
console.dir(class1);

// ********Properties of Element**********//

// We can check value and we can change value 

//tagName //return tag for element nodes
console.log(class1.tagName);

//
console.log('Pakisatan');
window.console.log('paksiatn + bangladesh');
console.log(window);

//************ child nodes or parent nodes.....
let gtr = document.querySelector('div').children;
console.log(gtr);

let hty = document.body.lastChild;
console.log(hty);

//**********Inner Text and inner html */

let div = document.querySelector('div');
div.innerHTML = '<i>Pappu</i>';
console.dir(div.innerText);
console.log(div.innerHTML);

//***********textcontent *********** */

let heal = document.querySelector('h1');
console.log(heal.textContent);

//***********Practice Question */
let change = document.querySelector('h2');
change.innerText = change.innerText + ' Apna college for Kanwer Abdull Rahman';
console.log(change.innerText);
//**************Qs 2 */
let divs = document.querySelectorAll('.box');
let n = 1;
for (div of divs) {
    div.innerText = `Kanwer ${n}`;
    n++;
}