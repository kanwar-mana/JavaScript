////  What this chapter is about?
////  Async await >>  promises  chains  >>  callback hell
//
//
//
////**********Asynchrons wait************ */
//function hello() {
//    console.log("Hello Bhaya");
//}
//
//setTimeout(hello, 2000);
////2nd way
//setTimeout(() => {
//    console.log("hello");
//}, 2000);
//
//
////***********Callback,callback hell***************** */
//
//function sum(a, b) {
//    console.log(a + b);
//};
//
//function calCulator(a, b, callbacu) {
//    callbacu(a, b);
//}
//
//calCulator(1, 2, sum);
//
//calCulator(1, 2, (a, b) => {
//    console.log(a + b);
//})
//
////Callback Hell
////nesting
//
////1
//let age = 19;
//
//if (age >= 18) {
//    if (age >= 60) {
//        console.log("Senior");
//    } else {
//        console.log("Middle");
//    }
//} else {
//    console.log("child");
//}
////2
//for (let i = 0; i < 5; i++) {
//    let str = "";
//    for (let j = 0; j < 5; j++) {
//        str = str + j;
//    }
//    console.log(i, str);
//}
////calll back
function getdata(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data : ", dataId);
            resolve("Success");
        }, 2000);
    });
};
/// This is call back hell forming paramyd structure . call back in another function
//(Pyramid of DOOM)
//getdata(1, () => {
//    console.log("getting data2.....");
//    getdata(2, () => {
//        console.log("getting data3.....");
//        getdata(3, () => {
//            console.log("getting data4.......");
//            getdata(4);
//        });
//    });
//});
//Second way of call back to overcome callback hell
//This way much better then call back but not too much .it is similar from callback for now 
//console.log("getting data 1....");
//getdata(1).then((res) => {
//        console.log("getting data 2.....");
//        return getdata(2);
//
//    })
//    .then((res) => {
//        console.log("getting data 3.....");
//        return getdata(3);
//    }).then((res) => {
//        console.log(res);
//    });
//****************Async Await**************** */

async function getallData() {
    console.log("getting data 1..........");
    await getdata(1);
    console.log("getting data 2.....");
    await getdata(2);
    console.log("getting data 3..........");
    await getdata(3);
    console.log("getting data 4..........");
    await getdata(4);
};


//  IIFE  (Immeddiately Invoked Function Expression)
// it is a fuction that is called immediatelly as soon  as it is defined.

//we use iife for async to execute directly;

(async function() {
    console.log("getting data 1..........");
    await getdata(1);
    console.log("getting data 2.....");
    await getdata(2);
    console.log("getting data 3..........");
    await getdata(3);
    console.log("getting data 4..........");
    await getdata(4);
})();

//////Promises
////
//let promises = new Promise((resolve, reject) => { //resolve and reject are callback by js
//    console.log("I am a promise");
//    //   resolve("successful");         //promises is the object of javascript
//    reject("some error occured");
//}); 
//
//function getdata(dataId, nextdata) {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            console.log("data", dataId);
//            resolve("dta deliver successfully");
//            if (nextdata) {
//                nextdata();
//            }
//        }, 5000);
//    });
//}
//
//let result = getdata("kanwer", 234);

//
////Promises with then&catch()
//
//const getPromise = () => {
//    return new Promise((resolve, reject) => {
//        console.log("I am promises");
//        resolve("Successfull");
//    });
//};
//
//let promise = getPromise();
//promise.then((res) => {
//    console.log("promise fullfiled successfully", res);
//});
//
//promise.catch((err) => {
//    console.log("rejected", err)
//})
//
//function asyncFun() {
//    ////  Promises chain
//    setTimeout(() => {
//            return new Promise((resolve, reject) => {
//            resolve("Success");
//            console.log("some data 1");
//        });
//    }, 4000);
//    
//};function asyncFun2() {
//
//    setTimeout(() => {
//            return new Promise((resolve, reject) => {
//            resolve("Success");
//            console.log("some data 2");
//        });
//    }, 4000);
//    
//};function asyncFun3() {
//
//    setTimeout(() => {
//            return new Promise((resolve, reject) => {
//            resolve("Success");
//            console.log("some data 3");
//        });
//    }, 4000);
//    
//};console.log("Fetching Data1");
//
////let func = asyncFun();
//
//asyncFun().then(() => {
//console.log("fetching data 2...");
//
//    console.log("fetching data 3.....");
//    asyncFun2().then(() => {
//    });
//    asyncFun3().then(() => {});
//    // So this is called promises chain
//});


//***************Async await********************** *//

async function hello() {
    console.log("hello");
};

//Async function always return promise automatically

//*************await*********** *// await means kisi cheez ka intazar karna