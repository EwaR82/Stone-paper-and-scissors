	function playerVsComputer(argPlayerMove) {

		document.getElementById('player-move').innerHTML = 'Gracz : ' + argPlayerMove;
		randomNumber = Math.floor(Math.random() * 3);
		computerMove = moveName[randomNumber];
		document.getElementById('computer-move').innerHTML = 'Komputer : ' + computerMove;
		whoWins = displayResult(computerMove, argPlayerMove);
		if (whoWins === 'Wygrałeś!!') {
			scorePlayer++;
			document.getElementById('player-score').innerHTML = 'Punkty Gracz : ' + scorePlayer;
		}
		if (whoWins === 'Przegrałeś!!') {
			scoreComputer++;
			document.getElementById('computer-score').innerHTML = 'Punkty Komputer : ' + scoreComputer;
		}
		if (whoWins === 'Remis') {
			scorePlayer++;
			document.getElementById('player-score').innerHTML = 'Punkty Gracz : ' + scorePlayer;
			scoreComputer++;
			document.getElementById('computer-score').innerHTML = 'Punkty Komputer : ' + scoreComputer;
		}
		numberRound++;
		setTimeout(function () {
			document.getElementById('number-round').innerHTML = 'Runda : ' + numberRound;
			document.getElementById('player-move').innerHTML = 'Gracz : Wybierz';
			document.getElementById('computer-move').innerHTML = 'Komputer : losuje';
			if (numberRound >= 6) {
				endGame()
			};
		}, 2000);
	}

	function endGame() {
		document.getElementById('number-round').innerHTML = 'Koniec Gry!!';
		if (scorePlayer > scoreComputer) {
			document.getElementById('player-move').innerHTML = 'Wygrałeś Grę!!!'
			document.getElementById('computer-move').hidden = true;
		} else if (scorePlayer < scoreComputer) {
			document.getElementById('computer-move').innerHTML = 'Przegrałeś Grę!!!'
			document.getElementById('player-move').hidden = true;
		} else {
			document.getElementById('player-move').innerHTML = 'Remis!!!'
			document.getElementById('computer-move').innerHTML = 'Remis!!!'
		}
		document.getElementById('btn-start').hidden = true;
		document.getElementById('btn-stone').hidden = true;
		document.getElementById('btn-paper').hidden = true;
		document.getElementById('btn-scissors').hidden = true;
		document.getElementById('btn-new-game').hidden = false;
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