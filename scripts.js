let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game. 
//Start button. 
var startButton = document.createElement('button');
startButton.innerText = 'Start Game!';
document.getElementById('game-over-lbl').appendChild(startButton);

// use the value stored in the nextPlayer variable to indicate who the next player is
let player = document.querySelector('b');
player.innerText = 'Next player: ';


//This call will create the buttons needed for the gameboard.
//Creation of game board.
createGameBoard()

function createGameBoard()
{

    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    //For loop which creates the game board. 
   for (let x = 0; x < 9; x++) {

        let id = 'c' + (x+1);
        var button = document.createElement('button');
        document.getElementById(id).appendChild(button); 

   }

}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

        //Using an if-else statement it will determine when the button is clicked as prompted.
        //Subsequently, the space inside the square brackets is replaced with the value of next player. 
        

        //Switches between o and x. 
        event.target.innerText = nextPlayer;

        if (nextPlayer === 'O') {

            nextPlayer = 'X';

        } else {

            if (nextPlayer === 'X') {

                nextPlayer = 'O';

            }

        }

        let prompt = "Next Player: " + nextPlayer;
        player.innerText = prompt;

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
        event.target.disabled = 'disabled'; //Ensures button is only clickable once as specified. 

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let labelValue = document.getElementById('game-over-lbl'); //Label id with 'game-over-lbl'
        var headerValue = document.createElement('h1'); //Inside <h1>
        headerValue.innerText = 'Game over!'; //Display words 'Game over'
        labelValue.appendChild(headerValue); 
    }

    
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
   let click = true;

   for (let x = 0; x < btns.length; x++) {

        if(!btns[x].disabled) {
            click = false;
        }

   }

   return click;


}
