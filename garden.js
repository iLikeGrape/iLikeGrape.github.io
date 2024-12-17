const cells = document.querySelectorAll(".cell"); // cells becomes array with data of each element with id "cell"

let cellId = { //used for pushing data into planted array
    row : null,
    collumn : null,
};

let plantedArray = []; //used to store data of which cells have plants

let board;
let boardWidth = 800;
let boardHeight = 500;
let context;


function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked))
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d"); //used for drawing on the board

    //drawing text
    context.fillStyle="green";
    context.fillText(cells, 40, 20)
    context.fillText(plantedArray, 40, 40)

}

function cellClicked(){
    let cellId = {
        row : this.getAttribute("cellRow"),
        collumn : this.getAttribute("cellCollumn"),
    }
    plantedArray.push(cellId)
    console.log(`${cellId} was clicked`)
}
function update(){
    requestAnimationFrame(update)
    updateCells()
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
    console.log("cell update")
}