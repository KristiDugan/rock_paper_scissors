const computerPlay = () => {
	let randomNumber = Math.floor(Math.random() * 3); // returns random integer from 0 to 2
	// assign each of the three possibilities a string
	return (randomNumber === 0) ? 'Rock' : 
	(randomNumber === 1) ? 'Paper' : 
	'Scissors';
}

const capitalize = (str) => {
	return str.substring(0,1).toUpperCase() + str.substring(1).toLowerCase();
};

function playRound(playerSelection, computerSelection) {
	// capitalize playerSelection before comparison
	playerSelection = capitalize(playerSelection);
	
	// create each scenario as a string
	let bothPlays = playerSelection + ' vs. ' + computerSelection;
	
	if (playerSelection === computerSelection) {
		bothPlays = 'tie';
	}

	let message;  // round results message

	// compare for each case and for tie
	switch (bothPlays) {
		case 'Rock vs. Scissors' : 
		case 'Paper vs. Rock' : 
		case 'Scissors vs. Paper' :
			message = `You win! ${playerSelection} beats ${computerSelection}`;
		break;

		case 'tie' : 
			message = 'You tied!';
		break;

		default : 
			message = `You lose! ${computerSelection} beats ${playerSelection}`;
		break;
	}
	return message;
}

const playerSelection = 'ROCK';
const computerSelection = computerPlay();

const game = () => {
	
	let playerScore = 0;
	let computerScore = 0;
	let scoreMessage = '';
	let currentRound = 0;
	let gameWinner = "It's a draw";

	function score() {
		let roundResult = playRound(playerSelection, computerPlay());
		if (roundResult.startsWith("You win")) {
			playerScore++;
		} else if (roundResult.startsWith("You lose")) {
			computerScore++;
		}
		currentRound++;
		scoreMessage = `--Round ${currentRound}--\n${roundResult}\nYou: ${playerScore} Computer: ${computerScore}\n`;
		console.log(scoreMessage);
	}
	score();
	score();
	score();
	score();
	score();

	if (playerScore > computerScore) {
		gameWinner = 'You are the winner!';
	} else if (computerScore > playerScore) {
		gameWinner = 'The computer wins the game!';
	}
	return gameWinner;
}

console.log(game());