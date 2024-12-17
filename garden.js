const cells = document.querySelectorAll(".cell"); // cells becomes array with data of each element with id "cell"

let cellId = { //used for pushing data into planted array
    row : null,
    collumn : null,
};

let plantedArray = []; //used to store data of which cells have plants


function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
}

function cellClicked(){
    let cellId = {
        row : this.getAttribute("cellRow"),
        collumn : this.getAttribute("cellCollumn"),
    }
    plantedArray.push(cellId)
}
function update(){
}
function updateCells(){
    for(let i=0; i < cells.length; i++){
        let cellId = cells[i] //seting cellId placeholder to each cell at a time

        for(let i=0; i < plantedArray.length; i++){ //for each cell, checks every slot of planted array to look for a match
            if(cellId == plantedArray[i]){
                cell.textContent = "X"
            }
        }
    }

    for(let i=0; i < plantedArray.length; i++){
        if(cellId == plantedArray[i]){
            this.textContent = "X"
        }
    }
}