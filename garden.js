const cells = document.querySelectorAll(".cell"); // cells becomes array with data of each element with id "cell"

let plants = ["", "", "", "", "", "", "", "", ""];

const adjacentPlants = [
    ["1", "3", "4"],  //to cell 0
    ["0", "2", "3", "4", "5"],  //to cell 1
    ["1", "4", "5"],  //to cell 2
]
let adjacentPlaceholder = [];

startgame()




function startgame(){

    cells.forEach(function(cell) {
        cell.addEventListener("click", cellClicked);  //ignore this cell it is placeholder for certain index in "cells"
    });

}

function cellClicked(){

    const cellIndex = this.getAttribute("cellIndex");
    plants[cellIndex] = "x";
    this.textContent = "x";
    console.log("cellClicked")

    updateCell(this, cellIndex);
}
function updateCell(cell, index){
    plants[index] = currentPlayer;
    cell.textContent = currentPlayer;
}


