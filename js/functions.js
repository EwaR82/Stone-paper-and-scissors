	//funkcja gracz kontra komputer
	function playerVsComputer(argPlayerMove) {
		//  losowanie ruchu komputera
		const randomNumber = Math.floor(Math.random() * 3);
		const computerMove = moveName[randomNumber];
		//sprawdzanie jaki pokazać obrazek dla ruchu komputera
		if (computerMove === 'kamień') {
			imgStoneAttackId.hidden = false;
		}
		if (computerMove === 'papier') {
			imgPaperAttackId.hidden = false;
		}
		if (computerMove === 'nożyce') {
			imgScissorsAttackId.hidden = false;
		}
		// sprawdza kto wygrał i daje punkt
		whoWins = displayResult(computerMove, argPlayerMove);
		if (whoWins === 'Wygrałeś!!') {
			scorePlayer++;
			playerScoreId.innerHTML = 'Punkty Gracza : ' + scorePlayer;
			playerScoreId.style.color = "green";
		}
		if (whoWins === 'Przegrałeś!!') {
			scoreComputer++;
			computerScoreId.innerHTML = 'Punkty Komputera : ' + scoreComputer;
			computerScoreId.style.color = "green";
		}
		if (whoWins === 'Remis') {
			scorePlayer++;
			playerScoreId.innerHTML = 'Punkty Gracza : ' + scorePlayer;
			playerScoreId.style.color = "green";
			scoreComputer++;
			computerScoreId.innerHTML = 'Punkty Komputera : ' + scoreComputer;
			computerScoreId.style.color = "green";
		}
		numberRound++;
		//co ma się dziać po X czasie
		setTimeout(function () {
			//zresetuj obrazy gracza i komputera
			numberRoundId.innerHTML = 'Runda : ' + numberRound;
			btnStoneId.hidden = false;
			btnPaperId.hidden = false;
			btnScissorsId.hidden = false;
			imgStoneAttackId.hidden = true;
			imgPaperAttackId.hidden = true;
			imgScissorsAttackId.hidden = true;
			imgVsId.hidden = true;
			playerScoreId.style.color = "black";
			computerScoreId.style.color = "black";
			//sprawdzanie czy koniec rund - max 5
			if (numberRound >= 6) {
				endGame()
			};
		}, 1500);
	}
	//funkcja Koniec Gry
	function endGame() {
		numberRoundId.innerHTML = 'Koniec Gry  !!!';
		//sprawdza kto wygrał GRĘ
		if (scorePlayer > scoreComputer) {
			winsWinsId.innerHTML = 'Wygrałeś   ;-) !!! Gratulacje !!!';
			winsWinsId.hidden = false;
		} else if (scorePlayer < scoreComputer) {
			winsWinsId.innerHTML = 'Przegrałeś   :-( !!!';
			winsWinsId.hidden = false;
		} else {
			winsWinsId.innerHTML = 'Remis !!!';
			winsWinsId.hidden = false;
		}
		//daje możliwość rozpoczęcia od nowa
		btnStartId.hidden = true;
		btnStoneId.hidden = true;
		btnPaperId.hidden = true;
		btnScissorsId.hidden = true;
		btnNewGameId.hidden = false;
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