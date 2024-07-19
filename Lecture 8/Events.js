//let btn1 = document.querySelector("#btn1");
////
////btn1.onclick = (evt) => { // evt is object  
////    //   console.log("btn1 was clicked");
////    //   let a = 25;
////    //   a++;
////    console.log(evt); //25
////    console.log(evt.type);
////    console.log(evt.target);
////    console.log(evt.clientX, evt.clientY);
////};
//const handle1 = (evt) => {
//    console.log("button was click ! handler1");
//    console.log(evt.type);
//    console.log(evt.target);
//};
//btn1.addEventListener("click", handle1);
//
//btn1.removeEventListener("click", handle1); // for remove event we should have same callback functions
//
//let div = document.querySelector("div");
////
////div.onmouseover = () => {
////    console.log("You are inside me!");
////}
//const handler1 = () => {
//    console.log("button was clicked -- handler1");
//};
//
//div.addEventListener("click", handler1);
//div.removeEventListener("click", handler1);

//*******Pratice Question****** */
let bd = document.querySelector("body");
let btn1 = document.querySelector("#btn1");
let cmode = "light";

btn1.addEventListener("click", () => {
    if (cmode === "light") {
        cmode = "dark";
        bd.classList.add("dark");
        bd.classList.remove("light");
    } else {
        cmode = "light";
        bd.classList.add("light");
        bd.classList.remove("dark");

    }
    console.log(cmode);
});
//const hand = () => {
//    bd.style.backgroundColor = "white";
//    btn1.style.backgroundColor = "white";
//};
//const hand1 = () => {
//    bd.style.backgroundColor = "#262627";
//    btn1.style.backgroundColor = "#262627";
//};
//
//btn1.addEventListener("dbclick", hand);
//btn1.addEventListener("click", hand1);//

//btn1.addEventListener("click", () => {
//    if (bd.style.backgroundColor === "white") {
//        bd.style.backgroundColor = "#262627";
//        bd.style.Color = "white";
//    } else {
//        bd.style.backgroundColor = "white";
//        bd.style.Color = "#262627";
//    }
//
//});