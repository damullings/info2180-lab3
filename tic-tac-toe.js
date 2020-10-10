const playerX = "X";
const playerO = "O";
var xTurn = true;
var arrayX = [] ;
var arrayO = [];

const Wins = 
[
    [0,3,6],
    [0,1,2],
    [0,4,8],
    [2,5,8],
    [0,3,6],
    [1,4,7],
    [3,4,5],
    [6,7,8],
    [2,4,6]
]

document.addEventListener("DOMContentLoaded",function()
{
    //When the page loads, initialize the array to store the values of where X and Os have been placed
    
    
    array = [];
    
    var squares = document.getElementById("board").children; //Get all the children of the board. These are the divs
    for (i = 0; i < squares.length; i++)
    {
        squares[i].className += "square"; //Style the squares
        squares[i].addEventListener('click',clickFunction,{once : true}); //Add an onclick event listener to each of the squares
        squares[i].id += i; //Add a number ID to each square so that we can check wins
        squares[i].addEventListener("mouseover",styleSquare);
        squares[i].addEventListener("mouseout",removeHighlight);
    }


})

function styleSquare(e)
{
    //Add the hover class to the square which changes the css
    e.target.classList.add("hover");
    
}

function removeHighlight(e)
{
    //Remove the hover class to the square which changes the css
    e.target.classList.remove("hover");
}

function clickFunction(e)
{
    var currentPlayer = xTurn ? playerX : playerO; //If it is X's turn then the current player = X
    var currPlays;
    const square = e.target;
    square.innerHTML = square.innerHTML + currentPlayer; //Put an X or O in the square
    square.className = square.className + " " + currentPlayer; //Add the X or O to the class
    
    //Make a note of the squares that have been played in
    if (xTurn)
    {
        arrayX.push(parseInt(square.id)) ; //X's Moves
        currPlays = arrayX;
    }
    else
    {
        arrayO.push(parseInt(square.id)) ; //O's Moves
        currPlays = arrayO;
    }

    if (isWinner(currPlays))
    {
        stat = document.getElementById("status"); //Get the element with the ID status
        
        stat.innerHTML = "Congratulations! " + currentPlayer + " is the Winner!";
    }
    
    xTurn = xTurn ? false : true; //Change the player's turn to the other player.
    
    
}

function isWinner(plays)
{
    var check = true;
    
    return Wins.some(winCombo => { //Check if there is atleast one winning combination that :
        return winCombo.every(pos =>{  //has every position in the combination filled in the players moves
            return plays.includes(pos); //this checks each play against the position being tested
                
        })
               
    })   
}