(() => {
  const MAX_SCORE = 5;
  const CHOICES = ['rock', 'paper', 'scissors'];

  let round = 0;
  let humanScore = 0;
  let computerScore = 0;

  const controls = document.querySelector('.controls');
  const display = {
    humanScore: document.querySelector('.humanScore'),
    computerScore: document.querySelector('.computerScore'),
    result: document.querySelector('.result'),
  };

  controls.addEventListener('click', gameLoop);

  function gameLoop(e) {
    if (e.target.tagName !== 'BUTTON') return;
    const humanChoice = Number(e.target.getAttribute('data-id'));
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    if (isWinnerDecided()) endGame();
  }

  function playRound(humanChoice, computerChoice) {
    const choiceDifference = humanChoice - computerChoice;
    const result = (choiceDifference + (CHOICES.length - 1)) % CHOICES.length;

    const humanChoiceMsg = `You chose ${CHOICES[humanChoice]}.`;
    const computerChoiceMsg = `Computer chose ${CHOICES[computerChoice]}.`;
    let resultMsg;

    switch (result) {
      case 0:
        display.humanScore.textContent = ++humanScore;
        resultMsg = 'You win!';
        break;
      case 1:
        display.computerScore.textContent = ++computerScore;
        resultMsg = 'You lose!';
        break;
      case 2:
        resultMsg = 'Tie!';
        break;
    }

    display.result.textContent = `Round ${++round}: ${humanChoiceMsg} ${computerChoiceMsg} ${resultMsg}`;
  }

  function getComputerChoice() {
    return Math.floor(Math.random() * 3);
  }

  function isWinnerDecided() {
    return humanScore === MAX_SCORE || computerScore === MAX_SCORE;
  }

  function endGame() {
    controls.removeEventListener('click', gameLoop);
    controls.innerHTML = '';
    const reloadBtn = document.createElement('button');
    reloadBtn.textContent = 'Try Again';
    reloadBtn.onclick = () => window.location.reload();
    controls.appendChild(reloadBtn);
  }
})();
