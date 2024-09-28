document.addEventListener("DOMContentLoaded", function () {
  let playerChoice = null;
  let currentPlayer = "X";
  var playerSelectX = document.getElementById("x");
  var playerSelectY = document.getElementById("o");
  var playerSelect = document.getElementById("player-select");
  var status = document.getElementById("status");
  var board = document.getElementById("board");
  var squares = document.getElementsByClassName("square");
  for (let i = 0; i < squares.length; i++) {
    squareEventListenerSetup(squares[i].id);
  }
  playerSelectX.addEventListener("click", function () {
    playerSelection(playerSelect.value);
  });
  playerSelectY.addEventListener("click", function () {
    playerSelection(playerSelect.value);
  });
  function playerSelection(selection) {
    if (selection === "x") {
      playerChoice = "X";
    } else {
      playerChoice = "O";
    }
    playerSelect.style.display = "none";
  }
  function squareEventListenerSetup(id) {
    var sq = document.getElementById(id);
    sq.addEventListener("click", function () {
      if (playerChoice != null && sq.textContent === "") {
        sq.textContent = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        status.textContent = currentPlayer + "'s turn";
      }
    });
  }
});
