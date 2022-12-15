let attempt = 0;
let globalGuess = 0;

// pull from input field and set number limit
function getInput(){
    let guess = document.querySelector("#inputNum").value;
    if (Number(guess)>0 && Number(guess) <= 100){
    let guessInt = parseInt(guess, 10);
    return guessInt;
    } return "this is not valid number";
}

// 'enter" key and button eventlisteners
let inputType = document.querySelector("#inputNum");
let submitButton = document.querySelector("#submitButton");
inputType.addEventListener("keypress", function Enter(event){
    if (event.key === "Enter"){
        globalGuess = getInput();
        document.getElementById("inputNum").value = "";
        attempt+=1;
        return globalGuess;
    }   
})

submitButton.addEventListener("click", function (){
    globalGuess = getInput();
    document.getElementById("inputNum").value = "";
    attempt+=1;
})

console.log(globalGuess);
function mainFunction(){
    // console.log("Your game has begun.");
    const randomNum = Math.floor(Math.random()*100)+1;
    let hint = document.querySelector("#hint");
    for(let i = 0; i < 5; i++)
    {
        if(globalGuess < 1 || globalGuess > 100 )
        {
           hint.innerHTML = "TYPE IN A NUMBER BETWEEN 1 TO 100 AND PRESS THE BUTTON OR ENTER";
        }
        else if(globalGuess < randomNum)
        {
            hint.innerHTML = "Higher";
        }
        else if(globalGuess > randomNum)
        {
            hint.innerHTML = "Lower";
        }
    }
}