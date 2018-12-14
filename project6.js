let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber =Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === 'r'){
        return "Rock";
    }
    if(letter === 'p'){
        return "Paper";
    }
    if(letter === 's'){
        return "Scissors";
    }
}

function win(user, computer){ 
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    result_p.innerHTML = convertToWord(user)+smallUserWord+" mengalahkan " +convertToWord(computer)+smallComputerWord+ ". Anda Menang!";
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function(){
        document.getElementById(user).classList.remove('green-glow');
    }, 2000)
    console.log("USER WINS");
    console.log(user);
    console.log(computer);
}
function lose(user, computer){ 
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    computerScore_span.innerHTML = computerScore;
    console.log(user);
    console.log(computer);
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    result_p.innerHTML = convertToWord(computer)+smallComputerWord+" mengalahkan " +convertToWord(user)+smallUserWord+ ". Anda Kalah!";
    console.log("USER LOSES");
}
function draw(user, computer){ 
    const smallUserWord = "user".fontsize(3).sup();
    const smallComputerWord = "computer".fontsize(3).sup();
    result_p.innerHTML = convertToWord(user)+smallUserWord+" sama dengan " +convertToWord(computer)+smallComputerWord+ ". Hasilnya Seri!";
    console.log("DRAW!!!");
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    console.log("user score = " +userChoice);
    console.log("computer score = " + computerChoice);
    switch(userChoice + computerChoice){
        case "pr":
        case "sp":
        case "rs":
        win(userChoice, computerChoice);
        break;

        case "rp":
        case "ps":
        case "sr":
        lose(userChoice, computerChoice);
        break;

        case "rr":
        case "pp":
        case "ss":
        draw(userChoice, computerChoice);
        break;
    }
}

function main(){
rock_div.addEventListener('click', function(){
    game("r");
})
paper_div.addEventListener('click', function(){
    game("p");
})
scissors_div.addEventListener('click', function(){
    game("s");
})
}

main();