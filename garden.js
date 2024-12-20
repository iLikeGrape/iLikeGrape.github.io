const cells = document.querySelectorAll(".cell");
const btn = document.querySelector("#tick");
let plants = ["", "", "", "", "", "", "", "", ""];
let adjacentArray = [
    ["0","0"], //to cell 0
    ["0","0"], //to cell 1
    ["0","0"], //to cell 2
    ["0","0"], //to cell 3
    ["0","0"], //to cell 4
    ["0","0"], //to cell 5
    ["0","0"], //to cell 6
    ["0","0"], //to cell 7
    ["0","0"], //to cell 8
    //[#number of x, #number of o]
];
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
];
let adjacentPlantsPlaceholder;
let adjacentArrayPlaceholder;
let amountPlaceholder;



function startgame(){
    cells.forEach(function(cell) {
        cell.addEventListener("click", cellClicked);  
    });

    btn.addEventListener("click", tick)
}



function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    if(plants[cellIndex] == "" && this.textContent == ""){
        plants[cellIndex] = "x"; //changing box you clicked on 
        this.textContent = "x";
        let adjacentPlantsPlaceholder = adjacentPlants[cellIndex] //preping for next step

        for(let i = 0; i < adjacentPlantsPlaceholder.length; i++){ //updating adjacent plants
            let adjacentArrayPlaceholder = adjacentArray[adjacentPlantsPlaceholder[i]]//setting placeholder to each cell touching cell clicked
            adjacentArrayPlaceholder[0]++ //changing amount of x's by 1
            adjacentArray[adjacentPlantsPlaceholder[i]] = adjacentArrayPlaceholder //updating real array
        }
    }



    console.log("cellClicked")
}

function tick(){
    cells.forEach(function(cell){
        const cellIndex = cell.getAttribute("cellIndex");
        let adjacentArrayPlaceholder = adjacentArray[cellIndex]
        if(adjacentArrayPlaceholder.contains("x")){
            cell.textContent = "o"
            plants[cellIndex] = "o"
            let adjacentPlantsPlaceholder = adjacentPlants[cellIndex] //preping for next step

            for(let i = 0; i < adjacentPlantsPlaceholder.length; i++){ //updating adjacent plants
                let adjacentArrayPlaceholder = adjacentArray[adjacentPlantsPlaceholder[i]]//setting placeholder to each cell touching cell clicked
                adjacentArrayPlaceholder[1]++ //changing amount of o's by 1
                adjacentArray[adjacentPlantsPlaceholder[i]] = adjacentArrayPlaceholder //updating real array
            }
        }
    })
}
startgame()
