//
//          Variables
//

var buttonColors = ["red", "blue", "green", "yellow"];

var gamepattern = [];

var userClickedPattern = [];

var level = 0;

//
//          Functions
//

function nextSequence() {
  userClickedPattern = [];
  randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamepattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

  level++;
  $("h1").text("level " + level);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function playAnimation(name) {
  $("#" + name)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
}

function youFailed() {
  // Leveis zerados
  level = 0;
  gamepattern = [];

  $("h1").text("Game Over, Press A to restart.");
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);

  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
}

function checkClicked(currentLevel) {
  // Primeiro caso, Usuário clica em algum sem ter iniciado o jogo
  if (gamepattern.length === 0) {
    youFailed();
  }

  if (gamepattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("sucess");
    if (gamepattern.length === userClickedPattern.length) {
      setTimeout(function () {
        if (level !== 0) nextSequence();
      }, 1000);
    }
  } else {
    youFailed();
  }
}

//
//          User Interaction
//

$(document).keydown(function (event) {
  if (event.key === "a" && gamepattern.length === 0) {
    nextSequence();
  }
});

$(".btn").click(function (event) {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  checkClicked(userClickedPattern.length - 1);

  playSound(userChosenColour);
  playAnimation(userChosenColour);
});
