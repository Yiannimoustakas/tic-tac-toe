# Project-0: Tic-Tac-Toe

## Live game link
https://yiannimoustakas.github.io/tic-tac-toe/

## Project Description
This is our initial project of the GA WDI29 course. The goal of this project was to display a summation of the content learnt over the first two weeks of the course. It includes a HTML file, CSS stylesheet and a Javascript script. Our class was given a total of one week to complete the project. The main goal of the project was to create a **fully playable** tic-tac-toe game. We were also given a list of additional features, which we could choose to include or omit depending on the student's discretion.

## Final Version Screenshots
![Imgur](https://i.imgur.com/h7bWIHq.png)
![Imgur](https://i.imgur.com/m3O41to.png)

## Features
My feature creep ended on Thursday night before our presentation. You can see some of the features from my two images above. The game includes:
* Fully functioning tic-tac-toe game
* The game will recognise a draw or win and will display the result in the middle square of the game board
* If the result ends up as a win, the winning player will have their score added to their own scoreboard which you can see in the top left and right sides of the game board
* Below the game is a reset button which will clear the result of the board and start again from player 1
* on the right side of the page you will see a "Theme Picker" table. The two buttons within this table will do exactly that. Toggle between two theme colours, which I have outlined as "Old School" and "New School", roughly taking on the colour scheme from some classic Nintendo games.
* My final feature added was the games Artificial Intelligence. The player 2 or the "computer" will play against player 1. It is a very basic form of intelligence and has very little concept of winning the game.

## Known Bugs
1. ~~After an initial win, the middle board will stay orange. This is due the changing of the background colour after a win is announced. Was not fixed by the final day of the project.~~ **Last Minute Fix** 
2. The AI is *not very* intelligent. It will only work to a random free square within the board. My AI update with tactical moves would only result in the AI taking over multiple squares of the board within one turn. With a bit more time I would have been able to fix this.
3. I also ran out of time trying to work out a way to toggle between AI and 2 player. It would have been a nice add on, but again, ran out of time.

## Tech Used
* JavaScript
* HTML
* CSS
* jQuery

## Project Focus
My main goal of project0 was firstly to display all the skills I have learnt in the first two weeks of the course. Coming from 0 experience in coding, I believe I have shown an enormous improvement, and something I had only dreamed of doing some 3 weeks ago.
I put a lot of time and effort into keeping the JavaScript as short and concise as my skills would let me at the time. I had cut my code in half at least 4 times in this project after a few refactoring sessions but I know as my skills advance I will be able to do even less.
I also made very sure that my code had a _**SEPARATION OF CONCERN**_ between the *game logic* and *jQuery* display. I believe that it worked out in that the game logic did not include any display code and the display code did not include any game logic.

## V2 Wishlist
* My first addition would be to toggle between AI and Multiplayer. On my multiplayer mode that **I have already written**, the star sitting on the left of the screen would toggle left and right indicating which players turn it was.
* I would add some further intelligence to my AI player. Work on the game filling the blank spaces on the board most valuable to a winning outcome.
* I would liked to have created a customisable board, that would increase in table size at the players discretion.
