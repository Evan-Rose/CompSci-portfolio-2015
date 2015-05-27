var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", playGame);
var dropDownMenu1 = document.getElementById("DropdownMenu1");
DropdownMenu1.addEventListener("click", Shoot);

var compRand, playerChoice, computerChoice;
function playGame() {
    getCompChoice();
    getPlayerChoice();
    compare();
}

function getCompChoice() {
    compRand = Math.random();
    if (compRand < 0.34) {
        computerChoice = "Rock";
    } else if (compRand <= 0.67) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    
}
var playerChoice;
 function getPlayerChoice() {
    playerChoice = dropDownMenu1.options[dropDownMenu1.selectedIndex].text;
   //alert(playerChoice);
}


function compare() {
    if (playerChoice === computerChoice) {
        alert("It's a tie :/");
    }

    else if (playerChoice === "Rock"){
        if(computerChoice === "Scissors"){
            alert("You win!");
        }
        else{
            alert("You lose!");
        }
    }
    else if(playerChoice === "Scissors"){
        if (computerChoice === "Rock"){
            alert("You lose!");
        }
        else{
            alert("You win!");
        }
    }
    else if(playerChoice === "Paper"){
        if (computerChoice === "Rock"){
            alert("You win!");
        }
        else{
            alert("You lose!");
        }

    }
}


