// const add = (step) => {
//     // We gave the number element an id of number so we can use that to get the element
// let numberElement = document.getElementById("number");
//  // We can use the innerText property to get the text inside the element
// let number = numberElement.innerText;
// number = parseInt(number) + step;
//     numberElement.innerText = number;
// };

// const  subtract = (step) => {
//     // We gave the number element an id of number so we can use that to get the element
// let numberElement = document.getElementById("number");
// console.log("subtract function completed number");
//  // We can use the innerText property to get the text inside the element
// let number = numberElement.innerText;
// number = parseInt(number) - step;
// console.log("after subtract" , number)
//     numberElement.innerText = number;
// };

// const reset = () => {
//     let numberElement = document.getElementById("number");
//     numberElement.innerText = 0;
//     console.log("reset", number);
// };

const add = () => {
    const numberElement = document.getElementById("number");
    const inputElement = document.getElementById("user-input");
    const step = parseInt(inputElement.value); // Get the user input value

    // Check if input is a valid number
    if (!isNaN(step)) {
        let number = parseInt(numberElement.innerText);
        number += step;
        numberElement.innerText = number; // Update displayed value
    } else {
        console.log("Please enter a valid number");
    }
};

const subtract = () => {
    const numberElement = document.getElementById("number");
    const inputElement = document.getElementById("user-input");
    const step = parseInt(inputElement.value); // Get the user input value

    // Check if input is a valid number
    if (!isNaN(step)) {
        let number = parseInt(numberElement.innerText);
        number -= step;
        numberElement.innerText = number; // Update displayed value
    } else {
        console.log("Please enter a valid number");
    }
};

const reset = () => {
    const numberElement = document.getElementById("number");
    numberElement.innerText = 0; // Reset displayed value to 0
};