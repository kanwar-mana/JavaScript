// API
// Application programming interface
//the fetch provides an interface for fetching (sending/receiving) resources.
//it uses Request and Response object
//the fetch() method is used to fetch a resourse (data).

// let promise=fetch(url,[options])
//status means successfully
// api return promise which we further work on it

const URL = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#fact");
const btnfact = document.querySelector(".getfact");

// this is better in reading understand
const getData = async() => {
    console.log("getting data.......");
    let response = await fetch(URL);
    console.log(response.status); // JSON format
    let data = await response.json();
    factpara.innerText = data[1].text;
    factpara.style.fontFamily = "cambria";
    //   console.log(data[0].text);
};

//Now with the help of promise chain

//function getData() {
//    fetch(URL).then((response) => {
//        return response.json();
//    }).then((data) => {
//        factpara.innerText = data[4].text;
//    });
//};


//btnfact.addEventListener("click", getData);


//AJAX  is asinchronous JS & XML

//JASON is JavaScript Object Notation

//json() method :  return a second promise that rsolve with the result of parsing the response body text as json . (input in JSON,output is JS object) 7 


// Request & Response
//HTTP Verbs  
//http response headers also contain about the response , such as content type, http status code etc.
//there is some protocole on internet

//function getData() {
//    fetch(URL).then((response) => {
//        return response.json();
//    }).then((data) => {
//        factpara.innerText = data[4].text;
//    });
//};

btnfact.addEventListener("click", getData);