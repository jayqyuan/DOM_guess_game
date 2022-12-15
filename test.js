let attempt = 0;
let globalGuess = 0;
const randomNum = Math.floor(Math.random()*100)+1;
let guessArray = [];

// pull from input field and set number limit
function getInput(){
    let guess = document.querySelector("#inputNum").value;
    let guessInt = parseInt(guess, 10);
    return guessInt;
}

// 'enter" key and button eventlisteners
let inputType = document.querySelector("#inputNum");
let submitButton = document.querySelector("#submitButton");
inputType.addEventListener("keypress", function Enter(event){
    if (event.key === "Enter"){
        globalGuess = getInput();
        document.getElementById("inputNum").value = "";
        let hint = document.querySelector("#hint");

        if(globalGuess < 1 || globalGuess > 100 || Number.isInteger(globalGuess) === false)
        {
            hint.innerHTML = "Bro what are you doing. A real Number Please.";
        }
        else
        {
            attempt+=1;

            for(let i = 0; i < attempt; i++)
            {
                guessArray.push(globalGuess);
                let id ="#lastGuess" + i;
                let div = document.querySelector(id);
                div.innerHTML = guessArray[i];
                console.log(guessArray);
            }
        }

        console.log(attempt);
        if(attempt === 5 )
        {
            let x = document.querySelector("#inputNum");
            x.remove();
            hint.innerHTML = "Dang Couldn't Guess in 5 Attempts.";
        }
            if(globalGuess < 1 || globalGuess > 100 ){}
            else if(globalGuess < randomNum)
            {
                hint.innerHTML = "Higher";
            }
            else if(globalGuess > randomNum)
            {
                hint.innerHTML = "Lower";
            }
            else if(globalGuess === randomNum)
            {
                hint.innerHTML = "Congrats This Game is as Frustrating as it Was to Code."
            }
    }
})

submitButton.addEventListener("click", function (){
    globalGuess = getInput();
    document.getElementById("inputNum").value = "";
    attempt+=1;
})
