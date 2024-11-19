//board
let board;
let boardWidth = 500;
let boardHeight = 600;
let context;

let gameOver = false

//ship
let shipWidth = 64;
let shipHeight = 64;
let shipX = 218;
let shipY = 504;
let shipImg; 

//ship varuble
let ship = {
    x : shipX,
    y : shipY,
    width : shipWidth,
    height : shipHeight
}

//physics for ship

let Xspeed = 0;
let moveLeft = false;
let moveRight = false;

window.onload = function() { //when game starts 
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d"); //used for drawing on the board

    //draw initial dinosaur
    // context.fillStyle="green";
    // context.fillRect(dino.x, dino.y, dino.width, dino.height);

    shipImg = new Image();
    shipImg.src = "./spaceinvadersImgs/ship.png";
    shipImg.onload = function() {
        console.log("imgLoaded")
        context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
    }


    window .addEventListener("keydown", function(e){
        switch(e.key){
            case "ArrowLeft":
                moveLeft = true
                break;
            case "ArrowRight":
                moveRight = true
                break;
        }
    }, false);
    window.addEventListener("keyup", function(e){
        switch(e.key){
            case "ArrowLeft":
                moveLeft = false
                break;
            case "ArrowRight":
                moveRight = false
                break;
        }
    }, false);
    update()

}
function update(){
    requestAnimationFrame(update);
    console.log("update")
    //preping for next frame
    if (gameOver) {
        return;
    }

    ship.x += Xspeed;   

    if(moveLeft && !moveRight){
        Xspeed = -5
    }
    if(moveRight && !moveLeft){
        Xspeed = 5
    }
    if(!moveLeft && !moveRight){
        Xspeed = 0
    }
    context.clearRect(0, 0, board.width, board.height);
    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
   

       
}

