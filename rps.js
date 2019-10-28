// initialize playerScore and computerScore at 0 to begin game
let playerScore = 0
let computerScore = 0
let playerSelection =''
let computerSelection = ''

// define function computerPlay: computer selection of rock, paper, or scissors
function computerPlay() {

    // generate random number
    let number = Math.floor( Math.random() *3 );

    //convert number to rock, paper, or scissors
    if ( number < 1 ) {
        return "rock";

    } else if ( number > 1 ) {
        return "scissors";

    } else {
        return "paper";

    };

// close function computerPlay
};    

//define function playRound: play one round
function playRound( playerSelection, computerSelection) {

    // determine who wins the round: 0 = tie, 1 = player wins, 2 = computer wins
    if ( playerSelection == computerSelection ) {
        return 0;

    } else if ( playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock") {
        return 1;

    } else {
        return 2;

    };

// close function playRound
};

// define function game: play 5 rounds
function game() {

    const buttons = document.querySelectorAll('button');
    const gameContainer = document.querySelector('#gameContainer');
    const selections = document.createElement('p');
    const roundResults = document.createElement('p');
    const score = document.createElement('p');
    const results = document.createElement('p');

    buttons.forEach((button) => {

        button.addEventListener('click', (e) => {
        let playerSelection = button.id;
        let computerSelection = computerPlay();

        selections.classList.add('selections');
        selections.textContent = "You chose " + playerSelection + " and the computer chose " + computerSelection + ".";
        gameContainer.appendChild(selections);

        if ( playRound( playerSelection, computerSelection ) == 0 ) {
            roundResults.classList.add('roundResults');
            roundResults.textContent = 'This round is a tie!  Both you and the computer chose ' + playerSelection + '.';
            gameContainer.appendChild(roundResults);

        } else if ( playRound( playerSelection, computerSelection) == 1 ) {
            roundResults.classList.add('roundResults');
            roundResults.textContent =  'You win this Round! ' + playerSelection + ' beats ' + computerSelection + '!';
            gameContainer.appendChild(roundResults);
            playerScore++;

        }else {
            roundResults.classList.add('roundResults');
            roundResults.textContent = 'You lose this Round. ' + computerSelection + ' beats ' + playerSelection + '.';
            gameContainer.appendChild(roundResults);
            computerScore++;

        };

        score.classList.add('score');
        score.textContent = 'Your score is ' + playerScore + '. ' + 'The computer\'s score is ' + computerScore + '.';
        gameContainer.appendChild(score);

        if (playerScore == 5 ) {
            results.classList.add('results');
            results.textContent = 'You Won! You won 5 rounds and the computer won '+ computerScore + ' roumds.';
            gameContainer.appendChild(results);

        } else if (computerScore == 5) {
            results.classList.add('results');
            results.textContent = 'You Lose!  You won ' + playerScore + ' rounds and the computer won 5 rounds.';
            gameContainer.appendChild(results);
        };

        });
    });

// close function game
};

// invoke function game:  play game
game();


