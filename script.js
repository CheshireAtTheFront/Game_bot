"use strict";

let randomNum = 1 + Math.floor(Math.random() * 100);

function randomSearchNumbers (n) { 

	function checkingNumber() {
		let quessNumber = +prompt("Угадай число от 1 до 100"); 
		let _quessNumber = Math.floor(quessNumber);
		
		if (_quessNumber != 0) {
			if (!isNaN(_quessNumber)) {
				
				if (_quessNumber > n) {
					alert("Загаданное число меньше");
					checkingNumber();
					
				} else if (_quessNumber < n && _quessNumber != 0) {
					alert("Загаданное число больше");
					checkingNumber();
					
				} else if (_quessNumber === n) {
					alert("Поздравляю вы угадали");
				}

			} else {
				alert("Нужно ввести число");
				checkingNumber();
			}

		} else {
			alert("Игра окончена");
			return;
		}
	}
	
	checkingNumber();
}

randomSearchNumbers(randomNum);