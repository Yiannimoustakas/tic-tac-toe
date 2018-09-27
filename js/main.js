
//Global variables
let score = 0;
let p1 = "X";
let p2 = "O";
let currentPlayer = p2;
let board = [null, null, null, null, null, null, null, null, null];

//This will switch players. Called on every play of the game, and will switch the img display to alert which players turn it is.
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

// $("#themeBoard").hide(); //buggy add on...

//clearBoard will clear the board array to begin a new game along with clearing any css stylings made in the winner function.
const clearBoard = function () {
  $(".square h1").html("");
  $("#winner").html("?")
  $("#winner").css("color", "red");
  $(".winnerHeader").css("color", "black");
  $("#whoWillWinDiv").css("backgroundColor", "orange")
  board = [null, null, null, null, null, null, null, null, null];
}

//This function will be called if checkWinner conditions are true... An if else condition. if X wins or if O wins. It will update the score of the game in the logic and window. It will display the winner with some new css styling. after which the clearBoard function will be called with a set timeout of 1 second...
const winner = function(player) {
  if (player === "X") {
    score = parseInt($("#player1Score").html());
    score++;
    $("#player1Score").html(score);
    $("#winner").html("P1");
    $("#winner").css("color", "white");
    $(".winnerHeader").css("color", "white");
    $("#whoWillWinDiv").css("backgroundColor", "red");
  } else {
    score = parseInt($("#player2Score").html());
    score++;
    $("#player2Score").html(score);
    $("#winner").html("P2");
    $("#winner").css("color", "white");
    $(".winnerHeader").css("color", "white");
    $("#whoWillWinDiv").css("backgroundColor", "red")
  }
  setTimeout(clearBoard, 1000);
};


//Winning combinations. This is called everytime after a player makes a move
const checkWinner = function (player) {
  let check = false;
  if ((board[0] === player && board[1] === player && board[2] === player) ||
    (board[3] === player && board[4] === player && board[5] === player) ||
    (board[6] === player && board[7] === player && board[8] === player) ||
    (board[0] === player && board[3] === player && board[6] === player) ||
    (board[1] === player && board[4] === player && board[7] === player) ||
    (board[2] === player && board[5] === player && board[8] === player) ||
    (board[0] === player && board[4] === player && board[8] === player) ||
    (board[2] === player && board[4] === player && board[6] === player)) {
      //if any of these conditions are true we call the winner function passing through the player name
      check = true;
      winner(player);
  }
  //if all 9 squares in the board have been played and there's no winner this will be true and will result in a draw ebing displayed in the window and the clearBoard function being called with a 1 second timeout...
  if ((board.join("").length === 9) && check === false) {
    console.log("draw");
    $("#winner").html("DRAW");
    setTimeout(clearBoard, 1000);
  }
};

newCount = 0
const newImg = function() {
  newCount += 1;
  if (newCount === 1) {
    let $newImg = $("<img>").attr("src", "images/monostar.png");
    $(".arrow1").append($newImg);
  } else {
    return;
  }
}

const AI = function() {
 console.log("AI IS RUNNING")
//   	// AI function will straight away call the tactical function. This will read the prescribed winning conditions and if the square is available it will play it. Otherwise it will just play a random square finding an integer between 1-9.

	// Function for when O plays randomly
		for (var i = 0; i < 10; i++) {
		// Loop to find a valid play

			var randomNumber = Math.floor((Math.random() * 9) + 1);
			var randomSquare = board[randomNumber];

			if (board[i] === null) {

				board[randomNumber] = "O"
				checkWinner();
			}
		}
  checkWinner();
  playerSwitch();
}

$(document).ready(function(){

  //Starting player
  $(".arrow1 img").show();
  $(".arrow2 img").hide();

  //This is the new refactored code using 'this'..
  $("div.square").on("click", function () {
    let $currentSquare = $(this);
    let $logicSquare = board[this.id]
    if ($currentSquare.find("h1").html()!=="") { //checks for valid click
      console.log("invalid click.");
      return;
    }
    playerSwitch(); // playerSwitch(); // Switch to the next player... needs to be after checking for invalid click
    // AI();
    const boardIndex = parseInt( this.id ); //Board logic
    if ( currentPlayer === p1 ) {
      board[ boardIndex ] = p1; //gives p1 the board piece
    } else {
      board[ boardIndex ] = p2;
    }
    $currentSquare.find("h1").html(currentPlayer); //Adds player's value to the screen
    checkWinner(currentPlayer); //checks for winner
  });

  //This is going to reset the player scores
  $("#reset2 button").on("click", function () {
    $("#player2Score").html("0");
    $("#player1Score").html("0");
    clearBoard();
    playerSwitch();
  });


//Theme picker.... Very hard to work out and most likely pointless...
  $("#monoTheme").on("click", function() {
    console.log("Is this running")
    $("nav").css("background", "#0f380f");
    $("nav h1").css("color", "#9bbc0f");
    $("div h1").css("color", "#0f380f");
    $("div h3").css("color", "#9bbc0f");
    $("div h5").css("color", "#9bbc0f");
    $("span").css("color", "#0f380f");
    $("body").css("background", "#306230");
    $(".borderOn").css("border", "3px solid #9bbc0f");
    $(".square").css("border", "3px solid #9bbc0f");
    $("#resetButton").css({
      background: "#306230",
      boxShadow: "5px 2px 2px #0f380f",
      border: "2px solid #0f380f",
      color: "#9bbc0f",
    });
    $("#themeBoardHeading").css("color", "#0f380f");
    $("img.newSchool").attr("src", "images/monostar.png")
    $("#reset2").css("border", "");
    $("#currentWinner").css("border", "");
    $(".btn1:hover").css("backgroundColor", "#9bbc0f")
    $(".btn1:hover").css("color", "#0f380f")
  });

  $("#newTheme").on("click", function() {
    $("img.newSchool").attr("src", "images/star.png")
    $("nav").css("background", "red");
    $("nav h1").css("color", "white");
    $("div h1").css("color", "black");
    $("div h3").css("color", "black");
    $("div h5").css("color", "white");
    $("span").css("color", "red");
    $("body").css("background", "orange");
    $(".borderOn").css("border", "3px solid white");
    $(".square").css("border", "3px solid white");
    $("#resetButton").css({
      background: "orange",
      boxShadow: "5px 2px 2px red",
      border: "2px solid red",
      color: "black",
    });
    $("##themeBoardHeading").css("color", "black");
    $("img.newSchool").show()
    $("$newImg").hide();
    $("div#reset2").css("border", "0 orange");
    $("#currentWinner").css("border", "0");
    $(".btn1:hover").css("backgroundColor", "red")
    $(".btn1:hover").css("color", "white")
  });

});
