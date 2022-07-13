var rows = 4, columns = 4;
var selectedpuzzle, otherpuzzle, timeremaining = 60, timerInterval, userscore = 0;

window.onload = function() 
{
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let tile = document.createElement("img");
            tile.src = "./images/blank.jpg";

            
            tile.addEventListener("dragleave", dragLeave); 
            tile.addEventListener("dragend", dragEnd); 
            tile.addEventListener("drop", dragDrop);     
            tile.addEventListener("dragstart", dragStart); 
            tile.addEventListener("dragover", dragOver);  
            tile.addEventListener("dragenter", dragEnter); 

            document.getElementById("puzzlegrid").append(tile);
        }
    }

    let puzzlepieces = [];
    for (let i=1; i <= rows*columns; i++) 
    {
        puzzlepieces.push(i.toString());
    }
    puzzlepieces.reverse();

    for (let i = 0; i < puzzlepieces.length; i++) 
    {
        let tile = document.createElement("img");
        tile.src = "./images/" + puzzlepieces[i] + ".jpg";

    
        tile.addEventListener("dragleave", dragLeave); 
        tile.addEventListener("dragend", dragEnd); 
        tile.addEventListener("drop", dragDrop);     
        tile.addEventListener("dragstart", dragStart); 
        tile.addEventListener("dragover", dragOver);  
        tile.addEventListener("dragenter", dragEnter); 

        document.getElementById("puzzlepieces").append(tile);
    }
}
function dragStart() 
{
    selectedpuzzle = this; 
}
function dragOver(e) 
{
    e.preventDefault();
}
function dragEnter(e) 
{
    e.preventDefault();
}
function dragLeave() 
{
}
function dragDrop() 
{
    otherpuzzle = this;
}
function dragEnd() 
{
    let currImg = selectedpuzzle.src;
    let otherImg = otherpuzzle.src;
    selectedpuzzle.src = otherImg;
    otherpuzzle.src = currImg;
}
function starttimer()
{
    document.getElementById("submitscore").hidden = false;
    document.getElementById("checkscore").hidden = false;
    document.getElementById("leaderboard").hidden = false;
    
    let timer = document.getElementById("timer");
    timer.hidden = false;
    timerInterval = setInterval(function(){
        timeremaining -=1;
        timer.innerHTML = "Time Remaining: "+ timeremaining;
        if (timeremaining == 0)
        {
            clearInterval(timerInterval);
        }
    },1000) 
}
function scorecalculator()
{
    if(timeremaining<=0)
    {
        submitscore.innerHTML = "Your time exceeded 60 seconds, Better Luck Next Time!"; 
    }
    else{
        userscore = 3 * timeremaining;
        submitscore.innerHTML = "CONGRATULATIONS! YOUR SCORE IS: "+userscore;
    }
}

function verifypuzzle()
{
    //was supposed to make a function that checks whether the puzzle is correct.
}