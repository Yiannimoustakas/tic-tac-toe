console.log("JS LOADED!")


//Global variables
let count = 0;
let score = 0;
let p1 = "X";
let p2 = "O";

//This will switch players
const playerTurn = function () {
  count ++;
  if (count % 2 === 0) {
    return p2;
  } else {
    return p1;
  }
}


const clearBoard = function () {
  if (winner) {
    console.log("we got a winner");
    $(".square h1").html("");
    $("#winner").html("?")
  }
}

//Winning combinations. Should be refactored orrrrr can make this part of the code into an array
const winner = function () {

  let s0 = $(".top.L h1").html();
  let s1 = $(".top.M h1").html();
  let s2 = $(".top.R h1").html();
  let s3 = $(".mid.L h1").html();
  let s4 = $(".mid.M h1").html();
  let s5 = $(".mid.R h1").html();
  let s6 = $(".bottom.L h1").html();
  let s7 = $(".bottom.M h1").html();
  let s8 = $(".bottom.R h1").html();


if ((s0 === p1 && s1 === p1 && s2 === p1) ||
  (s3 === p1 && s4 === p1 && s5 === p1) ||
  (s6 === p1 && s7 === p1 && s8 === p1) ||
  (s0 === p1 && s3 === p1 && s6 === p1) ||
  (s1 === p1 && s4 === p1 && s7 === p1) ||
  (s2 === p1 && s5 === p1 && s8 === p1) ||
  (s0 === p1 && s4 === p1 && s8 === p1) ||
  (s2 === p1 && s4 === p1 && s6 === p1)) {
  score = parseInt($("#player1Score").html());
  score++;
  $("#player1Score").html(score);
  $("#winner").html("P1");
  setTimeout(clearBoard, 500);
}

if ((s0 === p2 && s1 === p2 && s2 === p2) ||
  (s3 === p2 && s4 === p2 && s5 === p2) ||
  (s6 === p2 && s7 === p2 && s8 === p2) ||
  (s0 === p2 && s3 === p2 && s6 === p2) ||
  (s1 === p2 && s4 === p2 && s7 === p2) ||
  (s2 === p2 && s5 === p2 && s8 === p2) ||
  (s0 === p2 && s4 === p2 && s8 === p2) ||
  (s2 === p2 && s4 === p2 && s6 === p2)) {
  score = parseInt($("#player2Score").html());
  score ++;
  $("#player2Score").html(score);
  $("#winner").html("P2");
  setTimeout(clearBoard, 500);
}

};

$(document).ready(function(){

//This is the new refactored code using 'this'..
  $("div.square").on("click", function () {
    let $currentSquare = $(this);
    if ($currentSquare.find("h1").html()!=="") {
      console.log("invalid click.");
      return;
    }
    $currentSquare.find("h1").html(playerTurn());
    winner();
  });

  //This is going to reset the game board
  $("#reset button").on("click", function () {
    $(".gameBoard").html("");
    $("#winner").html("?");
    playerTurn(0);
  });

  //This is going to reset the player scores
  $("#reset2 button").on("click", function () {
    $("#player2Score").html("0");
    $("#player1Score").html("0");
    playerTurn(0);
  });
});
