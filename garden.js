const cells = document.querySelectorAll(".cell"); // cells becomes array with data of each element with id "cell"
const btn = document.querySelector("#tick");

let plants = ["", "", "", "", "", "", "", "", ""];

const adjacentPlants = [
    ["1", "3", "4"],  //to cell 0
    ["0", "2", "3", "4", "5"],  //to cell 1
    ["1", "4", "5"],  //to cell 2
    ["0", "1", "4", "6", "7"], //to cell 3
    ["0", "1", "2", "3", "5", "6", "7", "8"], //to cell 4
    ["1", "2", "4", "7", "8"], //to cell 5
    ["3", "4", "7"], // to cell 6
    ["3", "4", "5", "6", "8"], //to cell 7
    ["4", "5", "7"], //to cell 8
]
let adjacentPlaceholder = [];
let adjacentAmount = null;


startgame()




function startgame(){

    cells.forEach(function(cell) {
        cell.addEventListener("click", cellClicked);  //ignore this cell it is placeholder for certain index in "cells"
    });

    btn.addEventListener("click", tick())

}

function cellClicked(){

    const cellIndex = this.getAttribute("cellIndex");
    if(plants[cellIndex] == "x" || this.textContent == "x"){
        plants[cellIndex] = "";
        this.textContent = "";
    }
    else {
        plants[cellIndex] = "x";
        this.textContent = "x";
    }
    console.log("cellClicked")
}

function tick(){
    for(let i = 0; i < plants.length; i++){
        let adjacentPlaceholder = adjacentPlants[i]
        adjacentAmount = 0
        
        for(let i = 0; i < adjacentPlaceholder.length; i++){
            
            if(plants[adjacentPlaceholder[i]] == "x"){

                adjacentAmount++
            }
        }

        if(adjacentAmount >= 2 && plants[i] == "x"){
            plants[i] = "o";
            this.textContent = "o";
        }
    }
}

