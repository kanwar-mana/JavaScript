//*********GetAttribute********* */


let div = document.querySelector('div');
console.log(div);

let id = div.getAttribute('id');
console.log(id);

let name = div.getAttribute('name');
console.log(name);

let para = document.querySelector('p');
console.log(para.innerText);

let clas = para.getAttribute('class');
console.log(clas);


//*********setAttribute**********//
//para.setAttribute('class', 'pk');


//***********node.style*********** */

div.style.backgroundColor = 'green';
div.style.color = 'black';
div.style.borderRadius = '20px'

//********Button***** */

let bt = document.querySelector('#but');

bt.addEventListener("click", function() {
    div.style.backgroundColor = 'rgb(74, 119, 158)';

});
let black = document.querySelector('#black');
let bd = document.querySelector("body");

black.addEventListener("click", function() {
    bd.style.backgroundColor = 'rgb(147, 100, 100)';

});
black.addEventListener("click", function() {
    div.style.backgroundColor = 'rgb(147, 100, 100)';

});

//*******Insert Element******* */// add at the end of element

let newbt = document.createElement("button");
let nbt = document.createElement("button");
newbt.innerText = "Click Me";
nbt.innerText = "Click Me";

//bd.append(newbt);

//********Insert at start******* */

bd.prepend(nbt);

bd.before(nbt); //before the element
// after the element

let dg = document.createElement("h1");
dg.innerHTML = "<i>Hy, I am mana</i>";

document.querySelector("body").prepend(dg);

// remove element

dg.remove();

//************Practice question**************** */

let buton = document.createElement("button");
buton.innerText = "click me";
bd.after(buton);
buton.style.backgroundColor = "red";
buton.style.color = "white";
buton.style.border = "0px";
buton.style.borderRadius = "20px";

bd.prepend(buton);

//*************Question no 2************** */

let pari = document.querySelector("p");
pari.classList.add("newcontent");
pari.classList.remove("content");