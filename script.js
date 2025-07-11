function playGame() {
  const maxScore = 5;
  let humanScore = 0;
  let computerScore = 0;
  let round = 0;
  const choices = ['rock', 'paper', 'scissors'];

  while (true) {
    if (humanScore === maxScore || computerScore === maxScore) {
      console.log(`Final score: ${getScoreMessage()}`);
      return;
    }
    console.log(`Round ${++round}: ${getScoreMessage()}`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
  }

  function playRound(humanChoice, computerChoice) {
    const choiceDifference = humanChoice - computerChoice;
    const result = (choiceDifference + (choices.length - 1)) % choices.length;

    const humanChoiceMsg = `You chose ${choices[humanChoice]}.`;
    const computerChoiceMsg = `Computer chose ${choices[computerChoice]}.`;
    let winnerMsg;

    switch (result) {
      case 0:
        humanScore++;
        winnerMsg = 'You win!';
        break;
      case 1:
        computerScore++;
        winnerMsg = 'You lose!';
        break;
      case 2:
        winnerMsg = 'Tie!';
        break;
    }

    return `${humanChoiceMsg} ${computerChoiceMsg} ${winnerMsg}`;
  }

  function getHumanChoice() {
    while (true) {
      const choice = prompt('Select rock, paper or scissors.')?.toLowerCase();
      switch (choice) {
        case 'r': case 'rock'    : return 0;
        case 'p': case 'paper'   : return 1;
        case 's': case 'scissors': return 2;
        default: continue;
      }
    }
  }

  function getComputerChoice() {
    return Math.floor(Math.random() * 3);
  }

  function getScoreMessage() {
    return `You ${humanScore} : ${computerScore} Computer`;
  }
}

playGame();
