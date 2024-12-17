const cells = document.querySelectorAll(".cell");
let cellId = {
    row : null,
    collumn : null,
};
let plantedArray = [];


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
    cells.forEach(updateCells(cell))
}
function updateCells(cell){
    let cellId = {
        row : cell.getAttribute("cellRow"),
        collumn : cell.getAttribute("cellCollumn"),
    }
    for(let i=0; i < plantedArray.length; i++){
        if(cellId == plantedArray[i]){
            this.textContent = "X"
        }
    }
}