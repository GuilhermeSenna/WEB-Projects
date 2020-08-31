var pl1 = Math.floor(Math.random() * 6) + 1;
var pl2 = Math.floor(Math.random() * 6) + 1;

document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + pl1 + ".png");

document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + pl2 + ".png");

if (pl1 > pl2) {
  document.querySelector("h1").innerHTML =
    "<i class='fas fa-flag'></i> Player1 Wins";
} else if (pl2 > pl1) {
  document.querySelector("h1").innerHTML =
    "Player2 Wins <i class='fas fa-flag'></i>";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
