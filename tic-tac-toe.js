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
    //e.target.classList.remove("hover O");
    e.target.classList.add("hover");
    
}

function removeHighlight(e)
{
    e.target.classList.remove("hover");
}

function clickFunction(e)
{
    var currentPlayer = xTurn ? playerX : playerO;
    
    const square = e.target;
    square.innerHTML = square.innerHTML + currentPlayer;
    square.className = square.className + " " + currentPlayer;
    
    //Make a note of the squares that have been played in
    if (xTurn)
    {
        arrayX.push(square.id) ;
    }
    else
    {
        arrayO.push(square.id) ;
    }

    xTurn = xTurn ? false : true;
    
}