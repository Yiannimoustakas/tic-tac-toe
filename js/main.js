
//Global variables
let score = 0;
let p1 = "X";
let p2 = "O";
let currentPlayer = p2;

let board = [null, null, null, null, null, null, null, null, null];

console.log(board);

//This will switch players
const playerSwitch = function () {

  if (currentPlayer === p2) {
    currentPlayer = p1;
    $(".arrow2 img").show();
    $(".arrow1 img").hide();
  } else {
    currentPlayer = p2;
    $(".arrow1 img").show();
    $(".arrow2 img").hide();
  }
};

const clearBoard = function () {
  $(".square h1").html("");
  $("#winner").html("?")
  board = [null, null, null, null, null, null, null, null, null];
}

const winner = function(player) {
  if (player === "X") {
    score = parseInt($("#player1Score").html());
    score++;
    $("#player1Score").html(score);
    $("#winner").html("P1");
  } else {
    score = parseInt($("#player2Score").html());
    score++;
    $("#player2Score").html(score);
    $("#winner").html("P2");
  }
  setTimeout(clearBoard, 1000);
};


//Winning combinations. Should be refactored orrrrr can make this part of the code into an array
const checkWinner = function (player) {

  if ((board[0] === player && board[1] === player && board[2] === player) ||
    (board[3] === player && board[4] === player && board[5] === player) ||
    (board[6] === player && board[7] === player && board[8] === player) ||
    (board[0] === player && board[3] === player && board[6] === player) ||
    (board[1] === player && board[4] === player && board[7] === player) ||
    (board[2] === player && board[5] === player && board[8] === player) ||
    (board[0] === player && board[4] === player && board[8] === player) ||
    (board[2] === player && board[4] === player && board[6] === player)) {
      console.log("we got a winner");
      console.log(player)
      winner(player);
  }
  if (board.join("").length === 9) {
    console.log("draw");
    $("#winner").html("DRAW");
    setTimeout(clearBoard, 1000);
  }
};

$(document).ready(function(){

  //Starting player
  $(".arrow1 img").show();
  $(".arrow2 img").hide();

  //This is the new refactored code using 'this'..
  $("div.square").on("click", function () {
    playerSwitch();
    let $currentSquare = $(this);
    let $logicSquare = board[this.id]
    if ($currentSquare.find("h1").html()!=="") {
      console.log("invalid click.");
      return;
    }
    const boardIndex = parseInt( this.id );
    if ( currentPlayer === p1 ) {
      board[ boardIndex ] = p1;
    } else {
      board[ boardIndex ] = p2;
    }
    $currentSquare.find("h1").html(currentPlayer);
    checkWinner(currentPlayer);
  });

  //This is going to reset the game board
  $("#reset button").on("click", function () {
    clearBoard();
    playerSwitch();
  });

  //This is going to reset the player scores
  $("#reset2 button").on("click", function () {
    $("#player2Score").html("0");
    $("#player1Score").html("0");
    clearBoard();
    playerSwitch();
  });

});
