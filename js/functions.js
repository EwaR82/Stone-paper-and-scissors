	//funkcja gracz kontra komputer
	function playerVsComputer(argPlayerMove) {

		const randomNumber = Math.floor(Math.random() * 3);
		computerMove = moveName[randomNumber];
		//sprawdzanie jaki pokzać obrazek dla ruchu komputera
		if (computerMove === 'kamień') {
			document.getElementById('img-stone-attack').hidden = false;
		}
		if (computerMove === 'papier') {
			document.getElementById('img-paper-attack').hidden = false;
		}
		if (computerMove === 'nożyce') {
			document.getElementById('img-scissors-attack').hidden = false;
		}
		// sprawdzanie kto wygrał
		whoWins = displayResult(computerMove, argPlayerMove);
		if (whoWins === 'Wygrałeś!!') {
			scorePlayer++;
			document.getElementById('player-score').innerHTML = 'Punkty Gracza : ' + scorePlayer;
			document.getElementById('player-score').style.color = "green";
		}
		if (whoWins === 'Przegrałeś!!') {
			scoreComputer++;
			document.getElementById('computer-score').innerHTML = 'Punkty Komputera : ' + scoreComputer;
			document.getElementById('computer-score').style.color = "green";
		}
		if (whoWins === 'Remis') {
			scorePlayer++;
			document.getElementById('player-score').innerHTML = 'Punkty Gracza : ' + scorePlayer;
			document.getElementById('player-score').style.color = "green";
			scoreComputer++;
			document.getElementById('computer-score').innerHTML = 'Punkty Komputera : ' + scoreComputer;
			document.getElementById('computer-score').style.color = "green";
		}
		numberRound++;
		//co ma się dziać po X czasie 
		setTimeout(function () {
			//zresetuj obrazy gracza i komputera
			document.getElementById('number-round').innerHTML = 'Runda : ' + numberRound;
			document.getElementById('btn-stone').hidden = false;
			document.getElementById('btn-paper').hidden = false;
			document.getElementById('btn-scissors').hidden = false;
			document.getElementById('img-stone-attack').hidden = true;
			document.getElementById('img-paper-attack').hidden = true;
			document.getElementById('img-scissors-attack').hidden = true;
			document.getElementById('img-vs').hidden = true;
			document.getElementById('player-score').style.color = "black";
			document.getElementById('computer-score').style.color = "black";
			//sprawdzanie czy koniec rund - max 5
			if (numberRound >= 6) {
				endGame()
			};
		}, 1500);
	}
	//funkcja Koniec Gry
	function endGame() {
		document.getElementById('number-round').innerHTML = 'Koniec Gry  !!!';
		//sprawdzanie kto wygrał GRĘ
		if (scorePlayer > scoreComputer) {
			document.getElementById('wins-wins').innerHTML = 'Wygrałeś   ;-) !!! Gratulacje !!!';
			document.getElementById('wins-wins').hidden = false;
		} else if (scorePlayer < scoreComputer) {
			document.getElementById('wins-wins').innerHTML = 'Przegrałeś   :-( !!!';
			document.getElementById('wins-wins').hidden = false;
		} else {
			document.getElementById('wins-wins').innerHTML = 'Remis !!!';
			document.getElementById('wins-wins').hidden = false;
		}
		//daje możliwość rozpoczęcia od nowa
		document.getElementById('btn-start').hidden = true;
		document.getElementById('btn-stone').hidden = true;
		document.getElementById('btn-paper').hidden = true;
		document.getElementById('btn-scissors').hidden = true;
		document.getElementById('btn-new-game').hidden = false;
	}

	//funkcja sprawdza kto wygrał w danej rundzie
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