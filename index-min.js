function randomNumber(){return Math.floor(6*Math.random())+1}function randomDice(){var e=randomNumber(),r=randomNumber();document.querySelector(".img1").setAttribute("src","images/dice"+e+".png"),document.querySelector(".img2").setAttribute("src","images/dice"+r+".png"),document.querySelector("h1").textContent=e>r?"🚩 Player 1 wins!":r>e?"Player 2 wins! 🚩":"Draw!"}randomDice();