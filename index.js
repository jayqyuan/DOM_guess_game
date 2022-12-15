// random number generator
const randomNum = Math.floor(Math.random()*100)+1;
console.log(randomNum);

// pull from input field and set number limit
function getInput(){
    let guess = document.querySelector("#inputNum").value;
    if (Number(guess)>0 && Number(guess) <= 100){
    return guess;
    } return "this is not valid number";
}

// 'enter" key and button eventlisteners
let inputType = document.querySelector("#inputNum");
let submitButton = document.querySelector("#submitButton");
inputType.addEventListener("keypress", function (event){
    if (event.key === "Enter"){
        console.log(getInput());
        document.getElementById("inputNum").value = "";
    }   
})
submitButton.addEventListener("click", function (){
    console.log(getInput());
    document.getElementById("inputNum").value = "";
})

function mainFunction = 