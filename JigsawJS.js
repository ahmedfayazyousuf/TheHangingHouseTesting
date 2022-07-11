var r = 4, c = 4, currentPuzzle, otherPuzzle, puzzle;

window.onload = function(){
    for(let i=0;i<r;i++)    
    {
        for(let j=0;j<c;j++)
        puzzle = document.createElement("img");
        puzzle.src = "./images/blank.jpg"
        document.getElementById("grid").append(puzzle);
    }
}