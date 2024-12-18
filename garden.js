const cells = document.querySelectorAll(".cell");
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

function startgame(){
    cells.forEach(function(cell) {
        cell.addEventListener("click", cellClicked);  
    });

    btn.addEventListener("click", tick)
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
        let adjacentAmount = 0
        
        for(let j = 0; j < adjacentPlaceholder.length; j++){
            
            if(plants[adjacentPlaceholder[j]] == "x"){
                adjacentAmount++
            }
        }

        if(adjacentAmount >= 2 && plants[i]!= "x" && plants[i]!= "o"){
            plants[i] = "o";
            cells[i].textContent = "o";
        }
    }
}




startgame()
