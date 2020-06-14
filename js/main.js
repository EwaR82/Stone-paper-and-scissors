let scorePlayer = 0;
let scoreComputer = 0;
let numberRound = 1;
const moveName = ['kamień', 'papier', 'nożyce'];
const numberRoundId = document.getElementById('number-round');
const btnStartId = document.getElementById('btn-start');
const btnStoneId = document.getElementById('btn-stone');
const btnPaperId = document.getElementById('btn-paper');
const btnScissorsId = document.getElementById('btn-scissors');
const winsWinsId = document.getElementById('wins-wins');
const playerScoreId = document.getElementById('player-score');
const computerScoreId = document.getElementById('computer-score');
const btnNewGameId = document.getElementById('btn-new-game');
const welcomeGameId = document.getElementById('welcome-game');
const imgAllId = document.getElementById('img-all');
const imgVsId = document.getElementById('img-vs');
const imgStoneAttackId = document.getElementById('img-stone-attack');
const imgPaperAttackId = document.getElementById('img-paper-attack');
const imgScissorsAttackId = document.getElementById('img-scissors-attack');

// akacja dla START
btnStartId.addEventListener('click', function () {
  resetGame();
});

//akcja dla KAMIEŃ
btnStoneId.addEventListener('click', function () {
  playGame('kamień');
});
//akcja dla PAPIER
btnPaperId.addEventListener('click', function () {
  playGame('papier');
});
//akcja dla NOŻYCE
btnScissorsId.addEventListener('click', function () {
  playGame('nożyce');
});
//akcja dla nowa GRA
btnNewGameId.addEventListener('click', function () {
  resetGame();
});

function resetGame() {
  scorePlayer = 0;
  scoreComputer = 0;
  numberRound = 1;
  numberRoundId.classList.remove('hide');
  btnStartId.classList.add('hide');
  btnNewGameId.classList.add('hide');
  welcomeGameId.classList.add('hide');
  imgAllId.classList.add('hide');
  winsWinsId.classList.add('hide');
  winsWinsId.innerHTML = '-';
  playerScoreId.classList.remove('hide');
  playerScoreId.innerHTML = 'Punkty Gracza : 0';
  computerScoreId.classList.remove('hide');
  computerScoreId.innerHTML = 'Punkty Komputera : 0';
  resetRound();
}

function playGame(argPlayerMove) {
  const randomNumber = Math.floor(Math.random() * 3);
  const computerMove = moveName[randomNumber];
  showComputerImage(computerMove);
  imgVsId.classList.toggle('hide');
  showPlayerImage(argPlayerMove);
  const whoWins = displayResult(computerMove, argPlayerMove);
  if (whoWins === 'Wygrałeś!!') {
    addPlayerPoint();
  } else if (whoWins === 'Przegrałeś!!') {
    addCompPoint();
  } else {
    addPlayerPoint();
    addCompPoint();
  }
  numberRound++;
  setTimeout(function () {
    resetRound();
    if (numberRound >= 6) {
      endGame()
    };
  }, 1500);
}

function showComputerImage(computerMove) {
  imgScissorsAttackId.classList.add('hide');
  imgStoneAttackId.classList.add('hide');
  imgPaperAttackId.classList.add('hide');
  if (computerMove === 'nożyce') {
    imgScissorsAttackId.classList.remove('hide');
  } else if (computerMove === 'kamień') {
    imgStoneAttackId.classList.remove('hide');
  } else if (computerMove === 'papier') {
    imgPaperAttackId.classList.remove('hide');
  }
}

function showPlayerImage(playerMove) {
  if (playerMove === 'nożyce') {
    btnStoneId.classList.add('hide');
    btnPaperId.classList.add('hide');
    btnScissorsId.classList.remove('hide');
  } else if (playerMove === 'kamień') {
    btnStoneId.classList.remove('hide');
    btnPaperId.classList.add('hide');
    btnScissorsId.classList.add('hide');
  } else if (playerMove === 'papier') {
    btnStoneId.classList.add('hide');
    btnPaperId.classList.remove('hide');
    btnScissorsId.classList.add('hide');
  }
}

function resetRound() {
  numberRoundId.innerHTML = 'Runda : ' + numberRound;
  btnStoneId.classList.remove('hide');
  btnPaperId.classList.remove('hide');
  btnScissorsId.classList.remove('hide');
  imgVsId.classList.add('hide');
  imgStoneAttackId.classList.add('hide');
  imgPaperAttackId.classList.add('hide');
  imgScissorsAttackId.classList.add('hide');
  playerScoreId.classList.remove('round-winner');
  computerScoreId.classList.remove('round-winner');
}

function addPlayerPoint() {
  scorePlayer++;
  playerScoreId.innerHTML = 'Punkty Gracza : ' + scorePlayer;
  playerScoreId.classList.add('round-winner');
}

function addCompPoint() {
  scoreComputer++;
  computerScoreId.innerHTML = 'Punkty Komputera : ' + scoreComputer;
  computerScoreId.classList.add('round-winner');
}

function endGame() {
  numberRoundId.innerHTML = 'Koniec Gry  !!!';
  if (scorePlayer > scoreComputer) {
    winsWinsId.innerHTML = 'Wygrałeś   ;-) !!! Gratulacje !!!';
    winsWinsId.classList.remove('hide');
  } else if (scorePlayer < scoreComputer) {
    winsWinsId.innerHTML = 'Przegrałeś   :-( !!!';
    winsWinsId.classList.remove('hide');
  } else {
    winsWinsId.innerHTML = 'Remis !!!';
    winsWinsId.classList.remove('hide');
  }
  btnStartId.classList.add('hide');
  btnStoneId.classList.add('hide');
  btnPaperId.classList.add('hide');
  btnScissorsId.classList.add('hide');
  btnNewGameId.classList.remove('hide');
}

function displayResult(argComputerMove, argPlayerMove) {
  if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
    (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
    (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
    return 'Wygrałeś!!';
  } else if ((argComputerMove == 'nożyce' && argPlayerMove == 'kamień') ||
    (argComputerMove == 'nożyce' && argPlayerMove == 'papier') ||
    (argComputerMove == 'kamień' && argPlayerMove == 'nożyce')) {
    return 'Przegrałeś!!';
  } else {
    return 'Remis';
  }
}