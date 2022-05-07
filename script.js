let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  if (humanGuess > 10) {
    window.alert("What are you doing buddy?")
  }
  const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);
  if (humanDifference <= computerDifference) {
    return true;
  } else {
    return false;
  }
}

  const updateScore = winner => {
      if (winner === 'human') {
          humanScore ++;
      } else {
          computerScore ++;
      }
  }

const advanceRound = () => {
  currentRoundNumber++;
}