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


//Winning combinations. Should be refactored orrrrr can make this part of the code into an array
const winner = function () {
let gameRunning = true;
if (gameRunning === false) {
  console.log("invalid Click!");
  return;
}
if (
  ($("#topR h1").html() === p1 && $("#topM h1").html() === p1 && $("#topL h1").html() === p1) ||
  ($("#midR h1").html() === p1 && $("#midM h1").html() === p1 && $("#midL h1").html() === p1) ||
  ($("#bottomR h1").html() === p1 && $("#bottomM h1").html() === p1 && $("#bottomL h1").html() === p1) ||
  ($("#topR h1").html() === p1 && $("#midR h1").html() === p1 && $("#bottomR h1").html() === p1) ||
  ($("#topM h1").html() === p1 && $("#midM h1").html() === p1 && $("#bottomM h1").html() === p1) ||
  ($("#topL h1").html() === p1 && $("#midL h1").html() === p1 && $("#bottomL h1").html() === p1) ||
  ($("#topR h1").html() === p1 && $("#midM h1").html() === p1 && $("#bottomL h1").html() === p1) ||
  ($("#topL h1").html() === p1 && $("#midM h1").html() === p1 && $("#bottomR h1").html() === p1)
) {
  score = parseInt($("#player1Score").html());
  score++;
  $("#player1Score").html(score);
  $("#winner").html("P1");
  gameRunning = false;
}

if (
  ($("#topR h1").html() === p2 && $("#topM h1").html() === p2 && $("#topL h1").html() === p2) ||
  ($("#midR h1").html() === p2 && $("#midM h1").html() === p2 && $("#midL h1").html() === p2) ||
  ($("#bottomR h1").html() === p2 && $("#bottomM h1").html() === p2 && $("#bottomL h1").html() === p2) ||
  ($("#topR h1").html() === p2 && $("#midR h1").html() === p2 && $("#bottomR h1").html() === p2) ||
  ($("#topM h1").html() === p2 && $("#midM h1").html() === p2 && $("#bottomM h1").html() === p2) ||
  ($("#topL h1").html() === p2 && $("#midL h1").html() === p2 && $("#bottomL h1").html() === p2) ||
  ($("#topR h1").html() === p2 && $("#midM h1").html() === p2 && $("#bottomL h1").html() === p2) ||
  ($("#topL h1").html() === p2 && $("#midM h1").html() === p2 && $("#bottomR h1").html() === p2)
) {
  score = parseInt($("#player2Score").html());
  score ++;
  $("#player2Score").html(score);
  $("#winner").html("P2");
}

};

$(document).ready(function(){

  //This is where the board will interact with the user. I am checking for a winner in esch set. Needs to be refactored...
  $('div#topL').on("click", function(){
    let $text = $('div#topL h1')
    if ($text.text()!=="") {
      console.log("invalid click.");
      return;
    }
    $("#topL h1").html(playerTurn());
    winner();
  });
  $('div#topM').on("click", function(){
    let $text = $('div#topM h1')
    if ($text.text()!=="") {
      console.log("invalid click.");
      return;
    }
    // $(this).css("backgroundColor", "black");
    $("#topM h1").html(playerTurn());
    winner();
  });
  $('div#topR').on("click", function(){
    let $text = $('div#topR h1')
    if ($text.text()!=="") {
      console.log("invalid click.");
      return;
    }
    $("#topR h1").html(playerTurn());
    winner();
  });
  $('div#midL').on("click", function(){
    let $text = $('div#midL h1')
    if ($text.text()!=="") {
      console.log("invalid click.");
      return;
    }
    $("#midL h1").html(playerTurn());
    winner();
  });
  $('div#midM').on("click", function(){
    let $text = $('div#midM h1')
    if ($text.text()!=="") {
      console.log("invalid click.");
      return;
    }
    $("#midM h1").html(playerTurn());
    winner();
  });
  $('div#midR').on("click", function(){
    let $text = $('div#midR h1')
    if ($text.text()!=="") {
      console.log("invalid click.");
      return;
    }
    $("#midR h1").html(playerTurn());
    winner();
  });
  $('div#bottomL').on("click", function(){
    let $text = $('div#bottomL h1')
    if ($text.text()!=="") {
      console.log("invalid click.");
      return;
    }
    $("#bottomL h1").html(playerTurn());
    winner();
  });
  $('div#bottomM').on("click", function(){
    let $text = $('div#bottomM h1')
    if ($text.text()!=="") {
      console.log("invalid click.");
      return;
    }
    $("#bottomM h1").html(playerTurn());
    winner();
  });
  $('div#bottomR').on("click", function(){
    let $text = $('div#bottomR h1')
    if ($text.text()!=="") {
      console.log("invalid click.");
      return;
    }
    $("#bottomR h1").html(playerTurn());
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
