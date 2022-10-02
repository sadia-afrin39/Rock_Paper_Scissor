let userScore = 0;
let computerScore = 0; 
let smallUserWord = "user".fontsize(3).sub();
let smallCompWord = "comp".fontsize(3).sub();


const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

main();
function main(){
    rock_div.addEventListener("click",()=> game("r"));
    paper_div.addEventListener("click",()=> game("p"));
    scissors_div.addEventListener("click",()=> game("s"));
}

function getComputerChoice(){
    const choices = ['r','p','s'];
   const randomNumber =  Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            loose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }
}

function convertToWord(letter){
    if(letter === 'r') return 'Rock';
    if(letter === 'p') return 'Paper';
    return 'Scissors';  
}

function win(userChoice,computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. YOU WIN!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(()=>userChoice_div.classList.remove('green-glow'),1000);
}

function loose(userChoice,computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(computerChoice)}${smallCompWord} beats ${convertToWord(userChoice)}${smallUserWord}. YOU LOST!`;  
    userChoice_div.classList.add('red-glow');
    setTimeout(()=>userChoice_div.classList.remove('red-glow'),1000);
}

function draw(userChoice,computerChoice){
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. IT'S A DRAW!`;
    userChoice_div.classList.add('blue-glow');
    setTimeout(()=>userChoice_div.classList.remove('blue-glow'),1000);
}





        