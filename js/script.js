//var
let scorePlayer = 0;
let scoreComputer = 0;
const moveName = ['kamień', 'papier', 'nożyce'];
let playerMove;
let computerMove;
let numberRound = 1;

// akacja dla START
document.getElementById('btn-start').addEventListener('click', function () {
  document.getElementById('number-round').hidden = false;
  document.getElementById('welcome-game').hidden = true;
  document.getElementById('btn-start').hidden = true;
  document.getElementById('btn-start').style.display = 'none';
  document.getElementById('btn-stone').hidden = false;
  document.getElementById('btn-paper').hidden = false;
  document.getElementById('btn-scissors').hidden = false;
  document.getElementById('wins-wins').hidden = true;
  document.getElementById('player-score').hidden = false;
  document.getElementById('computer-score').hidden = false;
  document.getElementById('img-all').hidden = true;
  document.getElementById('img-vs').hidden = true;
});

//akcja dla KAMIEŃ
document.getElementById('btn-stone').addEventListener('click', function () {
  if (numberRound <= 5) {
    document.getElementById('btn-paper').hidden = true;
    document.getElementById('btn-scissors').hidden = true;
    document.getElementById('img-vs').hidden = false;
    playerMove = 'kamień';
    playerVsComputer(playerMove);
  }
});
//akcja dla PAPIER
document.getElementById('btn-paper').addEventListener('click', function () {
  if (numberRound <= 5) {
    document.getElementById('btn-stone').hidden = true;
    document.getElementById('btn-scissors').hidden = true;
    document.getElementById('img-vs').hidden = false;
    playerMove = 'papier';
    playerVsComputer(playerMove);
  }
});
//akcja dla NOŻYCE
document.getElementById('btn-scissors').addEventListener('click', function () {
  if (numberRound <= 5) {
    document.getElementById('btn-stone').hidden = true;
    document.getElementById('btn-paper').hidden = true;
    document.getElementById('img-vs').hidden = false;
    playerMove = 'nożyce';
    playerVsComputer(playerMove);
  }
});
//akcja dla nowa GRA
document.getElementById('btn-new-game').addEventListener('click', function () {
  scorePlayer = 0;
  scoreComputer = 0;
  numberRound = 1;
  document.getElementById('number-round').hidden = false;
  document.getElementById('btn-start').hidden = true;
  document.getElementById('btn-stone').hidden = false;
  document.getElementById('btn-paper').hidden = false;
  document.getElementById('btn-scissors').hidden = false;
  document.getElementById('wins-wins').hidden = true;
  document.getElementById('player-score').hidden = false;
  document.getElementById('computer-score').hidden = false;
  document.getElementById('btn-new-game').hidden = true;
  document.getElementById('player-score').innerHTML = 'Punkty Gracza : 0';
  document.getElementById('computer-score').innerHTML = 'Punkty Komputera : 0';
  document.getElementById('number-round').innerHTML = 'Runda : 1';
  document.getElementById('wins-wins').innerHTML = '-';
});