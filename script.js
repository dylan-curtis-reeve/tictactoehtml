document.addEventListener("DOMContentLoaded", function () {
  let playerChoice = null;
  let currentPlayer = null;
  let gameOver = false;
  var playerSelectX = document.getElementById("x");
  var playerSelectY = document.getElementById("o");
  var playerSelect = document.getElementById("player-select");
  var status = document.getElementById("status");
  var reset = document.getElementById("reset");
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
      currentPlayer = "X";
    } else {
      playerChoice = "O";
      currentPlayer = "O";
    }
    playerSelect.style.display = "none";
  }

  reset.addEventListener("click", function () {
    for (let i = 0; i < squares.length; i++) {
      squares[i].textContent = "";
    }
    playerChoice = null;
    currentPlayer = "X";
    gameOver = false;
    status.textContent = "X's turn";
    playerSelect.style.display = "block";
  });

  function squareEventListenerSetup(id) {
    var sq = document.getElementById(id);
    sq.addEventListener("click", function () {
      if (playerChoice != null && sq.textContent === "" && !gameOver) {
        sq.textContent = currentPlayer;
        if (checkScore()) {
          status.textContent = currentPlayer + " wins!";
          gameOver = true;
          return;
        }
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        status.textContent = currentPlayer + "'s turn";
      }
    });
  }
  function checkScore() {
    if (validateScore(squares[0], squares[1], squares[2])) {
      return true;
    } else if (validateScore(squares[3], squares[4], squares[5])) {
      return true;
    } else if (validateScore(squares[6], squares[7], squares[8])) {
      return true;
    } else if (validateScore(squares[0], squares[3], squares[6])) {
      return true;
    } else if (validateScore(squares[1], squares[4], squares[7])) {
      return true;
    } else if (validateScore(squares[2], squares[5], squares[8])) {
      return true;
    } else if (validateScore(squares[0], squares[4], squares[8])) {
      return true;
    } else if (validateScore(squares[2], squares[4], squares[6])) {
      return true;
    } else {
      return false;
    }
  }

  function validateScore(box1, box2, box3) {
    if (
      box1.textContent === box2.textContent &&
      box2.textContent === box3.textContent &&
      box1.textContent !== ""
    ) {
      return true;
    } else {
      return false;
    }
  }
});
