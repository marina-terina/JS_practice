const add = (step) => {
    // We gave the number element an id of number so we can use that to get the element
let numberElement = document.getElementById("number");
 // We can use the innerText property to get the text inside the element
let number = numberElement.innerText;
number = parseInt(number) + step;
    numberElement.innerText = number;
};

const  subtract = (step) => {
    // We gave the number element an id of number so we can use that to get the element
let numberElement = document.getElementById("number");
console.log("subtract function completed number");
 // We can use the innerText property to get the text inside the element
let number = numberElement.innerText;
number = parseInt(number) - step;
console.log("after subtract" , number)
    numberElement.innerText = number;
};

const reset = () => {
    let numberElement = document.getElementById("number");
    numberElement.innerText = 0;
    console.log("reset", number);
};