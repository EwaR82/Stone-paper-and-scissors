function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}


function getMoveName(argMoveId) {
	if (argMoveId == 1) {
		return 'kamień';
	} else if (argMoveId == 2) {
		return 'papier';
	} else if (argMoveId == 3) {
		return 'nożyce';
	} else {
		return 'nieznany ruch';
	}
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
	} else if ((argComputerMove == 'nieznany ruch' || argPlayerMove == 'nieznany ruch')) {
		return 'Zły ruch!!!';
	} else {
		return 'Tym razem Remis';
	}
}