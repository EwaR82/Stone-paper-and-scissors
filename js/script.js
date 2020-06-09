//var
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
  numberRoundId.hidden = false;
  welcomeGameId.hidden = true;
  btnStartId.hidden = true;
  btnStoneId.hidden = false;
  btnPaperId.hidden = false;
  btnScissorsId.hidden = false;
  winsWinsId.hidden = true;
  playerScoreId.hidden = false;
  computerScoreId.hidden = false;
  imgAllId.hidden = true;
  imgVsId.hidden = true;
});

//akcja dla KAMIEŃ
btnStoneId.addEventListener('click', function () {
  if (numberRound <= 5) {
    btnPaperId.hidden = true;
    btnScissorsId.hidden = true;
    imgVsId.hidden = false;
    const playerMove = 'kamień';
    playerVsComputer(playerMove);
  }
});
//akcja dla PAPIER
btnPaperId.addEventListener('click', function () {
  if (numberRound <= 5) {
    btnStoneId.hidden = true;
    btnScissorsId.hidden = true;
    imgVsId.hidden = false;
    const playerMove = 'papier';
    playerVsComputer(playerMove);
  }
});
//akcja dla NOŻYCE
btnScissorsId.addEventListener('click', function () {
  if (numberRound <= 5) {
    btnStoneId.hidden = true;
    btnPaperId.hidden = true;
    imgVsId.hidden = false;
    const playerMove = 'nożyce';
    playerVsComputer(playerMove);
  }
});
//akcja dla nowa GRA
btnNewGameId.addEventListener('click', function () {
  scorePlayer = 0;
  scoreComputer = 0;
  numberRound = 1;
  numberRoundId.hidden = false;
  numberRoundId.innerHTML = 'Runda : 1';
  btnStartId.hidden = true;
  btnStoneId.hidden = false;
  btnPaperId.hidden = false;
  btnScissorsId.hidden = false;
  winsWinsId.hidden = true;
  winsWinsId.innerHTML = '-';
  playerScoreId.hidden = false;
  playerScoreId.innerHTML = 'Punkty Gracza : 0';
  computerScoreId.hidden = false;
  computerScoreId.innerHTML = 'Punkty Komputera : 0';
  btnNewGameId.hidden = true;

});