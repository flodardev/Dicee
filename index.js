function randomNumber() {
	var ranNum = Math.floor(Math.random() * 6) + 1;
	return ranNum;
}

function randomDice() {
	var randomNumber1 = randomNumber();
	var randomNumber2 = randomNumber();
	document
		.querySelector(".img1")
		.setAttribute("src", "images/dice" + randomNumber1 + ".png");
	document
		.querySelector(".img2")
		.setAttribute("src", "images/dice" + randomNumber2 + ".png");

	if (randomNumber1 > randomNumber2) {
		document.querySelector("h1").textContent = "🚩 Player 1 wins!";
	} else if (randomNumber2 > randomNumber1) {
		document.querySelector("h1").textContent = "Player 2 wins! 🚩";
	} else {
		document.querySelector("h1").textContent = "Draw!";
	}
}

randomDice();
