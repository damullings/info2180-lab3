document.addEventListener("DOMContentLoaded",function()
{
    const squares = document.getElementById("board").children;
    for (i = 0; i < squares.length; i++)
    {
        squares[i].className += "square";
    }

})