const dropdown = document.querySelectorAll('.dropdown select');
let btn = document.querySelector("button");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
let message = document.querySelector(".msg");

// Replace with your actual API key



async function convertCurrency() {
    let amount = document.querySelector("input");
    let amVal = amount.value;
    if (amVal === "" || amVal < 1) {
        amVal = 1;
        amount.value = "1";
    };
    console.log(amVal, fromCurr.value, toCurr.value);
    let fr = fromCurr.value;
    let too = toCurr.value;
    console.log(amVal, fr, too);
    const response = await fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=0f83dbb5a350473e8ec3e3024af76552&base=${fr}`);

    const data = await response.json();
    console.log(data);
    const conversionRate = data.rates[too];
    const convertedAmount = amVal * conversionRate;

    console.log(convertedAmount);
    let n = convertedAmount.toFixed(3);


    message.innerText = `${amVal}${fr} = ${n} ${too}`;
};

for (let select of dropdown) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "PKR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    };
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target); // evt.target is a parameter passes to a function with information about element 
    });
};

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    convertCurrency();
});

window.addEventListener("load", () => {
    convertCurrency();
})