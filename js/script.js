let scorePlayer = 0;
let scoreComputer = 0;
let moveName = ['kamień', 'papier', 'nożyce'];
let playerMove;
let computerMove;
let randomNumber;
let numberRound = 1;

document.getElementById('btn-start').addEventListener('click', function () {
  document.getElementById('number-round').hidden = false;
  document.getElementById('btn-start').hidden = true;
  document.getElementById('btn-stone').hidden = false;
  document.getElementById('btn-paper').hidden = false;
  document.getElementById('btn-scissors').hidden = false;
  document.getElementById('player-move').hidden = false;
  document.getElementById('computer-move').hidden = false;
  document.getElementById('player-score').hidden = false;
  document.getElementById('computer-score').hidden = false;
});

document.getElementById('btn-stone').addEventListener('click', function () {
  if (numberRound <= 5) {
    playerMove = 'kamień';
    playerVsComputer(playerMove);
  }
});
document.getElementById('btn-paper').addEventListener('click', function () {
  if (numberRound <= 5) {
    playerMove = 'papier';
    playerVsComputer(playerMove);
  }
});
document.getElementById('btn-scissors').addEventListener('click', function () {
  if (numberRound <= 5) {
    playerMove = 'nożyce';
    playerVsComputer(playerMove);
  }
});

document.getElementById('btn-new-game').addEventListener('click', function () {
  scorePlayer = 0;
  scoreComputer = 0;
  numberRound = 1;
  document.getElementById('number-round').hidden = false;
  document.getElementById('btn-start').hidden = true;
  document.getElementById('btn-stone').hidden = false;
  document.getElementById('btn-paper').hidden = false;
  document.getElementById('btn-scissors').hidden = false;
  document.getElementById('player-move').hidden = false;
  document.getElementById('computer-move').hidden = false;
  document.getElementById('player-score').hidden = false;
  document.getElementById('computer-score').hidden = false;
  document.getElementById('btn-new-game').hidden = true;
  document.getElementById('player-score').innerHTML = 'Punkty Gracz : 0';
  document.getElementById('computer-score').innerHTML = 'Punkty Komputer : 0';
  document.getElementById('number-round').innerHTML = 'Runda : 1';
  document.getElementById('player-move').innerHTML = 'Gracz : Wybierz';
  document.getElementById('computer-move').innerHTML = 'Komputer : losuje';
});